import React, { useEffect, useState } from "react";
import List from "../commons/List";
import MultiRangeSlider from "../commons/Slider/MultiRangeSlider";
import StarRating from "../commons/StarRating";
import { useBrandsQuery } from "../../features/ApiBrandsSlice";
import { useCategoriesQuery, useSubcategoriesQuery } from "../../features/ApiFiltersSlice";
import { ICategory, ISubcategory } from "../../interfaces/Category";
import { useProductsQuery } from "../../features/ApiProductsSlice";
import { IProduct } from "../../interfaces/Order";
import Button from "../commons/Button/Button";

type SideBarProps = {
  products: IProduct[] | undefined,
  applyFilters: () => void,
  removeFilters: () => void,
}

const Sidebar = ({products, applyFilters, removeFilters}: SideBarProps) => {

  const {data: brandsData, isLoading: brandsIsLoading} = useBrandsQuery();
  const {data: categoriesData, isLoading: categoriesIsLoading} = useCategoriesQuery();
  const {data: subcategoriesData, isLoading: subcategoriesIsLoading} = useSubcategoriesQuery();  

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(()=>{
    if(products)
    {
      setMinPrice(Number([...products].sort((a: IProduct, b: IProduct) => a.price - b.price)[0].price.toFixed(0)));
      setMaxPrice(Number([...products].sort((a: IProduct, b: IProduct) => b.price - a.price)[0].price.toFixed(0)));
    }
  }, [products])

  return (
    <div className="flex flex-col w-[330px] h-[100%] bg-dark_green border-2 border-green rounded-[20px] p-[30px]">
      <h2 className="text-[24px] text-left mb-[25px]">FILTRY</h2>
      <List title="Kategoria" items={categoriesData?.Categories} subitems={subcategoriesData?.["Added subcategory"]}/>
      <List title="Marki" items={brandsData?.["All brands"]}/>
      {/* <List type="category" title="Fazy życia" items={["Karma (1293)", "Miejsca do spania (32)", "Aksesoria spacerowa (49)", "Pielęgnacja i higiena (12)"]}/> */}
      <div>
        <h2 className="text-[16px] text-left mb-[15px]">Filtruj wg ceny</h2>
        <MultiRangeSlider min={minPrice} max={maxPrice}/>
        <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
      </div>
      <div className="w-full flex flex-wrap flex-col">
        <h2 className="text-[16px] text-left mb-[15px]">Ocena</h2>
        <StarRating type="active" active={0} size="h-[40px] w-[40px]" alignment="text-center" rates=""/>
        <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
      </div>
      <div className="w-ful flex justify-between items-center mt-[20px]">
        <Button text="Zastosuj" value="apply" styles="w-[100px] h-[45px] bg-orange border-2 border-green rounded-[15px] shadow-md px-[5px] py-[5px] text-[16px] text-center hover:border-0 active:border-2" onClick={applyFilters}/>
        <Button text="Wyczyśc" value="clear" styles="w-[100px] h-[45px] bg-orange border-2 border-green rounded-[15px] shadow-md px-[5px] py-[5px] text-[16px] text-center hover:border-0 active:border-2" onClick={removeFilters}/>
      </div>
    </div>
  )
}

export default Sidebar;