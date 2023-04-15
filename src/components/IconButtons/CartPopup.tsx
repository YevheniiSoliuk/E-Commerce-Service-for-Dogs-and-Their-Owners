import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { ModalProps } from '../../components/Login/ModalProps';
import { clearCart } from '../../features/ordering/ProductCartSlice';
import { IOrderPosition } from '../../interfaces/Order';
import { AppDispatch, RootState } from '../../store/store';
import { Button } from '../commons/Button/Button';
import { CartPopupItem } from './CartPopupItem';

export const CartPopup: React.FC<ModalProps> = ({ isOpen, close }) => {
  const { positions, positionsAmount } = useSelector(
    (state: RootState) => state.productCart
  );

  const dispatch: AppDispatch = useDispatch();

  const contentStyle =
    positionsAmount === 0
      ? { top: '-200px', left: '350px' }
      : { top: '-40px', left: '350px' };

  return (
    <Popup open={isOpen} onClose={close} {...{ contentStyle }}>
      {positionsAmount === 0 ? (
        <div
          className="flex items-center justify-center w-[500px] h-[100px] bg-dark_green rounded-[20px] 
          border-2 border-green text-base font-lemon text-green px-[15px] py-[25px] relative"
        >
          <p className="text-[24px] text-center">Koszyk jest pusty!</p>
        </div>
      ) : (
        <div className="w-[500px] h-[460px] bg-dark_green rounded-tl-[20px] rounded-bl-[20px] border-2 border-green text-base font-lemon text-green px-[15px] py-[25px] relative overflow-y-scroll">
          <section>
            {positions.map((item: IOrderPosition) => (
              <CartPopupItem
                key={item.product.id}
                product={item.product}
                amount={item.amount}
              />
            ))}
          </section>
          <section className="flex justify-between items-center">
            <Button
              text="Wyczyść"
              value="clear"
              styles="h-[50px] bg-dark_red border-2 border-green hover:border-white rounded-3xl 
              text-white text-base font-lemon px-[6px] py-[2px] w-[150px] text-[16px]"
              onClick={() => {
                dispatch(clearCart());
              }}
            />
            <Link to="/cart">
              <Button
                text="Zamów"
                value="save"
                styles="h-[50px] bg-orange border-2 border-green hover:border-yellow rounded-3xl 
                text-green text-base font-lemon px-6 py-2 w-[150px]"
                onClick={close}
              />
            </Link>
          </section>
        </div>
      )}
    </Popup>
  );
};
