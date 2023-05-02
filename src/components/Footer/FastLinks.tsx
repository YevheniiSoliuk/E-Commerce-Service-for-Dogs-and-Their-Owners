import React from 'react';
import { Link } from 'react-router-dom';

type Subtitle = {
  name: string;
  link: string;
};

type FooterBlock = {
  title: string;
  fast_links: Subtitle[];
};

export const FastLinks: React.FC<FooterBlock> = ({ title, fast_links }) => {
  return (
    <section className="relative after:content[''] after:absolute after:block after:w-[1px] after:h-[300px] after:bg-green after:right-[-13vw] after:top-0">
      <div className="text-left">
        <h2 className="text-[32px] mb-[30px]">{title}</h2>
        <ul className="ml-[15px] text-[20px]">
          {fast_links.map((fast_link) => (
            <Link to={fast_link.link} key={fast_link.link}>
              <li className="mb-[10px] hover:text-orange">{fast_link.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      {/* <div className="absolute h-[300px] w-[1px] bg-green right-[-50px]"></div> */}
    </section>
  );
};
