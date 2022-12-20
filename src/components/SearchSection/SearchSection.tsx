import React, {SetStateAction, useState} from "react";
import Select from "../commons/Select/Select";
import sortByNameIcon from "../../assets/icons/sort-by-name.svg";
import listViewIcon from "../../assets/icons/list-view.svg";
import moduleViewIcon from "../../assets/icons/view-module.svg";
import { IProduct } from "../../interfaces/Order";
import { WalkHistoryI } from "../../interfaces/WalkHistory";

type SearchSectionProps = {
  items: IProduct[],
  setSearchResults: React.Dispatch<SetStateAction<IProduct[]>>,
  forPage: string,
  placeholder: string,
  values: string[],
  setView?: React.Dispatch<SetStateAction<string>>
}

const SearchSection = ({items, setSearchResults, forPage, values, placeholder, setView}: SearchSectionProps) => {

  let resultsArray: IProduct[] = [];

  const isProduct = (items: IProduct[] | WalkHistoryI[]): items is IProduct[] => { 
    return 'title' in items;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let resultsProductArray: IProduct[];
    // let resultsWalkHistoryItemArray: WalkHistoryI[];
    //let resultsArray: IProduct[] | WalkHistoryI[] = [];

    if(!e.target.value) return setSearchResults(items);
    // if(isProduct(items))
    // {
    //   resultsArray = items.filter((item: IProduct) => item.title.includes(e.target.value) ||
    //     item.brand.includes(e.target.value) || item.shortDescription?.includes(e.target.value) ||
    //     item.longDescription?.includes(e.target.value));
    // }
    // else{
    //   resultsArray = items.filter((item: WalkHistoryI) =>item.date.includes(e.target.value) || item.distance.includes(e.target.value));
    // }

    resultsArray = items.filter((item: IProduct) => item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.short_description?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.long_description?.toLowerCase().includes(e.target.value.toLowerCase()));

    setSearchResults(resultsArray);
  }

  const handleSubmit = (e: React.SyntheticEvent) => e.preventDefault();

  const sortByTitle = () => {
    console.log(items.sort((a: IProduct, b: IProduct) => a.title.localeCompare(b.title)));
    !resultsArray ? 
    setSearchResults(items.sort((a: IProduct, b: IProduct) => a.title.localeCompare(b.title))) :
    setSearchResults(resultsArray?.sort((a: IProduct, b: IProduct) => a.title.localeCompare(b.title)));
  }

  return (
    <div className="flex items-center justify-between w-[100%] h-[70px] bg-dark_green border-2 border-green rounded-[25px] px-[10px] py-[10px]">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] absolute top-[5px] left-[10px] cursor-pointer">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
          <input type="text"
          className={"flex " + forPage === "products" ? " w-[550px] " : " w-[380px] " + " h-[50px] bg-yellow border-2 border-green rounded-[20px] px-[70px] placeholder-green/50 outline-none"}
          onChange={handleSearchChange} placeholder={placeholder}/>
        </div>
      </form>
      {forPage === "products" ?
        <div>
          <img src={sortByNameIcon} alt="sortByName" className="inline-block mr-[15px] cursor-pointer" onClick={()=>{sortByTitle()}}/>
          <img src={listViewIcon} alt="sortByName" className="inline-block mr-[15px] cursor-pointer hover:border-2 hover:border-orange hover:rounded-[10px]" onClick={()=>setView?.("list")}/>
          <img src={moduleViewIcon} alt="sortByName" className="inline-block mr-[15px] cursor-pointer hover:border-2 hover:border-orange hover:rounded-[10px]" onClick={()=>setView?.("cards")}/>
        </div> : 
        <Select id="walk-history" name="sortowanie" values={values} placeholder="" styles="w-[300px] h-[50px] bg-yellow border-2 border-green rounded-[20px] pl-[20px] placeholder-green/50 outline-none" forPage="walk-history"/>
      }
    </div>
  ) 
}

export default SearchSection;