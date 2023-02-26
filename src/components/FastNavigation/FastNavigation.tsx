import React from "react";
import { Link } from "react-router-dom";

export type LinksProps = {
  name: string,
  link: string
}

type Links = {
  links: LinksProps[]
}

export const FastNavigation: React.FC<Links> = ({links}) => {
  return (
    <section className="flex items-end text-left mb-[30px]">
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] fill-green hover:fill-yellow">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      </Link>
      {links.map((link: LinksProps) => {
        return (
          <span 
            className="flex items-center" 
            key={link.name}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-[20px] h-[20px] fill-green mx-[10px]">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            <Link to={link.link}>
              <p className="inline-block text-[14px] text-left hover:text-yellow">{link.name}</p>
            </Link>
          </span>
        );
      })}
    </section>
  )
}