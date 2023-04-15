import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Input } from '../commons/Input/Input';
import { Button } from '../commons/Button/Button';
import { ModalProps } from './ModalProps';
import { useGetPassRecoveryTokenMutation } from '../../features/auth/ApiAuthSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setPassRecoveryToken } from '../../features/auth/AuthSlice';

export const ForgotPassModal: React.FC<ModalProps> = ({
  isOpen,
  close,
  goToOtherModal,
  comebackToPrevModal
}) => {
  const [email, setEmail] = useState<string>('');
  const [getRecoveryToken] = useGetPassRecoveryTokenMutation();

  const dispatch: AppDispatch = useDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();

    const payload: object = {
      email_receiver: email
    };

    const result = await getRecoveryToken(payload).unwrap();
    const recoveryToken: string = result['Email send'];

    dispatch(setPassRecoveryToken(recoveryToken));
  };

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div
        className="flex flex-col items-center justify-center w-[600px] h-[100%] bg-dark_green 
        rounded-[20px] border-2 border-green text-base font-lemon text-center text-green"
      >
        <span
          className="text-[40px] relative left-[270px] top-[10px] hover:text-yellow cursor-pointer"
          onClick={close}
        >
          &times;
        </span>
        <h2 className="w-[440px] text-green text-[40px] font-semibold mt-[10px] leading-[45px]">
          Przypomnienie hasła
        </h2>
        <p className="w-[420px] my-[30px] text-[14px]">
          Na Twój adres zostanie wysłany e-mail, który zawiera token do zmiany
          hasła. Zmiana hasła będzie możliwa po wypełnieniu wszystkich danych w
          formularzu.
        </p>
        <form method="post" onSubmit={onHandleSubmit}>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            width="w-[340px]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            text="Wyślij email"
            type="submit"
            value="send_mail"
            styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
            text-green text-base font-lemon px-6 py-2 w-[222px]"
            onClick={goToOtherModal}
          />
        </form>
        <span
          className="block my-[18px] text-[14px] underline hover:text-yellow cursor-pointer"
          onClick={comebackToPrevModal}
        >
          Wróć do logowania
        </span>
      </div>
    </Popup>
  );
};
