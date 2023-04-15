import { useState } from 'react';
import { Button } from '../commons/Button/Button';
import { LoginModal } from './LoginModal';
import { ForgotPassModal } from './ForgotPassModal';
import { SetNewPassModal } from './SetNewPassModal';

export const LoginPopup = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const closeLoginModal = () => setIsLoginOpen(false);

  const [isForgotPassOpen, setIsForgotPassOpen] = useState<boolean>(false);
  const closeForgotPassModal = () => setIsForgotPassOpen(false);

  const [isNewPassModalOpen, setIsNewPassModalOpen] = useState<boolean>(true);
  const closeNewPassModal = () => setIsNewPassModalOpen(false);

  const goToForgotPassModal = () => {
    closeLoginModal();
    setIsForgotPassOpen((open) => !open);
  };

  const goToLoginModal = () => {
    closeForgotPassModal();
    setIsLoginOpen((open) => !open);
  };

  const goToNewPassModal = () => {
    closeForgotPassModal();
    setIsNewPassModalOpen((open) => !open);
  };

  return (
    <>
      <Button
        text="Zaloguj się"
        value="login"
        styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
        text-green text-base font-lemon px-6 py-2 w-[160px]"
        onClick={() => setIsLoginOpen((o) => !o)}
      />
      <LoginModal
        isOpen={isLoginOpen}
        close={closeLoginModal}
        goToOtherModal={goToForgotPassModal}
      />
      <ForgotPassModal
        isOpen={isForgotPassOpen}
        close={closeForgotPassModal}
        comebackToPrevModal={goToLoginModal}
        goToOtherModal={goToNewPassModal}
      />
      <SetNewPassModal
        isOpen={isNewPassModalOpen}
        close={closeNewPassModal}
        goToOtherModal={goToLoginModal}
      />
    </>
  );
};
