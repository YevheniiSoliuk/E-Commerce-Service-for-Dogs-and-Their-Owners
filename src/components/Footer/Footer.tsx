import { FastLinks } from './FastLinks';

import FBIcon from '../../assets/icons/facebook-mini.svg';
import TwitterIcon from '../../assets/icons/twitter-mini.svg';
import InstaIcon from '../../assets/icons/instagram-mini.svg';
import GeoIcon from '../../assets/icons/place-marker.svg';
import { useActualYear } from '../../hooks/usePagination';
import { Link } from 'react-router-dom';

type FastLink = {
  name: string;
  link: string;
};

const shoppingLinks: FastLink[] = [
  { name: 'Promocje', link: '/sales' },
  { name: 'Dostawa', link: '/delivery' },
  { name: 'Zamówienia', link: '/orders' },
  { name: 'Koszyk', link: '/cart' }
];

const supportLinks: FastLink[] = [
  { name: 'Moje Konto', link: '/profile' },
  { name: 'Pomoc i FAQ', link: '/faq' },
  { name: 'Ulubione towary', link: '/favorite' },
  { name: 'Newsletter', link: '/newsletter' },
  { name: 'O nas', link: '/about-us' }
];

export const Footer = () => {
  const year = useActualYear();
  const author = 'Yevhenii Soliuk';

  return (
    <>
      <footer
        className="flex justify-between w-full h-[400px] bg-dark_green px-[100px] py-[50px] 
        border-t-[2px] border-b-green"
      >
        <FastLinks title="Zakupy" fast_links={shoppingLinks} />
        <FastLinks title="Nasze wsparcie" fast_links={supportLinks} />
        <section className="text-left">
          <h2 className="text-[32px] mb-[20px]">Social media</h2>
          <a
            href="https://www.facebook.com/profile.php?id=100041035039263"
            target="_blank"
          >
            <img
              src={FBIcon}
              className="inline-block hover:border-[3px] hover:border-orange hover:rounded-lg 
              mr-[20px] cursor-pointer"
              alt="FBICon"
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src={TwitterIcon}
              className="inline-block hover:border-[3px] hover:border-orange hover:rounded-lg 
              mr-[20px] cursor-pointer"
              alt="TwitterCon"
            />
          </a>
          <a href="https://www.instagram.com/svikt02/" target="_blank">
            <img
              src={InstaIcon}
              className="inline-block hover:border-[3px] hover:border-orange hover:rounded-lg 
              mr-[20px] cursor-pointer"
              alt="InstaCon"
            />
          </a>
          <h2 className="text-[32px] mt-[25px] mb-[15px]">Adres</h2>
          <p className="text-[20px] mb-[20px]">Lublin, Nadbystrzycka 42A</p>
          <Link to="/shops">
            <img
              src={GeoIcon}
              className="inline-block hover:border-green mr-[10px]"
              alt="GeoCon"
            />
            <span className="text-[16px] hover:text-orange hover:underline hover:decoration-1 cursor-pointer">
              Sprawdź na mapie
            </span>
          </Link>
        </section>
      </footer>
      <p className="text-center text-20 mt-20px">
        {author} © {year}
      </p>
    </>
  );
};
