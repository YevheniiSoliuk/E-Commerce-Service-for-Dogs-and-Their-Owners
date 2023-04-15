import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

import { Button } from '../../components/commons/Button/Button';
import { ProgressBar } from '../../components/commons/ProgressBars/ProgressBar';
import { PetInfoSection } from './PetInfoSection';

import avatar from '../../assets/images/avatar.png';
import coin from '../../assets/images/coin.svg';
import dogAvatar1 from '../../assets/images/dog-avatar-1.png';
import dogAvatar2 from '../../assets/images/dog-avatar-2.png';
import dogAvatar3 from '../../assets/images/dog-avatar-3.png';
import { IUser } from '../../interfaces/User';
import { getCurrentUser } from '../../controllers/userController';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useAuthState } from '../../hooks/usePagination';

const dogs = [
  {
    src: dogAvatar1,
    index: '1',
    name: 'Miśka',
    birthdate: '01.12.19r.',
    breed: 'Chow-Chow',
    sex: 'suka'
  },
  {
    src: dogAvatar2,
    index: '2',
    name: 'Bobo',
    birthdate: '23.07.17r.',
    breed: 'Bokser',
    sex: 'pies'
  },
  {
    src: dogAvatar3,
    index: '3',
    name: 'Rembo',
    birthdate: '10.11.21r.',
    breed: 'Shiba',
    sex: 'pies'
  },
  {
    src: dogAvatar2,
    index: '4',
    name: 'Bobo',
    birthdate: '23.07.17r.',
    breed: 'Bokser',
    sex: 'pies'
  },
  {
    src: dogAvatar3,
    index: '5',
    name: 'Rembo',
    birthdate: '10.11.21r.',
    breed: 'Shiba',
    sex: 'pies'
  },
  {
    src: dogAvatar1,
    index: '6',
    name: 'Miśka',
    birthdate: '01.12.19r.',
    breed: 'Chow-Chow',
    sex: 'suka'
  }
];

export const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [moreWalkInfoClicked, setMoreWalkInfoClicked] =
    useState<boolean>(false);

  const userID = useAuthState();

  useEffect(() => {
    getCurrentUser(userID).then((resolve) => {
      setUser(resolve);
    });
  }, [userID]);

  const goToProfileSettings = () => {
    navigate('/profile/settings');
  };

  return (
    <main className="flex flex-col items-center mt-[50px] mx-[40px]">
      <section
        className="flex justify-between items-start w-full bg-dark_green 
        border-green border-2 rounded-[20px] py-[30px] px-[80px]"
      >
        <section className="w-[370px] flex flex-col items-center">
          <h2 className="text-[32px] text-center mb-[50px]">
            Pokonano dzisiaj
          </h2>
          {moreWalkInfoClicked ? (
            <>
              <div className="w-[100%] h-[200px] mb-[30px] overflow-y-auto">
                {dogs.map((dog) => (
                  <div className="w-[100%] flex justify-between items-center mt-[5px]">
                    <p>{dog.name}:</p>
                    <ProgressBar type="linear" completed={75} />
                    <p>1.4/5 km</p>
                  </div>
                ))}
              </div>
              <Button
                text={'Pokaż ogólnie'}
                value={'less-info'}
                styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
                text-green text-base font-lemon px-[6px] py-[2px] w-[200px] text-[16px]"
                onClick={() => {
                  setMoreWalkInfoClicked(false);
                }}
              />
            </>
          ) : (
            <>
              <ProgressBar type="circular" completed={75} />
              <Button
                text={'Pokaż dla każdego'}
                value={'more-info'}
                styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
                text-green text-base font-lemon px-[6px] py-[2px] w-[200px] text-[16px] mt-[30px]"
                onClick={() => {
                  setMoreWalkInfoClicked(true);
                }}
              />
            </>
          )}
        </section>
        <section className="flex flex-col justify-start items-center w-[350px] h-full">
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              alt="user-logo"
              className="w-[200px] rounded-full"
            />
          ) : (
            <img
              src={avatar}
              alt="user-logo"
              className="w-[200px] rounded-full"
            />
          )}
          <h2 className="text-[32px] my-[40px] text-center">
            {user?.name} {user?.lastname}
          </h2>
          <div className="w-full flex justify-between">
            <Button
              text="Edytuj"
              value="edit"
              styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
              text-green text-base font-lemon px-[6px] py-[2px] w-[150px] text-[16px]"
              onClick={goToProfileSettings}
            />
            <Button
              text="Change avatar"
              value="edit"
              styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
              text-green text-base font-lemon px-[6px] py-[2px] w-[150px] text-[16px]"
              onClick={() => {}}
            />
          </div>
        </section>
        <section className="w-[350px] flex flex-col items-center">
          <h2 className="text-[32px] text-center mb-[25px]">Zebrano monet</h2>
          <div className="flex items-center">
            <img src={coin} alt="coin" className="inline-block mr-[20px]" />
            <span className="text-[32px] text-left text-orange">
              {user?.coins}
            </span>
          </div>
          <div className="text-[12px] text-left mt-[25px] tracking-[.1em]">
            <p className="mb-[10px]">
              Każde 100 monet dają 1% zniżki na dowolny produkt w naszym
              sklepie.
            </p>
            <p className="mb-[10px]">
              Monety można otrzymac w naszej aplikacji mobilnej PawApp.
            </p>
            <p className="mb-[10px]">
              Z regułaminem dotyczącego warunków otrzymania monet można zapoznać
              się za linkiem poniżej.
            </p>
            <p>Regułamin monet</p>
          </div>
        </section>
      </section>
      <section className="my-[105px] w-full">
        <h1 className="text-[48px] mb-[60px] text-center">Twoje pupile</h1>
        <PetInfoSection />
      </section>
    </main>
  );
};
