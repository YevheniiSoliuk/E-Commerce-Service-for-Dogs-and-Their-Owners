import React from "react";
import Navbar from "../commons/Navbar/Navbar";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import CartButton from "../IconButtons/CartButton";
import FavoriteButton from "../IconButtons/FavoriteButton";
import NotificationButton from "../IconButtons/NotificationsButton";

import logo from "../../assets/images/logo.webp";

const Header = () => {
  return (
    <nav className="flex justify-between h-[100px] w-full px-[30px] items-center">
      <Link to="/"><img className="w-[220px] h-[90px] hover:cursor-pointer" src={logo} alt="logo"/></Link>
      <Navbar/>
      <div className="flex justify-between items-center">
        <CartButton />
        <FavoriteButton />
        <NotificationButton />
      </div>
      <Login/>
    </nav>
  )
}

export default Header;