import { Link, useNavigate } from "react-router-dom";

import { Navbar } from "../commons/Navbar/Navbar";
import { LoginPopup } from "../Login/Login";
import { CartButton } from "../IconButtons/CartButton";
import { FavoriteButton } from "../IconButtons/FavoriteButton";
import { Button } from "../commons/Button/Button";

import logo from "../../assets/images/logo.webp";
import { getCurrentUser } from "../../controllers/userController";
import { useEffect, useState } from "react";
import { logout } from "../../controllers/auth/user";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setIsAuth } from "../../features/auth/AuthSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      const userID = user?.uid || "";

      const fetchData = async () => {
        try {
          const user = await getCurrentUser(userID);
          
          if(user !== null){
            dispatch(setIsAuth(true));
            setUsername(user.name);
          }
        } catch(error) {
          console.log(error);
        }
      }
  
      fetchData();
    })
    
  }, [dispatch])

  const signOut = async () => {
    try {
      await logout();
      dispatch(setIsAuth(false));
      setUsername("");
      navigate("/");
    } catch(error) {
      console.log("Failed to logout");
    }
  }

  return (
    <header 
      className="sticky top-0 inset-x-0 flex flex-wrap justify-between sm:flex-nowrap z-50 w-full 
      bg-dark_green px-[30px] h-[100px] items-center border-b-[2px] border-b-green"
    >
      <Link to="/">
        <img 
          className="w-[220px] h-[90px] hover:cursor-pointer" 
          src={logo} 
          alt="logo"
        />
      </Link>
      <Navbar/>
      {isAuth ? 
        <>
          <div className="flex justify-between items-center">
            <CartButton />
            <FavoriteButton />
          </div>
          <p 
            className="text-[32px] mr-10px hover:text-yellow hover:cursor-pointer" 
            onClick={()=>{navigate("/profile")}}
          >{username}</p>
          <Button 
            text="Wyloguj się" 
            value="logout" 
            styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
            text-green text-base font-lemon px-6 py-2 w-[160px]" 
            onClick={() => signOut()}
          />
        </> :
        <>
          <div className="flex justify-between items-center">
            <div className="flex gap-[10px] items-center">
              <p className="text-[32px] font-normal">Koszyk</p>
              <CartButton />
            </div>
          </div>
          <LoginPopup/>
        </>
      }
    </header>
  )
}