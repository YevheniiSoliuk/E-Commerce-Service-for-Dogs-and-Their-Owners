import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  FastNavigation,
  LinksProps
} from '../../components/FastNavigation/FastNavigation';
import { IProduct } from '../../interfaces/Order';
import { Navigation, Pagination } from 'swiper';
import { useParams } from 'react-router-dom';
import {
  addPosition,
  incrementProductAmountByValue
} from '../../features/ordering/ProductCartSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { useProductQuery } from '../../features/ApiProductsSlice';
import { useBrandsQuery } from '../../features/ApiBrandsSlice';
import { IBrand } from '../../interfaces/Brand';

import { StarRating } from '../../components/commons/StarRating';
import { Button } from '../../components/commons/Button/Button';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import { IBreed } from '../../interfaces/Animal';
import { getProduct } from '../../controllers/productController';

export const Product = () => {
  const { id } = useParams();
  const breadcrumbs: LinksProps[] = [
    { name: 'Produkty', link: '/products' },
    { name: 'Produkt', link: `/product/${id}` }
  ];
  const dispatch: AppDispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const [product, setProduct] = useState<IProduct>();

  const { data: productsData, isLoading: productsIsLoading } = useProductQuery(
    Number(id)
  );

  if (id) {
    setProduct(getProduct(id));
  }

  const { data: brandsData } = useBrandsQuery();
  const brands = brandsData?.['All brands'];

  const {
    title,
    brand,
    longDescription,
    images,
    price,
    discountAmount,
    basePrice,
    rate,
    ratesAmount
  } = { ...product };

  const brandID = brand?.id;

  const addToCart = () => {
    if (product) {
      dispatch(
        incrementProductAmountByValue({ product: product, value: amount })
      );
    }
  };

  if (productsIsLoading) {
    return (
      <div
        className="bg-dark_green border-2 border-green py-[30px] px-[20px] 
        rounded-[25px] my-[30px] mx-[50px]"
      >
        <h2 className="text-[32px] text-center">Loading....</h2>
      </div>
    );
  }

  return (
    <main className="px-[50px] py-[50px]">
      <FastNavigation links={breadcrumbs} />
      <section className="w-full bg-dark_green border-2 border-green rounded-[25px] px-[35px] py-[35px]">
        <div
          className="flex gap-[80px] items-center bg-yellow border-2 
          border-green rounded-[25px] px-[60px]"
        >
          <section className="flex flex-col justify-center items-center pt-[40px]">
            {images ? (
              <>
                <img
                  src={'.' + images?.[0]}
                  alt="photos"
                  className="w-[600px]"
                />
                <div
                  className="h-[200px] w-[500px] flex flex-wrap justify-center 
                items-center text-center bg-yellow"
                >
                  <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={true}
                    centeredSlidesBounds={true}
                  >
                    <SwiperSlide>
                      <img
                        src={'.' + images?.[0]}
                        alt="photo1"
                        className="w-[150px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={'.' + images?.[0]}
                        alt="photo1"
                        className="w-[150px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={'.' + images?.[0]}
                        alt="photo1"
                        className="w-[150px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={'.' + images?.[0]}
                        alt="photo1"
                        className="w-[150px]"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </>
            ) : (
              <>
                <img
                  src={'../images/product-image.jpg'}
                  alt="photos"
                  className="w-[600px]"
                />
                <div
                  className="h-[200px] w-[500px] flex flex-wrap justify-center 
                items-center text-center bg-yellow"
                >
                  <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={true}
                    centeredSlidesBounds={true}
                  >
                    <SwiperSlide>
                      <img
                        src={'../images/product-image.jpg'}
                        alt="photo1"
                        className="w-[150px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={'../images/product-image.jpg'}
                        alt="photo2"
                        className="w-[150px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={'../images/product-image.jpg'}
                        alt="photo3"
                        className="w-[150px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={'../images/product-image.jpg'}
                        alt="photo4"
                        className="w-[150px]"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </>
            )}
          </section>
          <section className="w-full h-[100%] flex flex-col items-start justify-start">
            <h2 className={'text-[48px] mb-[20px]'}>{title}</h2>
            <p className={'text-[32px] mb-[20px]'}>
              {brands?.find((brand: IBrand) => brand.id === brandID)?.name}
            </p>
            {rate ? (
              <StarRating
                type="static"
                active={rate}
                size={'w-[20px]'}
                alignment=""
                rates={ratesAmount ? ratesAmount : 0}
              />
            ) : null}
            <p className="text-[20px] mt-[40px] text-left">{longDescription}</p>
            <div
              className="w-full flex justify-center items-center gap-[80px] mt-[40px] 
              py-[25px] px-[20px] border-t-2 border-b-2 border-green"
            >
              <div className="flex flex-col items-center">
                <img
                  src={'../images/sugar-free.png'}
                  alt="sugar-free"
                  className="w-[50px] mb-[10px]"
                />
                <p className="text-[20px]">Bez cukru</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={'../images/no-soy.png'}
                  alt="sugar-free"
                  className="w-[50px] mb-[10px]"
                />
                <p className="text-[20px]">Bez soi</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={'../images/no-parabens.png'}
                  alt="sugar-free"
                  className="w-[50px] mb-[10px]"
                />
                <p className="text-[20px]">Bez GMO</p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-[40px] items-center mt-[40px] text-[20px]">
              {discountAmount !== null ? (
                <div className="text-center">
                  <p className="mb-[10px]">Stara cena</p>
                  <p className="text-[24px] mb-[7px] text-dark_red/50 line-through">
                    {price} zł
                  </p>
                </div>
              ) : null}
              <div className="text-center">
                <p className="mb-[10px]">Cena</p>
                <p className="text-[32px] mb-[7px] text-dark_red">
                  {(price! * discountAmount!) / 100} zł
                </p>
              </div>
              <div className="text-center">
                <p className="mb-[10px]">Cena zasadnicza</p>
                <p className="text-[20px]">({basePrice} zł/kg)</p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-[60px]">
              <div className="flex items-center">
                {amount === 1 ? (
                  <Button
                    text={'-'}
                    value={'decrement'}
                    styles="h-[50px] bg-orange border-2 border-green rounded-full 
                    text-green text-base font-lemon w-[50px]"
                    onClick={() => {
                      setAmount((prevState) => (prevState -= 1));
                    }}
                    disabled={true}
                  />
                ) : (
                  <Button
                    text={'-'}
                    value={'decrement'}
                    styles="h-[50px] bg-orange border-2 border-green hover:border-yellow 
                    rounded-full text-green text-base font-lemon w-[50px]"
                    onClick={() => {
                      setAmount((prevState) => (prevState -= 1));
                    }}
                  />
                )}
                <span className="text-[32px] mx-[10px]">{amount}</span>
                <Button
                  text={'+'}
                  value={'increment'}
                  styles="h-[50px] bg-orange border-2 border-green hover:border-yellow 
                  rounded-full text-green text-base font-lemon w-[50px]"
                  onClick={() => {
                    setAmount((prevState) => (prevState += 1));
                  }}
                />
              </div>
              <Button
                text="Dodaj do koszyka"
                value="add"
                styles="w-[250px] h-[55px] bg-orange border-2 border-green rounded-[15px] 
                shadow-md px-[5px] py-[10px] text-center text-[20px] hover:border-0 active:border-2"
                onClick={() => {
                  addToCart();
                }}
              />
            </div>
          </section>
        </div>
      </section>

      <section
        className="w-full bg-dark_green border-2 border-green 
        rounded-[25px] px-[35px] py-[35px] my-[100px]"
      >
        <div className="flex justify-between items-center mb-[25px]">
          <Button
            text="Opis produktu"
            value="add"
            styles="min-w-[20%] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[20px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0"
            onClick={() => {
              console.log('Opis produktu');
            }}
          />
          <Button
            text="Skład"
            value="add"
            styles="min-w-[150px] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[5px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0"
            onClick={() => {
              console.log('Skład produktu');
            }}
          />
          <Button
            text="Dawkowanie"
            value="add"
            styles="min-w-[20%] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[20px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0"
            onClick={() => {
              console.log('Dawkowanie produktu');
            }}
          />
          <Button
            text="Opinie"
            value="add"
            styles="min-w-[10%] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[5px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0"
            onClick={() => {
              console.log('Opinie o produkcie');
            }}
          />
          <Button
            text="Zadaj pytanie"
            value="add"
            styles="min-w-[20%] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[20px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0"
            onClick={() => {
              console.log('Zadaj pytanie');
            }}
          />
        </div>
        <div
          className="flex gap-[80px] items-center bg-yellow border-2 border-green 
          rounded-[25px] px-[60px] py-[60px]"
        >
          <p className="text-[14px] text-justify">{longDescription}</p>
        </div>
      </section>
    </main>
  );
};
