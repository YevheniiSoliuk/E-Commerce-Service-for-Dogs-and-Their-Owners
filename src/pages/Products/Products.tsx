import { useCallback, useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccordeonProps } from '../../components/commons/Accordeon/Accordeon';
import {
  FastNavigation,
  LinksProps
} from '../../components/FastNavigation/FastNavigation';
import { useProductsQuery } from '../../features/ApiProductsSlice';
import { addPosition } from '../../features/ordering/ProductCartSlice';
import { IProduct } from '../../interfaces/Order';
import { AppDispatch, RootState } from '../../store/store';
import { useBrandsQuery } from '../../features/ApiBrandsSlice';
import { IBrand } from '../../interfaces/Brand';
import { clearFilters } from '../../features/FiltersSlice';

import { FAQ } from '../../components/FAQ/FAQ';
import { Newsletter } from '../../components/Newsletter/Newsletter';
import { Pagination } from '../../components/Pagination/Pagination';
import { ProductCard } from '../../components/ProductItem/ProductCard';
import { ProductListViewItem } from '../../components/ProductItem/ProductListViewItem';
import { SearchSection } from '../../components/SearchSection/SearchSection';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { getProducts } from '../../controllers/productController';

const questions: AccordeonProps[] = [
  {
    title: 'Jak długi termin dostawy?',
    content:
      'Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota.'
  },
  {
    title: 'Jak lepiej obrać typ pokarmu dla psa?',
    content:
      'Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota.'
  },
  {
    title: 'Czy są przesyłane rabaty po podpisaniu newslettera?',
    content:
      'Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota.'
  },
  {
    title: 'Czy są przesyłane rabaty po podpisaniu newslettera?',
    content:
      'Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota.'
  }
];

const breadcrumbs: LinksProps[] = [
  { name: 'Produkty', link: '/products' },
  { name: 'Karma', link: '/products' }
];

export const Products = () => {
  const dispatch: AppDispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(8);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(
    getProducts()
  );
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>(
    getProducts()
  );

  const [view, setView] = useState<string>('cards');

  //const { data: productsData, isLoading: productsIsLoading } = useProductsQuery();
  const [products, setProducts] = useState<IProduct[]>(getProducts());
  //const { data: brandsData } = useBrandsQuery();
  //const brands: IBrand[] | undefined = brandsData?.["All brands"];

  const {
    subcategory,
    brands: selectedBrands,
    priceMin,
    priceMax,
    rate
  } = useSelector((state: RootState) => state.filters);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setView(view);
    view === 'cards' ? setPageSize(8) : setPageSize(3);
  }, [view]);

  const getFilteredProducts = useCallback(() => {
    let arr: IProduct[] = [...filteredProducts];

    if (subcategory !== null) {
      arr = arr.filter(
        (product: IProduct) => product.subcategoryID === subcategory?.id
      );
    }

    if (selectedBrands.length !== 0) {
      const filteredByBrandsProducts: IProduct[] = [];

      selectedBrands.forEach((brand: IBrand) => {
        filteredByBrandsProducts.push(
          ...arr.filter((product: IProduct) => product.brand.id === brand.id)
        );
      });

      arr = filteredByBrandsProducts;
    }

    if (priceMin !== 0 && priceMax !== 0) {
      arr = arr.filter(
        (product: IProduct) =>
          product.price < priceMax && product.price > priceMin
      );
    }

    if (rate !== 0) {
      arr = arr.filter((product: IProduct) => product.rate === rate);
    }

    setFilteredProducts(arr);
  }, [subcategory, selectedBrands, priceMin, priceMax, rate, filteredProducts]);

  const getSearchedProducts = useCallback(() => {
    let arr: IProduct[] = [...filteredProducts];

    console.log('Filtered products: ' + filteredProducts);

    if (searchValue !== '') {
      arr = arr.filter(
        (item: IProduct) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.shortDescription
            ?.toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          item.longDescription
            ?.toLowerCase()
            .includes(searchValue.toLowerCase())
      );
    }

    return arr;
  }, [searchValue, filteredProducts]);

  const removeFilters = () => {
    dispatch(clearFilters());

    setFilteredProducts(products);
    setSearchedProducts(products);
  };

  const currentProductsCard = useMemo(() => {
    const searchedProducts = getSearchedProducts();
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    console.log(searchedProducts);

    if (searchedProducts.length) {
      return searchedProducts.slice(firstPageIndex, lastPageIndex);
    } else {
      return 0;
    }
  }, [currentPage, pageSize, getSearchedProducts]);

  // if(productsIsLoading) {
  //   return (
  //     <div
  //       className="bg-dark_green border-2 border-green py-[30px] px-[20px]
  //       rounded-[25px] my-[30px] mx-[50px]"
  //     >
  //       <h2 className="text-[32px] text-center">Loading....</h2>
  //     </div>
  //   )
  // }

  return (
    <main className="flex flex-col px-[40px] py-[55px]">
      <div className="flex justify-between">
        <Sidebar
          products={products}
          applyFilters={getFilteredProducts}
          removeFilters={removeFilters}
        />
        <article className="w-[75%] h-[100%]">
          <FastNavigation links={breadcrumbs} />
          <SearchSection
            setView={setView}
            setSearchValue={setSearchValue}
            forPage="products"
            values={[]}
            placeholder="Szukaj produkt...."
          />
          <section className="bg-dark_green border-2 border-green py-[30px] px-[20px] rounded-[25px] mt-[30px]">
            {currentProductsCard !== 0 ? (
              <>
                {view === 'cards' ? (
                  <div className="flex justify-start items-center flex-wrap gap-[6%]">
                    {currentProductsCard.map((product: IProduct) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        action={() => {
                          dispatch(addPosition(product));
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-between items-center flex-wrap">
                    {currentProductsCard.map((product: IProduct) => (
                      <ProductListViewItem
                        key={product.id}
                        product={product}
                        action={() => {
                          dispatch(addPosition(product));
                        }}
                      />
                    ))}
                  </div>
                )}
                <div className="flex justify-center">
                  <Pagination
                    className="w-[320px] flex justify-between items-center mt-[15px]"
                    currentPage={currentPage}
                    totalCount={searchedProducts.length}
                    pageSize={pageSize}
                    siblingCount={1}
                    onPageChange={(page: number) => setCurrentPage(page)}
                  />
                </div>
              </>
            ) : (
              <h2 className="text-[32px] text-center">
                Nie ma szukanego produktu
              </h2>
            )}
          </section>
        </article>
      </div>
      <Newsletter />
      <FAQ faqs={questions} />
    </main>
  );
};
