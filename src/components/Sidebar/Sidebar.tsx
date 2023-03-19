import React, { useEffect, useState } from "react";
import { List } from "../commons/List";
import { MultiRangeSlider } from "../commons/Slider/MultiRangeSlider";
import { StarRating } from "../commons/StarRating";
import { IProduct } from "../../interfaces/Order";
import { Button } from "../commons/Button/Button";
import { ICategory, ISubcategory } from "../../interfaces/Category";
import { IBrand } from "../../interfaces/Brand";
import { getCategories } from "../../controllers/categoryController";
import { getSubcategories } from "../../controllers/subcategoryController";
import { getBrands } from "../../controllers/brandController";

type SideBarProps = {
  products: IProduct[] | undefined,
  applyFilters: () => void,
  removeFilters: () => void,
}

export const Sidebar: React.FC<SideBarProps> = ({products, applyFilters, removeFilters}) => {
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(()=>{
    setBrands(getBrands());
    setCategories(getCategories());
    setSubcategories(getSubcategories());

    // if(products) {
    //   setMinPrice(Number([...products]
    //     .sort((a: IProduct, b: IProduct) => a.price - b.price)[0]
    //     .price.toFixed(0)));
    //   setMaxPrice(Number([...products]
    //     .sort((a: IProduct, b: IProduct) => b.price - a.price)[0]
    //     .price.toFixed(0)));
    // }
  }, [products])

  return (
    <aside 
      className="flex flex-col w-[330px] h-[100%] bg-dark_green border-2 border-green 
      rounded-[20px] p-[30px]"
    >
      <h2 className="text-[24px] text-left mb-[25px]">FILTRY</h2>
      <List 
        title="Kategoria" 
        items={categories} 
        subitems={subcategories}
      />
      <List 
        title="Marki" 
        items={brands}
      />
      <section>
        <h2 className="text-[16px] text-left mb-[15px]">Filtruj wg ceny</h2>
        <MultiRangeSlider 
          min={minPrice} 
          max={maxPrice}
        />
        <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
      </section>
      <section className="w-full flex flex-wrap flex-col">
        <h2 className="text-[16px] text-left mb-[15px]">Ocena</h2>
        <StarRating 
          type="active" 
          active={0} 
          size="h-[40px] w-[40px]" 
          alignment="text-center" 
          rates=""
        />
        <div className="w-[250px] h-[2px] bg-green/50 my-[15px]"></div>
      </section>
      <section className="w-ful flex justify-between items-center mt-[20px]">
        <Button 
          text="Wyczyśc" 
          value="clear" 
          styles="w-[100px] h-[45px] bg-orange border-2 border-green rounded-[15px] 
          shadow-md px-[5px] py-[5px] text-[16px] text-center hover:border-0 active:border-2" 
          onClick={removeFilters}
        />
        <Button 
          text="Zastosuj" 
          value="apply" 
          styles="w-[100px] h-[45px] bg-orange border-2 border-green rounded-[15px] 
          shadow-md px-[5px] py-[5px] text-[16px] text-center hover:border-0 active:border-2" 
          onClick={applyFilters}
        />
      </section>
    </aside>
  )
}