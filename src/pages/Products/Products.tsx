import React from "react";
import FastNavigation from "../../components/FastNavigation/FastNavigation";
import Sidebar from "../../components/Sidebar/Sidebar";

const Products = () => {

  return (
    <div className="flex justify-between px-[40px] py-[55px]">
      <Sidebar />
      <div className="w-[65%] h-[800px] bg-dark_green">
        <FastNavigation links={[{name: "Produkty", link: "/products"}, {name: "Karma", link: "/products"}]}/>
      </div>
    </div>
  )
}

export default Products;