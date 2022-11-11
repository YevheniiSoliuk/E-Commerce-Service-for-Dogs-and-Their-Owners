import * as React from 'react';
import Button from '../../components/commons/Button/Button';
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
        <h1 className="text-[32px]">{"Pupil #"+index}</h1>
        <div className="w-[340px]">
          <p className="flex justify-between"><span>Nazwa:</span><span>{name}</span></p>
          <p className="flex justify-between"><span>Data urodzenia:</span><span>{birthdate}</span></p>
          <p className="flex justify-between"><span>Rasa:</span><span>{breed}</span></p>
          <p className="flex justify-between"><span>Płeć:</span><span>{sex}</span></p>
        </div>
        
        <PetWalkHistory />
        <Button text="Edytuj dane" value="edit" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-[6px] py-[2px] w-[150px] text-[16px]" onClick={()=>{}}/>
      </div>
  );
};

export default PetInfo;