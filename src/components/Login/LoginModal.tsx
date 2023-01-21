import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import { Link, useNavigate } from "react-router-dom";
import Input from "../commons/Input/Input";
import Button from "../commons/Button/Button";
import { ModalProps } from "./ModalProps";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/auth/ApiAuthSlice";
import { setCredentials } from "../../features/auth/AuthSlice";
import { isErrorWithMessage, isFetchBaseQueryError } from "../../helpers";
import { IUser } from "../../interfaces/User";


const LoginModal = ({isOpen, close, goToOtherModal}: ModalProps) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const disabled: boolean = false;

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(()=>{
    setErrMsg("");
  }, [email, pwd])

  const clearLoginForm = () => {
    setEmail("");
    setPwd("");
  } 

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    const payload: object = {
      email: email, 
      password: pwd,
      disabled: disabled
    }

    try {
      const userData = await login(payload).unwrap();
      const token: string = userData.Tokens;
      const user: IUser = {
        id: userData["User Info"].id,
        name: userData["User Info"].name,
        lastname: userData["User Info"].surname,
        email: userData["User Info"].email,
        phone: userData["User Info"].phone_number, 
        login: userData["User Info"].login,
        password: userData["User Info"].password,
        photo: userData["User Info"].photo_url,
        address_id: userData["User Info"].address_id,
        coins: userData["User Info"].coins,
        is_admin: userData["User Info"].is_admin,
        favourites: userData["User Info"].favourites
      }

      dispatch(setCredentials({token, user}));
      clearLoginForm();
      navigate("/profile");
    } catch(err) {   
      if(isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data)
        setErrMsg(errMsg);
      } else if(isErrorWithMessage(err)) {
        setErrMsg(err.message);
      } else {
        setErrMsg("Login Failed");
      }
    }
  }

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div className="flex flex-col items-center justify-center w-[600px] h-[100%] bg-dark_green rounded-[20px] border-2 border-green text-base font-lemon text-center text-green">
        <span className="text-[40px] relative left-[260px] top-[10px] hover:text-yellow cursor-pointer" onClick={close}>
          &times;
        </span>

        <h2 className="text-green text-[40px] font-semibold mt-[20px] mb-[30px]">Login</h2>
        <p className="text-[20px] text-dark_red my-[10px]">{errMsg}</p>
        <form onSubmit={handleSubmit}>
          <Input 
            type="email" 
            name="login"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email" 
            width="w-[340px]" 
            required={true}/>
          <Input 
            type="password" 
            name="pass"
            value={pwd}
            onChange={(e)=>setPwd(e.target.value)}
            placeholder="Hasło" 
            width="w-[340px]"
            required={true}/>
          <span 
            className="block my-[17px] text-[14px] underline hover:text-yellow cursor-pointer" 
            onClick={goToOtherModal}
          >Nie pamiętam loginu lub hasła</span>
          {errMsg !== "" || email === "" || pwd === "" ?
            <Button 
              text="Załoguj się" 
              type="submit" 
              value="login" 
              styles="h-[50px] bg-orange/70 border-2 border-green rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[222px] cursor-none" 
              onClick={()=>{}}/> :
            <Button 
              text="Załoguj się" 
              type="submit" 
              value="login" 
              styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[222px]" 
              onClick={email && pwd ? close : undefined}/>
          }
        </form>
        
        <Link to="/signup">
          <span className="block my-[18px] text-[14px] underline hover:text-yellow" onClick={close}>Przejdź do rejestracji</span>
        </Link>
      </div>
    </Popup>
  )
}

export default LoginModal;