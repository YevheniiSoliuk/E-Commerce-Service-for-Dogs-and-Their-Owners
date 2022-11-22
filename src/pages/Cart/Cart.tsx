import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/commons/Button/Button';
import { clearCart } from '../../features/ordering/ProductCartSlice';
import { IOrderPosition } from '../../interfaces/Order';
import { AppDispatch, RootState } from '../../store/store';
import CartItem from './CartItem';

const Cart = () => {
  const {positions, positionsAmount, total, totalDiscount} = useSelector((state: RootState) => state.productCart);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className="my-[50px] mx-[40px]">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[48px] text-left">Koszyk</h2>
        <div className="flex items-center hover:text-dark_red cursor-pointer" onClick={()=>{dispatch(clearCart())}}>
          <span className="text-[20px] text-left mr-[10px]">Opróżnij koszyk</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-[50px] h-[50px] fill-green hover:fill-dark_red">
            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      {positionsAmount === 0 ? 
        <div className="w-full h-[100px] bg-dark_green border-2 border-green rounded-[25px] px-[35px] py-[35px] mb-[40px]">
          <p className="text-[32px] text-center">Koszyk jest pusty!</p>
        </div> :
        <div className="w-full h-[600px] bg-dark_green border-2 border-green rounded-[25px] px-[35px] py-[35px] overflow-y-scroll mb-[40px]">
          {positions.map((item: IOrderPosition) => <CartItem key={item.product.id} product={item.product} amount={item.amount}/>)}
        </div>
      }
      <div className="flex justify-between items-center mx-[30px]">
        <div className="text-[36px]">
          <p className="mb-[30px]">Suma: <span className="text-dark_red">{total} zł</span></p>
          <p>Rabat: <span className="text-dark_red">{totalDiscount} zł</span></p>
        </div>
        <div className="flex justify-between items-center">
          <Button text="Kontynuj zakupy" value="continue" styles="h-[50px] bg-yellow border-2 border-green hover:border-orange rounded-3xl text-green text-base font-lemon px-[6px] py-[2px] w-[200px] text-[16px] mr-[20px]" onClick={()=>{navigate('/products')}}/>
          <Button text="Zamów" value="order" styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl text-gree text-base font-lemon px-6 py-2 w-[150px]" onClick={()=>{navigate('/order')}}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;