import React from "react";
import List from "../commons/List";
import MultiRangeSlider from "../commons/Slider/MultiRangeSlider";
import StarRating from "../commons/StarRating";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[330px] h-[100%] bg-dark_green border-2 border-green rounded-[20px] p-[30px]">
      <h2 className="text-[24px] text-left mb-[25px]">FILTRY</h2>
      <List type="category" title="Kategoria" items={["Karma (1293)", "Miejsca do spania (32)", "Aksesoria spacerowa (49)", "Pielęgnacja i higiena (12)"]}/>
      <List type="brands" title="Marki" items={["Brand 1", "Brand 2", "Brand 3", "Brand 4"]}/>
      <List type="category" title="Fazy życia" items={["Karma (1293)", "Miejsca do spania (32)", "Aksesoria spacerowa (49)", "Pielęgnacja i higiena (12)"]}/>
      <div>
        <h2 className="text-[16px] text-left mb-[15px]">Filtruj wg ceny</h2>
        <MultiRangeSlider min={0} max={5000} onChange={()=>{}}/>
        <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
      </div>
      <div className="w-full flex flex-wrap flex-col">
        <h2 className="text-[16px] text-left mb-[15px]">Ocena</h2>
        <StarRating type="active" active={0}/>
        <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
      </div>
    </div>
  )
}

export default Sidebar;