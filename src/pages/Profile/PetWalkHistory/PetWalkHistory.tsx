import React, { useState } from 'react';
import Button from "../../../components/commons/Button/Button";
import PetWalkHistoryPopup from './PetWalkHistoryPopup';

const PetWalkHistory = () => {
  const [isWalkHistoryOpen, setIsWalkHistoryOpen] = useState(false);
  const closeWlakHistoryModal = () => setIsWalkHistoryOpen(false);

  return (
    <>
      <Button text="Historia spacerów" value="walk-history" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-[6px] py-[2px] w-[260px] text-[16px]" onClick={()=>setIsWalkHistoryOpen(open => !open)}/>
      <PetWalkHistoryPopup isOpen={isWalkHistoryOpen} close={closeWlakHistoryModal}/>
    </>
  )
}

export default PetWalkHistory;