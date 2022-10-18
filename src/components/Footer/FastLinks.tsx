import React from "react";
import { NavLink } from "react-router-dom";

type Subtitle = {
  name: string,
  link: string
}

type FooterBlock = {
  title: string,
  fast_links: Subtitle[],
}

const FastLinks = ({title, fast_links}: FooterBlock) => {
  return (
    <>
      <div className="text-left">
        <h2 className="text-[32px] mb-[30px]">{title}</h2>
        <ul className="ml-[15px] text-[20px]">
          {fast_links.map(fast_link => 
            <NavLink to={fast_link.link}><li className="mb-[10px] hover:text-orange">{fast_link.name}</li></NavLink>
          )}
        </ul>
      </div>
      <div className="h-[300px] w-[1px] bg-green mx-[30px]"></div>
    </>
  )
}

export default FastLinks;