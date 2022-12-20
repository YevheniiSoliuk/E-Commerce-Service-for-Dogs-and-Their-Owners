import React, { useEffect } from "react";
import Navbar from "../commons/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import CartButton from "../IconButtons/CartButton";
import FavoriteButton from "../IconButtons/FavoriteButton";
import NotificationButton from "../IconButtons/NotificationsButton";

import logo from "../../assets/images/logo.webp";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/AuthSlice";
import Button from "../commons/Button/Button";
import { AppDispatch, RootState } from "../../store/store";

const Header = () => {

  const {user, isAuth} = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
    navigate("/");
  }

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap justify-between sm:flex-nowrap z-50 w-full bg-dark_green px-[30px] h-[100px] items-center">
      <Link to="/"><img className="w-[220px] h-[90px] hover:cursor-pointer" src={logo} alt="logo"/></Link>
      <Navbar/>
      <div className="flex justify-between items-center">
        <CartButton />
        <FavoriteButton />
        <NotificationButton />
      </div>
      {isAuth ? <>
        <p className="text-[16px] mr-10px">{user?.name}</p>
        <Button text="Wyloguj się" value="logout" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[160px]" onClick={() => logout()}/> </> : <Login/>
      }
    </header>
  )
}

export default Header;