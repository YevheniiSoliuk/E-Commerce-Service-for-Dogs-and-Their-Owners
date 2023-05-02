import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { Input } from '../commons/Input/Input';
import { Button } from '../commons/Button/Button';
import { ModalProps } from './ModalProps';
import { useSetNewPasswordMutation } from '../../features/auth/ApiAuthSlice';
import { isErrorWithMessage, isFetchBaseQueryError } from '../../helpers';

export const SetNewPassModal: React.FC<ModalProps> = ({ isOpen, close }) => {
  const [email, setEmail] = useState<string>('');
  const [recoveryToken, setRecoveryToken] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [repeatPass, setRepeatPass] = useState<string>('');

  const [setNewPassword] = useSetNewPasswordMutation();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    setErrorMsg('');
  }, [email, recoveryToken, newPass, repeatPass]);

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();

    const payload: object = {
      email_receiver: email,
      recovery_token: recoveryToken,
      new_password: newPass,
      new_password_repeat: repeatPass
    };

    try {
      if (newPass !== repeatPass) {
        setErrorMsg("Passwords don't match each other");
      } else {
        setNewPassword(payload);
        setIsSuccess(true);
      }
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
        setErrorMsg(errMsg);
      } else if (isErrorWithMessage(err)) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('Setting new password failed');
      }
    }
  };

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div
        className="flex flex-col items-center justify-center w-[600px] h-[100%] bg-dark_green 
        rounded-[20px] border-2 border-green text-base font-lemon text-center text-green pb-[20px]"
      >
        <span
          className="text-[40px] relative left-[270px] top-[10px] hover:text-yellow cursor-pointer"
          onClick={close}
        >
          &times;
        </span>
        <h2 className="w-[440px] text-green text-[40px] font-semibold my-[10px] leading-[45px]">
          Podaj nowe hasło
        </h2>
        {<p className="text-red text-[20px] my-[5px]">{errorMsg}</p>}
        <form method="post" onSubmit={onHandleSubmit}>
          <Input
            id="email"
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            width="w-[340px]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required={true}
          />
          <Input
            id="recovery_token"
            type="text"
            value={recoveryToken}
            name="token"
            placeholder="Token"
            width="w-[340px]"
            onChange={(e) => {
              setRecoveryToken(e.target.value);
            }}
            required={true}
          />
          <Input
            id="new_pass"
            type="password"
            value={newPass}
            name="new_pass"
            placeholder="Nowe hasło"
            width="w-[340px]"
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
            required={true}
          />
          <Input
            id="repeat_new_pass"
            type="password"
            value={repeatPass}
            name="repeat_new_pass"
            placeholder="Powtórz hasło"
            width="w-[340px]"
            onChange={(e) => {
              setRepeatPass(e.target.value);
            }}
            required={true}
          />
          <Button
            text="Zapisz"
            type="submit"
            value="set_new_pass"
            styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
            text-green text-base font-lemon px-6 py-2 w-[222px]"
            onClick={isSuccess ? close : undefined}
          />
        </form>
        {/* <span className="block my-[18px] text-[14px] underline hover:text-yellow cursor-pointer" onClick={goToOtherModal}>Wróć do logowania</span> */}
      </div>
    </Popup>
  );
};
