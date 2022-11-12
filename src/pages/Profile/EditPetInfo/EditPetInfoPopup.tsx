import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { ModalProps } from '../../../components/Login/ModalProps';
import dogAvatar1 from "../../../assets/images/dog-avatar-1.png";
import Input from '../../../components/commons/Input/Input';
import Select from '../../../components/commons/Select/Select';
import Button from '../../../components/commons/Button/Button';

const EditPetInfoPopup = ({isOpen, close}: ModalProps) => {

  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("Pies");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(dogAvatar1);

  const contentStyle = { top: "40px" };

  const clearState = () => {
    setPetName("");
    setBreed("");
    setBirthday("");
    setSex("");
    setWeight("");
    setDescription("");
  }


  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const payload: string[] = [
      petName, 
      breed, 
      birthday, 
      sex, 
      weight, 
      description,
      avatar,
    ]

    console.log(payload);
  }

  return (
    <Popup open={isOpen} onClose={close} {...{contentStyle, }}>
      <div className="flex flex-col w-[1000px] h-[100%] bg-dark_green rounded-[20px] border-2 border-green text-base font-lemon text-green pt-[120px] pb-[40px] px-[110px] relative">
        <span className="absolute text-[40px] left-[900px] top-[20px] hover:text-yellow cursor-pointer" onClick={close}>
          &times;
        </span>
        <img src={avatar} alt="pet-avatar" className="w-[200px] rounded-full absolute top-[-100px] left-[400px]"/>
        <Input id="pet-avatar" type="file" name="pet-avatar" placeholder="" width="" action={()=>{}}/>
        <form method="PUT" onSubmit={onHandleSubmit}>
          <div className="flex justify-between items-center w-[]">
            <div>
              <Input id="pet-name" type="text" name="pet-name" value={petName} onChange={(e)=>{setPetName(e.target.value)}} placeholder="Nazwa" width="w-[340px]"/>
              <Input id="birthday" type="date" name="birthday" value={birthday} onChange={(e)=>{setBirthday(e.target.value)}} placeholder="Rok urodzenia" width="w-[340px]"/>
              <textarea className="w-[340px] h-[160px] bg-yellow border-2 border-green rounded-[15px] pl-[30px] pt-[10px] placeholder:text-green/50" placeholder="Podaj krótki opis pupila..." value={description} onChange={(e)=>{setDescription(e.target.value)}}>
                
              </textarea>
            </div>
            <div>
              <Input id="breed" type="text" name="breed" value={breed} onChange={(e)=>{setBreed(e.target.value)}} placeholder="Rasa" width="w-[340px]"/>
              <Select id="sex" name="sex" values={["Pies", "Suka"]} placeholder="Płeć" styles="w-[340px] h-[50px] bg-yellow text-green border-2 border-green rounded-[20px] shadow-md mb-[30px] px-[20px] py-[10px] outline-0" forPage="" value={sex} onChange={(e)=>{setSex(e.target.value)}}/>
              <Input id="weight" type="text" name="weight" value={weight} onChange={(e)=>{setWeight(e.target.value)}} placeholder="Waga" width="w-[340px]"/>
              <div className="flex justify-between">
                <Button text="Anuluj" type="reset" value="cancel" styles="h-[50px] bg-yellow border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[150px]" onClick={clearState}/>
                <Button text="Zapisz" type="submit" value="save" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[150px]"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Popup>
  );
}

export default EditPetInfoPopup;