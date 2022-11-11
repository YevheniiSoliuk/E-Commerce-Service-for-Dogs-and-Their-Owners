import React from "react";
import Popup from 'reactjs-popup';
import Input from "../commons/Input/Input";
import Button from "../commons/Button/Button";
import { ModalProps } from "./ModalProps";

const ForgotPassModal = ({isOpen, close, goToOtherModal}: ModalProps) => {
  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div className="flex flex-col items-center justify-center w-[600px] h-[500px] bg-dark_green rounded-[20px] border-2 border-green text-base font-lemon text-center text-green">
        <span className="text-[40px] relative left-[270px] top-[10px] hover:text-yellow cursor-pointer" onClick={close}>
          &times;
        </span>
        <h2 className="w-[440px] text-green text-[40px] mt-[10px] leading-[45px]">Przypomnienie hasła</h2>
        <p className="w-[420px] my-[30px] text-[14px]">Na Twój adres zostanie wysłany e-mail, który pozwala na automatyczne zalogowanie się. Zmiana hasła będzie możliwa po zalogowaniu na stronie edycji Twoich danych.</p>
        <Input id="email" type="email" name="email" placeholder="Email" width="w-[340px]"/>
        <Button text="Wyślij email" value="send_mail" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[222px]" onClick={close}/>
        <span className="block my-[18px] text-[14px] underline hover:text-yellow cursor-pointer" onClick={goToOtherModal}>Wróć do logowania</span>
      </div>
    </Popup>
  )
}

export default ForgotPassModal;