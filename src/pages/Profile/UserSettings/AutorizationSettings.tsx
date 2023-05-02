import React, { useEffect, useState } from 'react';
import { useUpdateUserPasswordMutation } from '../../../features/ApiUserSlice';
import { IUserUpdatePass } from '../../../interfaces/User';

import { Input } from '../../../components/commons/Input/Input';
import { Button } from '../../../components/commons/Button/Button';

export const AutorizationSettings = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [updatePassword] = useUpdateUserPasswordMutation();

  useEffect(() => {
    setErrorMsg('');
  }, [oldPassword, newPassword]);

  const resetInfo = () => {
    setOldPassword('');
    setNewPassword('');
  };

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();

    const payload: IUserUpdatePass = {
      old_password: oldPassword,
      new_password: newPassword
    };

    updatePassword(payload)
      .unwrap()
      .then((result) => console.log('fullfilled', result))
      .catch((error: string) => setErrorMsg(error));
  };

  return (
    <form method="PUT" onSubmit={onHandleSubmit}>
      <div
        className="flex flex-col items-center w-[950px] h-[100%] bg-dark_green border-2 
        border-green rounded-[25px] py-[40px] px-[50px]"
      >
        <h2 className="text-[32px] text-center mb-[50px]">Autoryzacja</h2>
        <p className="text-center text-red text-[20px]">{errorMsg}</p>
        <Input
          id="old-pass"
          type="password"
          name="old-pass"
          value={oldPassword}
          placeholder="Stare hasło"
          width="w-[340px]"
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
          required={true}
        />
        <Input
          id="new-pass"
          type="password"
          name="new-pass"
          value={newPassword}
          placeholder="Nowe hasło"
          width="w-[340px]"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          required={true}
        />
        <div className="flex justify-between items-center w-[340px] mt-[30px]">
          <Button
            text="Anuluj"
            value="reset"
            styles="h-[50px] bg-dark_red border-2 border-green hover:border-white rounded-3xl 
            text-white text-base font-lemon px-[6px] py-[2px] w-[150px] text-[16px]"
            onClick={() => {
              resetInfo();
            }}
          />
          <Button
            text="Zapisz"
            type="submit"
            value="save"
            styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
            text-green text-base font-lemon px-6 py-2 w-[150px]"
          />
        </div>
      </div>
    </form>
  );
};
