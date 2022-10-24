import React from "react";
import FastNavigation from "../../components/FastNavigation/FastNavigation";
import SearchSection from "../../components/SearchSection/SearchSection";
import Sidebar from "../../components/Sidebar/Sidebar";

const Products = () => {

  return (
    <div className="flex justify-between px-[40px] py-[55px]">
      <Sidebar />
      <div className="w-[70%] h-[800px]">
        {/* <FastNavigation links={[{name: "Produkty", link: "/products"}, {name: "Karma", link: "/products"}]}/> */}
        <SearchSection />
      </div>
    </div>
  )
}

export default Products;