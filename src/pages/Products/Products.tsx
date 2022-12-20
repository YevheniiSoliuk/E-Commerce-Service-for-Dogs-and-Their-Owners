import React, {useMemo, useState} from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AccordeonProps } from "../../components/commons/Accordeon/Accordeon";
import FAQ from "../../components/FAQ/FAQ";
import FastNavigation, { LinksProps } from "../../components/FastNavigation/FastNavigation";
import Newsletter from "../../components/Newsletter/Newsletter";
import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/ProductItem/ProductCard";
import ProductListViewItem from "../../components/ProductItem/ProductListViewItem";
import SearchSection from "../../components/SearchSection/SearchSection";
import Sidebar from "../../components/Sidebar/Sidebar";
//import { data } from "../../data/products";
import { useProductsQuery } from "../../features/ApiProductsSlice";
import { addPosition } from "../../features/ordering/ProductCartSlice";
import { IProduct } from "../../interfaces/Order";
import { AppDispatch } from "../../store/store";
import { useBrandsQuery } from "../../features/ApiBrandsSlice";
import { IBrand } from "../../interfaces/Brand";

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
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(8);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);

  const [view, setView] = useState<string>("cards");

  const { data: productsData, isLoading: productsIsLoading } = useProductsQuery();
  const { data: brandsData, isLoading: brandsIsLoading } = useBrandsQuery();
  const brands: IBrand[] | undefined = brandsData?.["All brands"];
  
  useEffect(()=>{
    if(productsData !== undefined)
    {
      setProducts(productsData["All products"]);
      setSearchedProducts(productsData["All products"]);
    }
    
    setView(view);

    view === "cards" ? setPageSize(8) : setPageSize(3);
  }, [view, productsData, products]);

  const currentProductsCard = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    if(searchedProducts.length)
      return searchedProducts.slice(firstPageIndex, lastPageIndex);
    else
      return 0;
  }, [currentPage, searchedProducts, pageSize]);

  if(productsIsLoading)
  {
    return (
      <div className="bg-dark_green border-2 border-green py-[30px] px-[20px] rounded-[25px] my-[30px] mx-[50px]">
        <h2 className="text-[32px] text-center">Loading....</h2>
      </div>
    )
  }
  
  return (
    <div className="flex flex-col px-[40px] py-[55px]">
      <div className="flex justify-between">
        <Sidebar />
        <div className="w-[75%] h-[100%]">
          <FastNavigation links={breadcrumbs}/>
          <SearchSection items={products} setView={setView} setSearchResults={setSearchedProducts} forPage="products" values={[]} placeholder="Szukaj produkt...."/>
          <div className="bg-dark_green border-2 border-green py-[30px] px-[20px] rounded-[25px] mt-[30px]">
            {currentProductsCard !== 0 ? 
              <>
                {view === "cards" ?
                  <div className="flex justify-start items-center flex-wrap gap-[4%]">
                    {currentProductsCard.map((product: IProduct) => <ProductCard key={product.id} product={product} brands={brands} action={()=>{dispatch(addPosition(product))}}/>)}
                  </div> :
                  <div className="flex justify-between items-center flex-wrap">
                    {currentProductsCard.map((product: IProduct) => <ProductListViewItem key={product.id} product={product} brands={brands} action={()=>{dispatch(addPosition(product))}}/>)}
                  </div>
                }
                <div className="flex justify-center">
                  <Pagination 
                    className="w-[320px] flex justify-between items-center mt-[15px]"
                    currentPage={currentPage}
                    totalCount={searchedProducts.length}
                    pageSize={pageSize}
                    siblingCount={1}
                    onPageChange={(page:number) => setCurrentPage(page)}/>
                </div> 
              </>:
              <h2 className="text-[32px] text-center">Nie ma szukanego produktu</h2>
            }
          </div>
        </div>
      </div>
      <Newsletter />
      <FAQ list={questions}/>
    </div>
  )
}

export default Products;