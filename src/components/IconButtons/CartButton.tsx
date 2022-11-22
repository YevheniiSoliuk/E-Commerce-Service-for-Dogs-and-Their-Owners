import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartPopup from "./CartPopup";

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const closeCartModal = () => setIsCartOpen(false);

  const {positionsAmount} = useSelector((state: any) => state.productCart)

  return (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] fill-green hover:fill-yellow mr-[15px] hover:cursor-pointer" onClick={()=>setIsCartOpen(open => !open)}>
        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
      </svg>
      <span className="absolute flex justify-center items-center h-[25px] w-[25px] bg-dark_red border-2 border-green rounded-full text-[14px] text-white pb-[2px] pr-[2px] tracking-[0.01em] top-[-10px] left-[25px]">{positionsAmount}</span>
      <CartPopup isOpen={isCartOpen} close={closeCartModal}/>
    </div>
  )
}

export default CartButton;