import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  useGetUserAddressQuery,
  useUpdateUserMutation
} from '../../../features/ApiUserSlice';
import { IUser, IUserUpdate } from '../../../interfaces/User';

import { Button } from '../../../components/commons/Button/Button';
import { Input } from '../../../components/commons/Input/Input';
import { Select } from '../../../components/commons/Select/Select';
import { auth } from '../../../firebase.config';
import { getCurrentUser } from '../../../controllers/userController';
import { onAuthStateChanged } from 'firebase/auth';

export const ContactInfoSettings = () => {
  // const { user } = useSelector((state: RootState) => state.auth);
  //const [user, setUser] = useState<IUser>();
  //const {data: address} = useGetUserAddressQuery(user.address);
  const [updateUser] = useUpdateUserMutation();

  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [province, setProvince] = useState<string>('Wojewodztwo');
  const [place, setPlace] = useState<string>('Miejscowosc');
  const [homeNumber, setHomeNumber] = useState<string>('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const userID = user?.uid || '';
      getCurrentUser(userID).then((user) => {
        if (user !== null) {
          setName(user.name);
          setLastname(user.lastname);
          setEmail(user.email);
          setPhone(user.phoneNumber);
          setStreet(user.address.street);
          setPostalCode(user.address.postalCode);
          setProvince(user.address.state);
          setPlace(user.address.city);
          setHomeNumber(user.address.homeNumber);
        }
      });
    });
  }, []);

  const resetInfo = () => {
    setName('');
    setLastname('');
    setEmail('');
    setPhone('');
    setStreet('');
    setPostalCode('');
    setProvince('Wojewodztwo');
    setPlace('Miejscowosc');
  };

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();

    const payload: IUserUpdate = {
      name: name,
      surname: lastname,
      phone_number: phone,
      state: province,
      city: place,
      home_number: homeNumber,
      post_code: postalCode,
      street: street
    };

    await updateUser(payload)
      .unwrap()
      .then((payload) => console.log('fullfilled', payload))
      .catch((error) => console.error('rejected', error));
  };

  return (
    <form method="PUT" onSubmit={onHandleSubmit}>
      <div
        className="flex justify-between w-[950px] h-[100%] bg-dark_green border-2 border-green 
        rounded-[25px] py-[40px] px-[50px]"
      >
        <div>
          <h2 className="text-[32px] text-center mb-[50px]">Dane Kontaktowe</h2>
          <Input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Imię"
            width="w-[340px]"
          />
          <Input
            id="nazwisko"
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            placeholder="Nazwisko"
            width="w-[340px]"
          />
          <Input
            id="email"
            type="mail"
            name="mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
            width="w-[340px]"
          />
          <Input
            id="phone"
            type="phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Numer komurkowy"
            width="w-[340px]"
          />
          <Input
            id="home"
            type="text"
            name="home-number"
            value={homeNumber}
            onChange={(e) => {
              setHomeNumber(e.target.value);
            }}
            placeholder="Nr domu"
            width="w-[340px]"
          />
        </div>
        <div>
          <h2 className="text-[32px] text-center mb-[50px]">Dane dostawy</h2>
          <Select
            id="wojew"
            name="wojews"
            values={['Dolnośląskie', 'Mazowieckie', 'Pomorskie']}
            placeholder="Województwo"
            styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] 
            shadow-md mb-[30px] px-[20px] py-[10px] outline-0"
            forPage=""
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
            }}
          />
          <Select
            id="place"
            name="places"
            values={['Wrocław', 'Lublin', 'Warszawa']}
            placeholder="Miejscowość"
            styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] 
            shadow-md mb-[30px] px-[20px] py-[10px] outline-0"
            forPage=""
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
          <Input
            id="street"
            type="text"
            name="street"
            value={street}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
            placeholder="Ulica"
            width="w-[340px]"
          />
          <Input
            id="post"
            type="text"
            name="postal-code"
            value={postalCode}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
            placeholder="Kod posztowy"
            width="w-[340px]"
          />
          <div className="flex justify-between items-center mt-[30px]">
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
      </div>
    </form>
  );
};
