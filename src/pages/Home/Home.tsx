import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/commons/Button/Button";

import homeImage from "../../assets/images/home-image.jpg";
import mobileApp from "../../assets/images/mobile-app-image.png";
import CustomSlide from "../../components/CustomSlider/CustomSlider";
import BrandsSection from "../../components/BrandsSection";
import googlePlayDownloadImage from "../../assets/images/google-play.png";
import appStoreDownloadImage from "../../assets/images/app-store.png";
import { useSubcategoriesQuery } from "../../features/ApiFiltersSlice";
import { ISubcategory } from "../../interfaces/Category";
import { setCategory } from "../../features/FiltersSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

type Categories = {
  name: string,
  bg_color: string,
  link: string,
}

const colors: string[] = ["bg-red/40", "bg-green/40", "bg-blue/40", "bg-orange/40"]

const Home = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);
  const {data} = useSubcategoriesQuery();

  useEffect(()=>{
    if(data)
    {
      setSubcategories(data["Added subcategory"])
    }
  }, [data])

  const goToProductsPageWithCategory = (subcategory: ISubcategory) => {
    navigate("/products");
    dispatch(setCategory(subcategory));
  }

  return (
    <div className="mb-[40px]">
      {/* <img src={homeImage} alt="image2" className="h-[450px] bg-slate-400" />
      <div className="absolute left-[600px] top-[450px]">
        <Link to="/products">
          <Button text="Znajdź swój produkt" value="cta-button" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[270px]" onClick={()=>{}}/>
        </Link>
      </div> */}
      <div className="flex justify-between items-stretch bg-yellow/80 px-[50px]">
        <img src={mobileApp} alt="mobile-app" className="w-[40%]"/>
        <div className="w-[50%] py-[40px]">
          <h2 className="text-[32px] text-center mb-[50px]">Spędź więcej czasu z pupilem</h2>
          <p className="text-[20px] text-center mb-[20px]">
            Pobierz naszą aplikację mobilną i otrzymaj najlepsze dla swego zwierzaka:
          </p>
          <ul className="mx-[20px] text-[16px] mb-[50px] marker:text-green list-inside list-disc">
            <li>Dostosowywanie spaceru do preferencji użytkownika</li>
            <li>Wszystkie informacje o pupilu w jednym miejscu</li>
            <li>Integracja ze stroną internetową</li>
            <li>Monety za spacer = Rabaty w sklepie internetowym</li>
          </ul>
          <div className="flex justify-center gap-5">
            <img src={googlePlayDownloadImage} alt="google-play" className="w-[30%] cursor-pointer"/>
            <img src={appStoreDownloadImage} alt="app-store" className="w-[30%] cursor-pointer"/>
          </div>
        </div>
      </div>
      <div className="mx-[50px] mb-[70px] mt-[35px]">
        <h2 className="w-full text-[40px] text-left leading-[40px] mt-[50px] mb-[50px]">Kategorie</h2>
        <div className="flex flex-wrap justify-center">
          {subcategories.map(category =>
            <div className={"flex flex-wrap w-[358px] h-[235px] justify-center items-center text-[32px] text-center leading-[40px] " + colors[Math.floor(Math.random()*colors.length)] + " hover:scale-125 hover:text-yellow hover:cursor-pointer"} onClick={()=>{goToProductsPageWithCategory(category)}}>
              {category.name}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center my-[76px]">
          <p className="w-[710px] text-[14px]">Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota.</p>
          <img src={homeImage} alt="image1" className="w-[550px] h-[300px]"/>
        </div>
      </div>
      {/* <div className="h-[400px] w-full flex flex-wrap justify-center items-center text-center bg-yellow px-[50px] py-[40px]">
        <h2 className="text-[32px] w-full">POLECAJĄ NAS</h2>
        <CustomSlide />
      </div> */}
      <BrandsSection />
      <div className="mx-[50px]">
        <div className="flex justify-between items-center my-[76px]">
          <img src={homeImage} alt="image1" className="w-[550px] h-[300px]"/>
          <p className="w-[710px] text-[14px]">Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki. Mogą również występować u nich nietolerancje pokarmowe lub alergie. Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine, Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz również szeroką gamę odpowiednich akcesoriów dla swojego pupila. Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla kota lub zabawką dla kota.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;