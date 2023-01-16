import * as React from 'react';
import EditPetInfo from './EditPetInfo/EditPetInfo';
import PetWalkHistory from './PetWalkHistory/PetWalkHistory';
import { IAnimal } from '../../interfaces/Animal';

export type PetInfoProps = {
  animal: IAnimal,
  breed: string | undefined
};

const PetInfo = ({animal, breed}: PetInfoProps) => {
  
  const {id, name, photo_url, birth_date, sex, bio} = animal;
  
  return (
      <div className="h-[600px] w-[400px] flex flex-col items-center justify-between bg-dark_green border-2 border-green rounded-[20px] py-[40px] px-[30px]">
        <img src={photo_url} alt={"pet-avatar-"+id} className="block w-[200px] rounded-full"/>
        <h1 className="text-[32px]">{name}</h1>
        {/* <p className="text-[14px] text-justify">{bio}</p> */}
        <div className="w-[340px]">
          <p className="flex justify-between"><span>Data urodzenia:</span><span>{birth_date}</span></p>
          <p className="flex justify-between"><span>Rasa:</span><span>{breed}</span></p>
          <p className="flex justify-between"><span>Płeć:</span><span>{sex}</span></p>
        </div>
        <PetWalkHistory animalId={id}/>
        {breed ? <EditPetInfo animal={animal} breed={breed}/> : <EditPetInfo animal={animal} breed={""}/>}
      </div>
  );
};

export default PetInfo;