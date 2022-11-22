import React from 'react';
import { useSelector } from 'react-redux';
import FastNavigation, { LinksProps } from '../../../components/FastNavigation/FastNavigation';
import AutorizationSettings from './AutorizationSettings';
import ContactInfoSettings from './ContactInfoSettings';
import NotificationSettings from './NotificationSettings';
import OredrsInfo from './OredrsInfo';
import SettingsSideBar from './SettingsSideBar';

const UserSettings = () => {
  const {settingsSection} = useSelector((state: any) => state.orderHistory);

  const breadcrumbs: LinksProps[] = [
    {name: "Profile", link: "/profile"},
    {name: "Ustawienia", link: "/profile/settings"}
  ]
  
  return (
    <div className="mx-[40px] my-[50px]">
      <FastNavigation links={breadcrumbs}/>
      <div className="flex justify-between ">
        <SettingsSideBar />
        {settingsSection === "user" ? <ContactInfoSettings /> : 
          settingsSection === "orders" ? <OredrsInfo /> :
          settingsSection === "autorization" ? <AutorizationSettings /> :
          settingsSection === "notifications" ? <NotificationSettings /> : null
        }
      </div>
    </div>
  );
};

export default UserSettings;