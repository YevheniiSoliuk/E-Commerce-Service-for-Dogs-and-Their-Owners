import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../commons/Input/Input';
import { Button } from '../commons/Button/Button';
import { ModalProps } from './ModalProps';
import { ILoginCredentials } from '../../interfaces/User';
import { login } from '../../controllers/auth/user';
import { setIsAuth } from '../../features/auth/AuthSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

export const LoginModal: React.FC<ModalProps> = ({
  isOpen,
  close,
  goToOtherModal
}) => {
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const clearLoginForm = () => {
    setEmail('');
    setPwd('');
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();

    const credentials: ILoginCredentials = {
      email: email,
      password: pwd
    };

    try {
      await login(credentials);
      dispatch(setIsAuth(true));
      clearLoginForm();
      navigate('/profile');
    } catch (err) {
      setErrMsg('Login failed');
    }
  };

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div
        className="flex flex-col items-center justify-center w-[600px] h-[100%] bg-dark_green 
        rounded-[20px] border-2 border-green text-base font-lemon text-center text-green"
      >
        <span
          className="text-[40px] relative left-[260px] top-[10px] hover:text-yellow cursor-pointer"
          onClick={close}
        >
          &times;
        </span>
        <h2 className="text-green text-[40px] font-semibold mt-[20px] mb-[30px]">
          Login
        </h2>
        <p className="text-[20px] text-dark_red my-[10px]">{errMsg}</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            width="w-[340px]"
            required={true}
          />
          <Input
            type="password"
            name="pass"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Hasło"
            width="w-[340px]"
            required={true}
          />
          <span
            className="block my-[17px] text-[14px] underline hover:text-yellow cursor-pointer"
            onClick={goToOtherModal}
          >
            Nie pamiętam loginu lub hasła
          </span>
          {errMsg !== '' || email === '' || pwd === '' ? (
            <Button
              text="Załoguj się"
              type="submit"
              value="login"
              styles="h-[50px] bg-orange/70 border-2 border-green rounded-3xl text-gree text-base 
              font-lemon px-6 py-2 w-[222px] cursor-none"
              onClick={() => {}}
            />
          ) : (
            <Button
              text="Załoguj się"
              type="submit"
              value="login"
              styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
              text-green text-base font-lemon px-6 py-2 w-[222px]"
              onClick={email && pwd ? close : undefined}
            />
          )}
        </form>

        <Link to="/signup">
          <span
            className="block my-[18px] text-[14px] underline hover:text-yellow"
            onClick={close}
          >
            Przejdź do rejestracji
          </span>
        </Link>
      </div>
    </Popup>
  );
};
