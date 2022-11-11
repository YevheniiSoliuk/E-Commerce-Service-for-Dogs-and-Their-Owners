import React from "react";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";
import Input from "../commons/Input/Input";
import Button from "../commons/Button/Button";
import { ModalProps } from "./ModalProps";

const LoginModal = ({isOpen, close, goToOtherModal}: ModalProps) => {
  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div className="flex flex-col items-center justify-center w-[600px] h-[500px] bg-dark_green rounded-[20px] border-2 border-green text-base font-lemon text-center text-green">
        <span className="text-[40px] relative left-[260px] top-[10px] hover:text-yellow cursor-pointer" onClick={close}>
          &times;
        </span>
        <h2 className="text-green text-[40px] mt-[20px] mb-[30px]">Login</h2>
        <Input id="login" type="text" name="login" placeholder="Login" width="w-[340px]"/>
        <Input id="pass" type="password" name="pass" placeholder="Hasło" width="w-[340px]"/>
        <span className="block my-[17px] text-[14px] underline hover:text-yellow cursor-pointer" onClick={goToOtherModal}>Nie pamiętam loginu lub hasła</span>
        <Button text="Załoguj się" value="login" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[222px]" onClick={close}/>
        <Link to="/signup">
          <span className="block my-[18px] text-[14px] underline hover:text-yellow" onClick={close}>Przejdź do rejestracji</span>
        </Link>
      </div>
    </Popup>
  )
}

export default LoginModal;