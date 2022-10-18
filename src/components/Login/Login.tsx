import React, {useState} from "react";
import Button from "../commons/Button/Button";
import LoginModal from "./LoginModal";
import ForgotPassModal from "./ForgotPassModal";

const LoginPopup = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const closeLoginModal = () => setIsLoginOpen(false);

  const [isForgotPassOpen, setIsForgotPassOpen] = useState(false);
  const closeForgotPassModal = () => setIsForgotPassOpen(false);
  
  const goToForgotPassModal = () => { closeLoginModal(); setIsForgotPassOpen(o => !o) }
  const goToLoginModal = () => { closeForgotPassModal(); setIsLoginOpen(o => !o) }

  return (
    <>
      <Button text="Zaloguj się" value="login" width="w-[160px]" onClick={() => setIsLoginOpen(o => !o)}/>
      <LoginModal isOpen={isLoginOpen} close={closeLoginModal} goToOtherModal={goToForgotPassModal}/>
      <ForgotPassModal isOpen={isForgotPassOpen} close={closeForgotPassModal} goToOtherModal={goToLoginModal} />
    </>
  )
}

export default LoginPopup;