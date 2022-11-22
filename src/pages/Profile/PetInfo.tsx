import * as React from 'react';
import EditPetInfo from './EditPetInfo/EditPetInfo';
import PetWalkHistory from './PetWalkHistory/PetWalkHistory';

export type PetInfoProps = {
  src: string, 
  index: string,
  name: string,
  birthdate: string,
  breed: string,
  sex: string
};

const PetInfo = ({src, index, name, birthdate, breed, sex}: PetInfoProps) => {
  return (
      <div className="h-[600px] w-[400px] flex flex-col items-center justify-between bg-dark_green border-2 border-green rounded-[20px] py-[40px] px-[30px]">
        <img src={src} alt={"pet-avatar-"+index} className="block w-[200px] rounded-full"/>
        <h1 className="text-[32px]">{name}</h1>
        <div className="w-[340px]">
          <p className="flex justify-between"><span>Data urodzenia:</span><span>{birthdate}</span></p>
          <p className="flex justify-between"><span>Rasa:</span><span>{breed}</span></p>
          <p className="flex justify-between"><span>Płeć:</span><span>{sex}</span></p>
        </div>
        <PetWalkHistory />
        <EditPetInfo />
      </div>
  );
};

export default PetInfo;