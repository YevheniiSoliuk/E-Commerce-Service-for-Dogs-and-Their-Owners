import React, {useMemo, useState} from "react";
import FastNavigation from "../../components/FastNavigation/FastNavigation";
import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/ProductItem/ProductCard";
import ProductListViewItem from "../../components/ProductItem/ProductListViewItem";
import SearchSection from "../../components/SearchSection/SearchSection";
import Sidebar from "../../components/Sidebar/Sidebar";

let pageSize = 3;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentProductsCard = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return [...Array(100)].slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="flex justify-between px-[40px] py-[55px]">
      <Sidebar />
      <div className="w-[75%] h-[100%]">
        {/* <FastNavigation links={[{name: "Produkty", link: "/products"}, {name: "Karma", link: "/products"}]}/> */}
        <SearchSection />
        <div className="bg-dark_green border-2 border-green py-[30px] px-[20px] rounded-[25px] mt-[30px]">
          <div className="flex justify-between items-center flex-wrap">
            {currentProductsCard.map(() => <ProductListViewItem />)}
          </div>
          <div className="flex justify-center">
            <Pagination 
              className="w-[320px] flex justify-between items-center mt-[15px]"
              currentPage={currentPage}
              totalCount={100}
              pageSize={pageSize}
              siblingCount={1}
              onPageChange={(page:number) => setCurrentPage(page)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;