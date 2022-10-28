import React, {useState} from "react";
import Select from "../commons/Select/Select";
import sortByNameIcon from "../../assets/icons/sort-by-name.svg";
import listViewIcon from "../../assets/icons/list-view.svg";
import moduleViewIcon from "../../assets/icons/view-module.svg";


const SearchSection = () => {

  const [view, setView] = useState("list");
  const [value, setValue] = useState("")

  return (
    <div className="flex items-center justify-between w-[100%] h-[70px] bg-dark_green border-2 border-green rounded-[25px] px-[10px] py-[10px]">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] absolute top-[5px] left-[10px] cursor-pointer">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
        </svg>
        <input type="text"
        className="flex w-[450px] h-[50px] bg-yellow border-2 border-green rounded-[20px] px-[70px] placeholder-green/50 outline-none" 
        value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Szukaj produkt...."/>
      </div>
      <Select id="localization" name="lokalizacja" values={["Wybierz lokalizację", "Warszawa", "Wrocław", "Kraków"]} placeholder="" styles="flex w-[300px] h-[50px] bg-yellow border-2 border-green rounded-[20px] pl-[50px] placeholder-green/50 outline-none" icon={true}/>
      <div>
        <img src={sortByNameIcon} alt="sortByName" className="inline-block mr-[15px] cursor-pointer"/>
        <img src={listViewIcon} alt="sortByName" className="inline-block mr-[15px] cursor-pointer" onClick={()=>setView("list")}/>
        <img src={moduleViewIcon} alt="sortByName" className="inline-block mr-[15px] cursor-pointer" onClick={()=>setView("module")}/>
      </div>
    </div>
  ) 
}

export default SearchSection;