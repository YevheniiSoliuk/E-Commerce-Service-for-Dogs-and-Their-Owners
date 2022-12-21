import React, { useEffect, useState } from "react";
import List from "../commons/List";
import MultiRangeSlider from "../commons/Slider/MultiRangeSlider";
import StarRating from "../commons/StarRating";
import { useBrandsQuery } from "../../features/ApiBrandsSlice";
import { useCategoriesQuery, useSubcategoriesQuery } from "../../features/ApiFiltersSlice";
import { ICategory, ISubcategory } from "../../interfaces/Category";
import { useProductsQuery } from "../../features/ApiProductsSlice";
import { IProduct } from "../../interfaces/Order";

const Sidebar = () => {

  const {data: brandsData, isLoading: brandsIsLoading} = useBrandsQuery();
  const {data: categoriesData, isLoading: categoriesIsLoading} = useCategoriesQuery();
  const {data: subcategoriesData, isLoading: subcategoriesIsLoading} = useSubcategoriesQuery();
  const {data} = useProductsQuery();
  const products = data?.["All products"];

  let productsByPriceAsc: IProduct[] = [];
  let productsByPriceDesc: IProduct[] = [];

  if(products)
  {
    productsByPriceAsc = [...products];
    productsByPriceDesc = [...products];

    productsByPriceAsc.sort((a: IProduct, b: IProduct) => a.price - b.price);
    productsByPriceDesc.sort((a: IProduct, b: IProduct) => b.price - a.price);
  }

  const minPrice = Number(productsByPriceAsc[0].price.toFixed(0));
  const maxPrice = Number(productsByPriceDesc[0].price.toFixed(0));


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

    </div>
  )
}

export default Sidebar;