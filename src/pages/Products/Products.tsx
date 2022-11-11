import React, {useMemo, useState} from "react";
import { AccordeonProps } from "../../components/commons/Accordeon/Accordeon";
import FAQ from "../../components/FAQ/FAQ";
import FastNavigation, { LinksProps } from "../../components/FastNavigation/FastNavigation";
import Newsletter from "../../components/Newsletter/Newsletter";
import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/ProductItem/ProductCard";
import ProductListViewItem from "../../components/ProductItem/ProductListViewItem";
import SearchSection from "../../components/SearchSection/SearchSection";
import Sidebar from "../../components/Sidebar/Sidebar";

let pageSize = 3;
let questions: AccordeonProps[] = [
  {title: "Jak długi termin dostawy?", content: "Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota."},
  {title: "Jak lepiej obrać typ pokarmu dla psa?", content: "Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota."},
  {title: "Czy są przesyłane rabaty po podpisaniu newslettera?", content: "Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota."},
  {title: "Czy są przesyłane rabaty po podpisaniu newslettera?", content: "Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota."},
]

let breadcrumbs: LinksProps[] = [
  {name: "Produkty", link: "/products"},
  {name: "Karma", link: "/products"},
] 

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentProductsCard = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return [...Array(100)].slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="flex flex-col px-[40px] py-[55px]">
      <div className="flex justify-between">
        <Sidebar />
        <div className="w-[75%] h-[100%]">
          <FastNavigation links={breadcrumbs}/>
          <SearchSection forPage="products" placeholder="Szukaj produkt...."/>
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
      <Newsletter />
      <FAQ list={questions}/>
    </div>
  )
}

export default Products;