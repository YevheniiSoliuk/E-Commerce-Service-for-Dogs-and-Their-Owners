import React, { SetStateAction } from "react";
import sortByNameIcon from "../../assets/icons/sort-by-name.svg";
import listViewIcon from "../../assets/icons/list-view.svg";
import moduleViewIcon from "../../assets/icons/view-module.svg";

type SearchSectionProps = {
  setSearchValue: React.Dispatch<SetStateAction<string>>,
  forPage: string,
  placeholder: string,
  values: string[],
  setView?: React.Dispatch<SetStateAction<string>>
}

export const SearchSection: React.FC<SearchSectionProps> = 
({setSearchValue, forPage, values, placeholder, setView}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value) {
      setSearchValue(e.target.value);
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => e.preventDefault();

  return (
    <section 
      className="flex items-center justify-between w-[100%] h-[70px] bg-dark_green border-2 
      border-green rounded-[25px] px-[10px] py-[10px]"
    >
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] absolute top-[5px] left-[10px] cursor-pointer">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
          <input 
            type="text"
            className={"flex " + forPage === "products" ? " w-[550px] " : " w-[380px] " + 
            " h-[50px] bg-yellow border-2 border-green rounded-[20px] px-[70px] placeholder-green/50 outline-none"}
            onChange={handleSearchChange} 
            placeholder={placeholder}
          />
        </div>
      </form>
      <div>
        <img 
          src={sortByNameIcon} 
          alt="sortByName" 
          className="inline-block mr-[15px] cursor-pointer" 
          onClick={()=>{}}
        />
        <img 
          src={listViewIcon} 
          alt="sortByName" 
          className="inline-block mr-[15px] cursor-pointer hover:border-2 hover:border-orange 
          hover:rounded-[10px]" 
          onClick={()=>setView?.("list")}
        />
        <img 
          src={moduleViewIcon} 
          alt="sortByName" 
          className="inline-block mr-[15px] cursor-pointer hover:border-2 hover:border-orange 
          hover:rounded-[10px]" 
          onClick={()=>setView?.("cards")}
        />
      </div>
    </section>
  ) 
}