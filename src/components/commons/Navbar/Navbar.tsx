import React from "react";
import { Link } from "react-router-dom";

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
          <Link to={listArray.path} key={listArray.id}>
            <li className="h-[30px] mr-[20px] text-green font-bold text-xl text-center hover:text-yellow 
            hover:after:content[''] hover:after:block hover:after:relative hover:after:w-[75px] hover:after:my-[6px] hover:after:h-[3px] hover:after:bg-yellow hover:after:ml-auto hover:after:mr-auto hover:cursor-pointer">{listArray.name}</li>
          </Link>
        )}
      </ul>
  )
}

export default Navbar;