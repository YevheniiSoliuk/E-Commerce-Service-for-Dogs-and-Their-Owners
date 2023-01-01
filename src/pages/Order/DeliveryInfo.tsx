import React, { useState } from 'react';
import Input from '../../components/commons/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { toggleIsAnotherAddress } from '../../features/OrderSlice';
import { IUser } from '../../interfaces/User';
import Select from '../../components/commons/Select/Select';

const DeliveryInfo = () => {

  const user: IUser | null  = useSelector((state: RootState) => state.auth.user);
  const { id, name, lastname, email, phone, province, place, postalCode, street, homeNumber, address_id } = {...user};

  const isAnotherAddress = useSelector((state: RootState) => state.order.isAnotherAddress);
  const dispatch: AppDispatch = useDispatch();

  const [anotherName, setAnotherName] = useState<string>("");
  const [anotherLastname, setAnotherLastname] = useState<string>("");
  const [anotherEmail, setAnotherEmail] = useState<string>("");
  const [anotherPhone, setAnotherPhone] = useState<string>("");
  const [anotherStreet, setAnotherStreet] = useState<string>("");
  const [anotherHomeNumber, setAnotherHomeNumber] = useState<string>("");
  const [anotherPostalCode, setAnotherPostalCode] = useState<string>("");
  const [anotherPlace, setAnotherPlace] = useState<string>("Miejscowosc");

  return (
    <div className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green rounded-[20px] px-[30px] py-[30px]">
      <h3 className="text-center text-[32px]">Dane dostawy</h3>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <div className="ml-[30px]">
        <Input 
          id="address" 
          type="toggle" 
          name="toggle" 
          state={isAnotherAddress} 
          placeholder="Dostawa pod inny adres" 
          action={()=>{dispatch(toggleIsAnotherAddress())}}
        />
      </div>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto mt-[10px]"></div>
      {!isAnotherAddress ?
        <div className="px-[40px] py-[10px]">
          <div className="flex items-center justify-between text-[20px] mb-[15px]">
            <p>Imię:</p>
            <p>{name}</p>
          </div>
          <div className="flex items-center justify-between text-[20px] mb-[15px]">
            <p>Nazwisko:</p>
            <p>{lastname}</p>
          </div>
          <div className="flex items-center justify-between text-[20px] mb-[15px]">
            <p>Ulica i numer:</p>
            <p>{street} {homeNumber}</p>
          </div>
          <div className="flex items-center justify-between text-[20px] mb-[15px]">
            <p>Kod pocztowy:</p>
            <p>{postalCode}</p>
          </div>
          <div className="flex items-center justify-between text-[20px] mb-[15px]">
            <p>Miasto:</p>
            <p>{place}</p>
          </div>
          <div className="flex items-center justify-between text-[20px] mb-[15px]">
            <p>Telefon:</p>
            <p>{phone}</p>
          </div>
          <div className="flex items-center justify-between text-[20px]">
            <p>Email:</p>
            <p>{email}</p>
          </div>
        </div> :
        <div className="px-[40px] py-[30px]">
          <div className="flex justify-between">
            <Input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e)=>{setAnotherName(e.target.value)}} 
              placeholder="Imię" 
              width="w-[240px]"
              required={true}/>
            <Input 
              id="nazwisko" 
              type="text" 
              value={lastname} 
              onChange={(e)=>{setAnotherLastname(e.target.value)}} 
              placeholder="Nazwisko" 
              width="w-[240px]"
              required={true}/>
          </div>
          <div className="flex justify-between">
            <Input 
              id="email" 
              type="mail"
              value={email} 
              onChange={(e)=>{setAnotherEmail(e.target.value)}} 
              placeholder="E-mail" 
              width="w-[240px]" 
              required={true}/>
            <Input 
              id="phone" 
              type="phone"
              value={phone} 
              onChange={(e)=>{setAnotherPhone(e.target.value)}} 
              placeholder="Numer komurkowy"
              width="w-[240px]"
              required={true}/>
          </div>
          <div className="flex justify-between">
            <Select 
              id="place" 
              values={["Wrocław", "Lublin", "Warszawa"]} 
              placeholder="Miejscowość" 
              styles="w-[240px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" 
              forPage="" 
              value={place} 
              onChange={(e)=>{setAnotherPlace(e.target.value)}}/>
            <Input 
              id="post" 
              type="text" 
              value={postalCode} 
              onChange={(e)=>{setAnotherPostalCode(e.target.value)}} 
              placeholder="Kod posztowy" 
              width="w-[240px]"
              required={true}/>
          </div>
          <div className="flex justify-between">
            <Input 
              id="street" 
              type="text" 
              value={street} 
              onChange={(e)=>{setAnotherStreet(e.target.value)}} 
              placeholder="Ulica" 
              width="w-[240px]"
              required={true}/>
            <Input 
              id="home-number" 
              type="text" 
              value={homeNumber} 
              onChange={(e)=>{setAnotherHomeNumber(e.target.value)}} 
              placeholder="Nr domu" 
              width="w-[240px]"
              required={true}/>
          </div>
        </div>
      }
    </div>
  );
};

export default DeliveryInfo;