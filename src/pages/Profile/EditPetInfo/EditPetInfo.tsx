import React, { useState } from 'react';
import Button from "../../../components/commons/Button/Button";
import EditPetInfoPopup from '../EditPetInfo/EditPetInfoPopup';
import { IAnimal } from '../../../interfaces/Animal';

type PropsType = {
  animal: IAnimal,
  breed: string
}

const PetWalkHistory = ({animal, breed}: PropsType) => {
  const [isEditInfoOpen, setIsEditInfoOpen] = useState(false);
  const closeEditInfoModal = () => setIsEditInfoOpen(false);

  return (
    <>
      <Button text="Edytuj dane" value="edit" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-[6px] py-[2px] w-[150px] text-[16px]" onClick={()=>setIsEditInfoOpen(open => !open)}/>
      <EditPetInfoPopup modal={({isOpen: isEditInfoOpen, close: closeEditInfoModal})} animal={animal} animalBreed={breed}/>
    </>
  )
}

export default PetWalkHistory;