import React, {useState} from "react";
import Button from "../commons/Button/Button";
import LoginModal from "./LoginModal";
import ForgotPassModal from "./ForgotPassModal";

const LoginPopup = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const closeLoginModal = () => setIsLoginOpen(false);

  const [isForgotPassOpen, setIsForgotPassOpen] = useState(false);
  const closeForgotPassModal = () => setIsForgotPassOpen(false);
  
  const goToForgotPassModal = () => { closeLoginModal(); setIsForgotPassOpen(open => !open) }
  const goToLoginModal = () => { closeForgotPassModal(); setIsLoginOpen(open => !open) }

  return (
    <>
      <Button text="Zaloguj się" value="login" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[160px]" onClick={() => setIsLoginOpen(o => !o)}/>
      <LoginModal isOpen={isLoginOpen} close={closeLoginModal} goToOtherModal={goToForgotPassModal}/>
      <ForgotPassModal isOpen={isForgotPassOpen} close={closeForgotPassModal} goToOtherModal={goToLoginModal} />
    </>
  )
}

export default LoginPopup;