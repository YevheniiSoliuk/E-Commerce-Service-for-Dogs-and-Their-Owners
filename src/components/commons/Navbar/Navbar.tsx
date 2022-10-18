import React from "react";
import { NavLink } from "react-router-dom";

type List = {
  id: React.Key,
  name: string,
  path: string
}

const Navbar = () => {
  const listArray: List[] = [
    {id: 1, name: "GLÓWNA", path: "/"},
    {id: 2, name: "PRODUKTY", path: "/products"},
    {id: 3, name: "SKLEPY", path: "/shops"},
    {id: 4, name: "MARKI", path: "/brands"},
    {id: 5, name: "KONTAKT", path: "/contact"}
  ]

  return (
      <ul className="flex justify-between items-center">
        {listArray.map((listArray) => 
          <NavLink to={listArray.path} key={listArray.id}>
            <li className="w-full h-[30px] mr-[20px] text-green text-xl hover:text-yellow 
            hover:after:content[''] hover:after:block hover:after:relative hover:after:w-[100px] hover:after:my-[6px] hover:after:h-[3px] hover:after:bg-yellow hover:after:ml-[20px] hover:cursor-pointer">{listArray.name}</li>
          </NavLink>
        )}
      </ul>
  )
}

export default Navbar;