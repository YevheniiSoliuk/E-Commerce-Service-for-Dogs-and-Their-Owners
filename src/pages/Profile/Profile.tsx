import React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import Button from "../../components/commons/Button/Button";

import coin from "../../assets/images/coin.svg";
import ProgressBar from "../../components/commons/CircularProgressBar/ProgressBar";
import PetInfoSection from "./PetInfoSection";

const Profile = () => {
  const navigate = useNavigate();

  const goToProfileSettings = () => {
    navigate("/profile/settings");
  }

  return (
    <div className="flex flex-col items-center mt-[50px] mx-[40px]">
      <div className="flex justify-between items-start w-full bg-dark_green border-green border-2 rounded-[20px] py-[30px] px-[80px]">
        <div className="w-[370px] flex flex-col items-center">
          <h2 className="text-[32px] text-center mb-[50px]">Pokonano dzisiaj</h2>
          <ProgressBar/>
        </div>
        <div className="flex flex-col justify-start items-center w-[350px] h-full">
          <img src={avatar} alt="user-logo" className="w-[200px] rounded-full"/>
          <h2 className="text-[32px] my-[40px] text-center">Marek Kamiński</h2>
          <div className="w-full flex justify-between">
            <Button text="Edytuj" value="edit" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-[6px] py-[2px] w-[150px] text-[16px]" onClick={goToProfileSettings}/>
            <Button text="Wyloguj się" value="edit" styles="h-[50px] bg-dark_red border-2 border-green hover:border-white rounded-3xl text-white text-base font-lemon px-[6px] py-[2px] w-[150px] text-[16px]" onClick={()=>{}}/>
          </div>
        </div>
        <div className="w-[350px] flex flex-col items-center">
          <h2 className="text-[32px] text-center mb-[25px]">Zebrano monet</h2>
          <div className="flex items-center">
            <img src={coin} alt="coin" className="inline-block mr-[20px]"/>
            <span className="text-[32px] text-left text-orange">103</span>
          </div>
          <div className="text-[12px] text-left mt-[25px] tracking-[.1em]">
            <p className="mb-[10px]">Każde 100 monet dają 1% zniżki na dowolny produkt w naszym sklepie.</p>
            <p className="mb-[10px]">Monety można otrzymac w naszej aplikacji mobilnej PawApp.</p>
            <p className="mb-[10px]">Z regułaminem dotyczącego warunków otrzymania monet można zapoznać się za linkiem poniżej.</p>
            <p>Regułamin monet</p>
          </div>
        </div>
      </div>
      <div className="my-[105px] w-full">
        <h1 className="text-[48px] mb-[60px] text-center">Twoje pupile</h1>
        <PetInfoSection/>
      </div>
    </div>
  )
}

export default Profile;