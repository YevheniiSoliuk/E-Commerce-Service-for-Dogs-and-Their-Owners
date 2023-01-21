import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import FastNavigation, { LinksProps } from '../../components/FastNavigation/FastNavigation';
import { IProduct } from '../../interfaces/Order';

import { Navigation, Pagination} from "swiper";

//import { data } from "../../data/products";
import { useParams } from 'react-router-dom';
import StarRating from '../../components/commons/StarRating';
import Button from '../../components/commons/Button/Button';
import { addPosition, incrementProductAmountByValue } from '../../features/ordering/ProductCartSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { useProductQuery } from '../../features/ApiProductsSlice';
import { useBrandsQuery } from '../../features/ApiBrandsSlice';
import { IBrand } from '../../interfaces/Brand';

const Product = () => {
  
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  
  let breadcrumbs: LinksProps[] = [
    {name: "Produkty", link: "/products"},
    {name: "Produkt", link: `/product/${id}`},
  ];
  
  const { data: productsData, isLoading: productsIsLoading } = useProductQuery(Number(id));
  const product = productsData?.Product;

  const { data: brandsData, isLoading: brandsIsLoading } = useBrandsQuery();
  const brands = brandsData?.["All brands"];
  console.log(brands);
  
  const {title, brand_id, short_description, long_description, photos, price, discount_price, discount_amount, base_price, rate} = {...product};
  //brands?["All brands"].find(brand => brand.id === brandId);

  const addToCart = () => {
    console.log(typeof(product?.photos));
    if(product)
      dispatch(incrementProductAmountByValue({product: product, value: amount}));
  }

  if(productsIsLoading)
  {
    return (
      <div className="bg-dark_green border-2 border-green py-[30px] px-[20px] rounded-[25px] my-[30px] mx-[50px]">
        <h2 className="text-[32px] text-center">Loading....</h2>
      </div>
    )
  }

  return (
    <div className="px-[50px] py-[50px]">
      <FastNavigation links={breadcrumbs}/>
      <div className="w-full bg-dark_green border-2 border-green rounded-[25px] px-[35px] py-[35px]">
        <div className="flex gap-[80px] items-center bg-yellow border-2 border-green rounded-[25px] px-[60px]">
          <div className="flex flex-col justify-center items-center pt-[40px]">
            {photos ? <>
              <img src={"." + photos?.[0]} alt="photos" className="w-[600px]"/>
              <div className="h-[200px] w-[500px] flex flex-wrap justify-center items-center text-center bg-yellow">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                centeredSlidesBounds={true}
              >
                <SwiperSlide>
                  <img src={"." + photos?.[0]} alt="photo1" className="w-[150px]"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={"." + photos?.[0]} alt="photo1" className="w-[150px]"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={"." + photos?.[0]} alt="photo1" className="w-[150px]"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={"." + photos?.[0]} alt="photo1" className="w-[150px]"/>
                </SwiperSlide>
              </Swiper>
            </div> </> :
            <>
              <img src={"../images/product-image.jpg"} alt="photos" className="w-[600px]"/>
              <div className="h-[200px] w-[500px] flex flex-wrap justify-center items-center text-center bg-yellow">
                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation={true}
                  centeredSlidesBounds={true}
                >
                  <SwiperSlide>
                    <img src={"../images/product-image.jpg"} alt="photo1" className="w-[150px]"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={"../images/product-image.jpg"} alt="photo2" className="w-[150px]"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={"../images/product-image.jpg"} alt="photo3" className="w-[150px]"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={"../images/product-image.jpg"} alt="photo4" className="w-[150px]"/>
                  </SwiperSlide>
                </Swiper>
              </div>
            </>
            }
            
          </div>
          <div className="w-full h-[100%] flex flex-col items-start justify-start">
             <h2 className={"text-[48px] mb-[20px]"}>{title}</h2> 
             <p className={"text-[32px] mb-[20px]"}>
              {
                brands?.find((brand: IBrand) => brand.id === brand_id)?.name
              }
             </p>
             {rate ?
             <StarRating type="static" active={rate} size={"w-[20px]"} alignment="" rates={"23"}/> : null}
             <p className="text-[20px] mt-[40px] text-left">{long_description}</p>
             <div className="w-full flex justify-center items-center gap-[80px] mt-[40px] py-[25px] px-[20px] border-t-2 border-b-2 border-green">
                <div className="flex flex-col items-center">
                  <img src={"../images/sugar-free.png"} alt="sugar-free" className="w-[50px] mb-[10px]"/>
                  <p className="text-[20px]">Bez cukru</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={"../images/no-soy.png"} alt="sugar-free" className="w-[50px] mb-[10px]"/>
                  <p className="text-[20px]">Bez soi</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={"../images/no-parabens.png"} alt="sugar-free" className="w-[50px] mb-[10px]"/>
                  <p className="text-[20px]">Bez GMO</p>
                </div>
             </div>
             <div className="w-full flex justify-center gap-[40px] items-center mt-[40px] text-[20px]">
                {discount_price && discount_amount !== 0 ? 
                  <div className="text-center">
                    <p className="mb-[10px]">Stara cena</p>
                    <p className="text-[24px] mb-[7px] text-dark_red/50 line-through">{price} zł</p>
                  </div> : null }
                <div className="text-center">
                  <p className="mb-[10px]">Cena</p>
                  <p className="text-[32px] mb-[7px] text-dark_red">{discount_price} zł</p>
                </div>
                <div className="text-center">
                  <p className="mb-[10px]">Cena zasadnicza</p>
                  <p className="text-[20px]">({base_price} zł/kg)</p>
                </div>
             </div>
             <div className="w-full flex justify-between items-center mt-[60px]">
              <div className="flex items-center">
                {amount === 1 ? 
                  <Button text={'-'} value={'decrement'} styles={'h-[50px] bg-orange border-2 border-green rounded-full text-green text-base font-lemon w-[50px]'} onClick={()=>{setAmount((prevState) => prevState-=1)}} disabled={true}/> :
                  <Button text={'-'} value={'decrement'} styles={'h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-full text-green text-base font-lemon w-[50px]'} onClick={()=>{setAmount((prevState) => prevState-=1)}}/>
                }
                <span className="text-[32px] mx-[10px]">{amount}</span>
                <Button text={'+'} value={'increment'} styles={'h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-full text-green text-base font-lemon w-[50px]'} onClick={()=>{setAmount((prevState) => prevState+=1)}}/>
              </div>
              <Button text="Dodaj do koszyka" value="add" styles="w-[250px] h-[55px] bg-orange border-2 border-green rounded-[15px] shadow-md px-[5px] py-[10px] text-center text-[20px] hover:border-0 active:border-2" onClick={()=>{addToCart()}}/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-dark_green border-2 border-green rounded-[25px] px-[35px] py-[35px] my-[100px]">
        <div className="flex justify-between items-center mb-[25px]">
          <Button text="Opis produktu" value="add" styles="min-w-[20%] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[20px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0" onClick={()=>{}}/>
          <Button text="Skład" value="add" styles="min-w-[150px] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[5px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0" onClick={()=>{}}/>
          <Button text="Dawkowanie" value="add" styles="min-w-[20%] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[20px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0" onClick={()=>{}}/>
          <Button text="Opinie" value="add" styles="min-w-[10%] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[5px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0" onClick={()=>{}}/>
          <Button text="Zadaj pytanie" value="add" styles="min-w-[20%] h-[55px] border-2 border-green rounded-[15px] shadow-md px-[20px] py-[10px] text-center text-[20px] text-yellow hover:bg-orange hover:text-green active:border-0" onClick={()=>{}}/>
        </div>
        <div className="flex gap-[80px] items-center bg-yellow border-2 border-green rounded-[25px] px-[60px] py-[60px]">
          <p className="text-[14px] text-justify">
            {long_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;