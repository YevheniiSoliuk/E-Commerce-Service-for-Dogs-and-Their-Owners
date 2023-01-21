import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IUser } from '../../interfaces/User';
import { useGetUserAddressQuery } from '../../features/ApiUserSlice';

const DeliveryInfo = () => {

  const user: IUser | null  = useSelector((state: RootState) => state.auth.user);
  const { name, lastname, email, phone, address_id } = {...user};
  const {data: address} = useGetUserAddressQuery(address_id);

  return (
    <div className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green rounded-[20px] px-[30px] py-[30px]">
      <h3 className="text-center text-[32px]">Dane dostawy</h3>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
        <div className="px-[40px] py-[10px]">
          <div className="flex items-center justify-between text-[24px] mb-[15px]">
            <p className="font-semibold">Imię:</p>
            <p>{name}</p>
          </div>
          <div className="flex items-center justify-between text-[24px] mb-[15px]">
            <p className="font-semibold">Nazwisko:</p>
            <p>{lastname}</p>
          </div>
          <div className="flex items-center justify-between text-[24px] mb-[15px]">
            <p className="font-semibold">Ulica i numer:</p>
            <p>{address?.street} {address?.home_number}</p>
          </div>
          <div className="flex items-center justify-between text-[24px] mb-[15px]">
            <p className="font-semibold">Kod pocztowy:</p>
            <p>{address?.post_code}</p>
          </div>
          <div className="flex items-center justify-between text-[24px] mb-[15px]">
            <p className="font-semibold">Miasto:</p>
            <p>{address?.city}</p>
          </div>
          <div className="flex items-center justify-between text-[24px] mb-[15px]">
            <p className="font-semibold">Telefon:</p>
            <p>{phone}</p>
          </div>
          <div className="flex items-center justify-between text-[24px]">
            <p className="font-semibold">Email:</p>
            <p>{email}</p>
          </div>
        </div> 
    </div>
  );
};

export default DeliveryInfo;