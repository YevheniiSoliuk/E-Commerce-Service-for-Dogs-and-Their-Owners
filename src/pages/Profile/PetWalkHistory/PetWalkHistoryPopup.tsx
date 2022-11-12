import React from 'react';
import Popup from 'reactjs-popup';
import WalkHistoryTable from '../../../components/commons/Table/WalkHistoryTable';
import { ModalProps } from '../../../components/Login/ModalProps';
import SearchSection from '../../../components/SearchSection/SearchSection';
import { WalkHistoryI } from '../../../interfaces/WalkHistory';
import walkHistoryScreen from "../../../assets/images/save-walk.jpg";

const walkHistoryData: WalkHistoryI[] = [
  {
    walkRoadScreen: walkHistoryScreen,
    date: "05.05.2022",
    time: "00:45:23",
    distance: "1.540 km",
    coins: 15
  },
  {
    walkRoadScreen: walkHistoryScreen,
    date: "05.05.2022",
    time: "00:45:23",
    distance: "1.540 km",
    coins: 15
  },
  {
    walkRoadScreen: walkHistoryScreen,
    date: "05.05.2022",
    time: "00:45:23",
    distance: "1.540 km",
    coins: 15
  },
  {
    walkRoadScreen: walkHistoryScreen,
    date: "05.05.2022",
    time: "00:45:23",
    distance: "1.540 km",
    coins: 15
  },
  {
    walkRoadScreen: walkHistoryScreen,
    date: "05.05.2022",
    time: "00:45:23",
    distance: "1.540 km",
    coins: 15
  },
  {
    walkRoadScreen: walkHistoryScreen,
    date: "05.05.2022",
    time: "00:45:23",
    distance: "1.540 km",
    coins: 15
  },
]

const PetWalkHistoryPopup = ({isOpen, close}: ModalProps) => {
  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div className="flex flex-col w-[850px] h-[100%] bg-dark_green rounded-[20px] border-2 border-green text-base font-lemon text-green px-[65px] py-[20px]">
        <span className="text-[40px] relative left-[700px] top-[10px] hover:text-yellow cursor-pointer" onClick={close}>
          &times;
        </span>
        <h2 className="text-[32px] text-left mb-[20px]">HISTORIA SPACERÓW</h2>
        <SearchSection forPage="walk-history" placeholder="Wyszukaj spacer..."/>
        <WalkHistoryTable walkHistoryItems={walkHistoryData}/>
      </div>
    </Popup>
  );
}

export default PetWalkHistoryPopup;