import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/commons/Button/Button';
import { changeSettingsSection } from '../../../features/ordering/OrderHistorySlice';
import { AppDispatch, RootState } from '../../../store/store';
import { useDeleteUserMutation } from '../../../features/ApiUserSlice';
import { logOut } from '../../../features/auth/AuthSlice';
import { useNavigate } from 'react-router-dom';

type SidebarTitlesProps = {
  title: string,
  state: string
}

const settingsLinks: SidebarTitlesProps[] = [
  {title: "Profil", state: "user"},
  {title: "Autoryzacja", state: "autorization"},
  {title: "Zamówienia", state: "orders"},
  // {title: "Powiadomienia", state: "notifications"},
]

const SettingsSideBar = () => {

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteUser] = useDeleteUserMutation();
  const id: number | undefined = useSelector((state: RootState) => state.auth.user?.id)

  const removeUserAccount = (id: number | undefined) => {
    if(id)
    {
      dispatch(logOut());
      deleteUser(id);
      navigate("/");
    }
  }
  
  return (
    <div className="w-[400px] h-[100%] bg-dark_green border-2 border-green rounded-[25px] p-[50px]">
      <h2 className="text-[32px] text-center mb-[50px]">USTAWIENIA</h2>
      <div>
        {settingsLinks.map(link => 
          <div className="flex items-center mb-[30px]">
            <span className="text-[20px] hover:text-yellow hover:cursor-pointer peer" onClick={() => {dispatch(changeSettingsSection(link.state))}}>{link.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden w-[20px] h-[20px] fill-green mx-[10px] peer-hover:inline-block peer-hover:fill-yellow">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex justify-center w-[100%] mt-[60px]">
        <Button text="DEAKTYWUJ KONTO" value="disactivate-account" styles="h-[50px] bg-dark_red border-2 border-green hover:border-white rounded-3xl text-white text-base font-lemon px-[6px] py-[2px] w-[250px] text-[16px]" onClick={()=>{removeUserAccount(id)}}/>
      </div>
    </div>
  );
};

export default SettingsSideBar;