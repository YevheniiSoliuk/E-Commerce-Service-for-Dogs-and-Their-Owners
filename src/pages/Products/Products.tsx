import { useCallback, useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FastNavigation,
  LinksProps
} from '../../components/FastNavigation/FastNavigation';
import { addPosition } from '../../features/ordering/ProductCartSlice';
import { IProduct } from '../../interfaces/Order';
import { AppDispatch, RootState } from '../../store/store';
import { IBrand } from '../../interfaces/Brand';
import { clearFilters } from '../../features/FiltersSlice';

import { FAQ } from '../../components/FAQ/FAQ';
import { Newsletter } from '../../components/Newsletter/Newsletter';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchSection } from '../../components/SearchSection/SearchSection';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { getProducts } from '../../controllers/productController';
import { faqType } from '../../utils/db';
import { getFAQ } from '../../controllers/faqController';
import { ProductWrapper } from '../../components/ProductItem/ProductWrapper';
import { useAuthState } from '../../hooks/usePagination';
import { getCurrentUser } from '../../controllers/userController';

const breadcrumbs: LinksProps[] = [
  { name: 'Produkty', link: '/products' },
  { name: 'Karma', link: '/products' }
];

export const Products = () => {
  const dispatch: AppDispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(8);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);
  const [view, setView] = useState<string>('cards');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [faqs, setFAQs] = useState<faqType[]>([]);
  const [loading, setLoading] = useState(false);
  const [favouriteProducts, setFavouriteProducts] = useState<string[]>([]);

  const {
    subcategory,
    brands: selectedBrands,
    priceMin,
    priceMax,
    rate
  } = useSelector((state: RootState) => state.filters);
  const [searchValue, setSearchValue] = useState('');
  const userID = useAuthState();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      let products = await getProducts();

      if (subcategory !== null) {
        products = products.filter(
          (product: IProduct) => product.subcategoryID === subcategory.id
        );
      }

      setProducts(products);
      setFilteredProducts(products);
      setFAQs(await getFAQ('delivery'));
    };

    const fetchFavoutiteProducts = async () => {
      if (userID) {
        try {
          const currentUser = await getCurrentUser(userID);

          if (currentUser?.favouriteProductsIDs) {
            setFavouriteProducts(currentUser.favouriteProductsIDs);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
    fetchFavoutiteProducts();
    setView(view);
    view === 'cards' ? setPageSize(8) : setPageSize(3);
  }, [subcategory, userID, view]);

  const getFilteredProducts = useCallback(() => {
    let arr: IProduct[] = [...products];

    if (subcategory !== null) {
      arr = arr.filter(
        (product: IProduct) => product.subcategoryID === subcategory.id
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
  }, [products, subcategory, selectedBrands, priceMin, priceMax, rate]);

  const getSearchedProducts = useCallback(() => {
    let arr: IProduct[] = [...filteredProducts];

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
  };

  const currentProductsCard = useMemo(() => {
    const searchedProducts = getSearchedProducts();
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    setSearchedProducts(searchedProducts);

    if (searchedProducts.length) {
      setLoading(false);
      return searchedProducts.slice(firstPageIndex, lastPageIndex);
    } else {
      return [];
    }
  }, [currentPage, pageSize, getSearchedProducts]);

  return (
    <main className="flex flex-col px-[40px] py-[55px]">
      <div className="flex justify-between">
        <Sidebar
          products={currentProductsCard}
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
          {loading ? (
            <section className="bg-dark_green border-2 border-green py-[30px] px-[20px] rounded-[25px] my-[30px] mx-[50px]">
              <h2 className="text-[32px] text-center">Loading....</h2>
            </section>
          ) : (
            <section className="bg-dark_green border-2 border-green py-[30px] px-[20px] rounded-[25px] mt-[30px]">
              {currentProductsCard.length !== 0 ? (
                <>
                  <div
                    className={`flex items-center flex-wrap ${view === 'cards' ? 'gap-[4%]' : 'justify-between'
                      }`}
                  >
                    {currentProductsCard.map((product: IProduct) => (
                      <ProductWrapper
                        key={product.id}
                        product={product}
                        addToCart={() => {
                          dispatch(addPosition(product));
                        }}
                        view={view}
                        favouriteProducts={favouriteProducts}
                        setFavouriteProducts={setFavouriteProducts}
                        currentUserID={userID}
                      />
                    ))}
                  </div>
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
          )}
        </article>
      </div>
      <Newsletter
        discountProducts={products.filter(
          (product) => product.discountAmount !== null
        )}
      />
      <FAQ faqs={faqs} />
    </main>
  );
};
