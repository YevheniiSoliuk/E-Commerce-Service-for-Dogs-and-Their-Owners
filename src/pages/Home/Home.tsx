import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISubcategory } from '../../interfaces/Category';
import { setCategory } from '../../features/FiltersSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

import { BrandsSection } from '../../components/BrandsSection';

import homeImage from '../../assets/images/home-image.jpg';
import mobileApp from '../../assets/images/mobile-app-image.png';
import googlePlayDownloadImage from '../../assets/images/google-play.png';
import appStoreDownloadImage from '../../assets/images/app-store.png';
import { getSubcategories } from '../../controllers/subcategoryController';
import { CustomSlider } from '../../components/CustomSlider/CustomSlider';

// type Categories = {
//   name: string;
//   bg_color: string;
//   link: string;
// };

const colors: string[] = [
  'bg-red/40',
  'bg-green/40',
  'bg-blue/40',
  'bg-orange/40'
];

export const Home = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      setSubcategories(await getSubcategories());
    };

    fetchSubcategories();
  }, []);

  const goToProductsPageWithCategory = (subcategory: ISubcategory) => {
    navigate('/products');
    dispatch(setCategory(subcategory));
  };

  return (
    <main className="mb-[40px]">
      <section className="flex justify-between items-stretch bg-yellow/80 px-[50px]">
        <img src={mobileApp} alt="mobile-app" className="w-[40%]" />
        <div className="w-[50%] py-[40px]">
          <h2 className="text-[32px] text-center mb-[50px]">
            Spędź więcej czasu z pupilem
          </h2>
          <p className="text-[20px] text-center mb-[20px]">
            Pobierz naszą aplikację mobilną i otrzymaj najlepsze dla swego
            zwierzaka:
          </p>
          <ul className="ml-[60px] text-[16px] mb-[50px] marker:text-green list-inside list-disc">
            <li>Dostosowywanie spaceru do preferencji użytkownika</li>
            <li>Wszystkie informacje o pupilu w jednym miejscu</li>
            <li>Integracja ze stroną internetową</li>
            <li>Monety za spacer = Rabaty w sklepie internetowym</li>
          </ul>
          <div className="flex justify-center gap-5">
            <a
              href="https://play.google.com/store/games"
              target="_blank"
              className="w-[30%]"
            >
              <img
                src={googlePlayDownloadImage}
                alt="google-play"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.apple.com/pl/app-store/"
              target="_blank"
              className="w-[30%]"
            >
              <img
                src={appStoreDownloadImage}
                alt="app-store"
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="mx-[50px] mb-[70px] mt-[35px]">
        <h2 className="w-full text-[40px] text-left leading-[40px] mt-[50px] mb-[50px]">
          Kategorie
        </h2>
        <section className="flex flex-wrap justify-center">
          {subcategories.slice(0, 8).map((subcategory) => (
            <div
              key={subcategory.id}
              className={
                'flex flex-wrap w-[358px] h-[235px] justify-center items-center text-[32px] text-center leading-[40px] ' +
                colors[Math.floor(Math.random() * colors.length)] +
                ' hover:scale-125 hover:text-yellow hover:cursor-pointer'
              }
              onClick={() => {
                goToProductsPageWithCategory(subcategory);
              }}
            >
              {subcategory.name}
            </div>
          ))}
        </section>
      </section>
      <BrandsSection />
      <section className="mx-[50px] mb-[70px] mt-[35px]">
        <section className="flex justify-between items-center my-[76px]">
          <p className="w-[710px] text-[14px]">
            Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki.
            Mogą również występować u nich nietolerancje pokarmowe lub alergie.
            Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine,
            Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w
            naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz
            również szeroką gamę odpowiednich akcesoriów dla swojego pupila.
            Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla
            kota lub zabawką dla kota.
          </p>
          <img src={homeImage} alt="image1" className="w-[550px] h-[300px]" />
        </section>
      </section>
      <div className="h-[400px] w-full flex flex-wrap justify-center items-center text-center bg-yellow px-[50px] py-[40px]">
        <h2 className="text-[32px] w-full">POLECAJĄ NAS</h2>
        <CustomSlider />
      </div>
      <section className="mx-[50px]">
        <div className="flex justify-between items-center my-[76px]">
          <img src={homeImage} alt="image1" className="w-[550px] h-[300px]" />
          <p className="w-[710px] text-[14px]">
            Większość kotów jest bardzo wymagająca, jeśli chodzi o ich posiłki.
            Mogą również występować u nich nietolerancje pokarmowe lub alergie.
            Najwyższe jakości karmy dla kotów, marek takich jak Kitty’s Cuisine,
            Felix, PetBalance, MOMENTS, Animonda i wiele innych, znajdziesz w
            naszym sklepie z produktami dla kotów w najlepszej cenie. Odkryjesz
            również szeroką gamę odpowiednich akcesoriów dla swojego pupila.
            Rozpieść domowego tygrysa nowym drapakiem dla kota, legowiskiem dla
            kota lub zabawką dla kota.
          </p>
        </div>
      </section>
    </main>
  );
};
