import { FastLinks } from './FastLinks';

import FBIcon from '../../assets/icons/facebook-mini.svg';
import TwitterIcon from '../../assets/icons/twitter-mini.svg';
import InstaIcon from '../../assets/icons/instagram-mini.svg';
import GeoIcon from '../../assets/icons/place-marker.svg';

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
  return (
    <footer
      className="flex justify-between w-full h-[400px] bg-dark_green px-[100px] py-[50px] 
      border-t-[2px] border-b-green"
    >
      <FastLinks title="Zakupy" fast_links={shoppingLinks} />
      <FastLinks title="Nasze wsparcie" fast_links={supportLinks} />
      <section className="text-left">
        <h2 className="text-[32px] mb-[30px]">Social media</h2>
        <img
          src={FBIcon}
          className="inline-block hover:border-[3px] hover:border-orange hover:rounded-lg 
          mr-[20px] cursor-pointer"
          alt="FBICon"
        />
        <img
          src={TwitterIcon}
          className="inline-block hover:border-[3px] hover:border-orange hover:rounded-lg 
          mr-[20px] cursor-pointer"
          alt="TwitterCon"
        />
        <img
          src={InstaIcon}
          className="inline-block hover:border-[3px] hover:border-orange hover:rounded-lg 
          mr-[20px] cursor-pointer"
          alt="InstaCon"
        />
        <h2 className="text-[32px] mt-[37px] mb-[22px]">Adres</h2>
        <p className="text-[20px]">Lublin,</p>
        <p className="text-[20px] mb-[24px]">Nadbystrzycka 42A</p>
        <img
          src={GeoIcon}
          className="inline-block hover:border-green mr-[10px]"
          alt="GeoCon"
        />
        <span className="text-[16px] hover:text-orange hover:underline hover:decoration-1 cursor-pointer">
          Sprawdź na mapie
        </span>
      </section>
    </footer>
  );
};
