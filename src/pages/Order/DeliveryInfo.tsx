import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IUser } from '../../interfaces/User';
import { useGetUserAddressQuery } from '../../features/ApiUserSlice';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../controllers/userController';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';

export const DeliveryInfo = () => {
  // const user: IUser | null  = useSelector((state: RootState) => state.auth.user);
  // const { name, lastname, email, phoneNumber, address } = {...user};
  // const {data: userAddress} = useGetUserAddressQuery(address?.id);

  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const userID = user?.uid || '';
      getCurrentUser(userID).then((resolve) => {
        setCurrentUser(resolve);
      });
    });
  }, []);

  return (
    <section
      className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green 
      rounded-[20px] px-[30px] py-[30px]"
    >
      <h3 className="text-center text-[32px]">Dane dostawy</h3>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <div className="px-[40px] py-[10px]">
        <div className="flex items-center justify-between text-[24px] mb-[15px]">
          <p className="font-semibold">Imię:</p>
          <p>{currentUser?.name}</p>
        </div>
        <div className="flex items-center justify-between text-[24px] mb-[15px]">
          <p className="font-semibold">Nazwisko:</p>
          <p>{currentUser?.lastname}</p>
        </div>
        <div className="flex items-center justify-between text-[24px] mb-[15px]">
          <p className="font-semibold">Ulica i numer:</p>
          <p>
            {currentUser?.address.street} {currentUser?.address.homeNumber}
          </p>
        </div>
        <div className="flex items-center justify-between text-[24px] mb-[15px]">
          <p className="font-semibold">Kod pocztowy:</p>
          <p>{currentUser?.address.postalCode}</p>
        </div>
        <div className="flex items-center justify-between text-[24px] mb-[15px]">
          <p className="font-semibold">Miasto:</p>
          <p>{currentUser?.address.city}</p>
        </div>
        <div className="flex items-center justify-between text-[24px] mb-[15px]">
          <p className="font-semibold">Telefon:</p>
          <p>{currentUser?.phoneNumber}</p>
        </div>
        <div className="flex items-center justify-between text-[24px]">
          <p className="font-semibold">Email:</p>
          <p>{currentUser?.email}</p>
        </div>
      </div>
    </section>
  );
};
