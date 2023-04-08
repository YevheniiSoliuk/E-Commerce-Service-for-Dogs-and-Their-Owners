import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { ProductCart, clearCart } from '../../features/ordering/ProductCartSlice';
import { useNavigate } from 'react-router-dom';
import { removeOrderData } from '../../features/OrderSlice';
import { useOrderMutation } from '../../features/ApiOrderSlice';
import { IOrder, IOrderPosition, IProduct } from '../../interfaces/Order';
import { useGetUserAddressQuery } from '../../features/ApiUserSlice';
import { Button } from '../../components/commons/Button/Button';
import { getCurrentUser } from '../../controllers/userController';
import { IAddress } from '../../interfaces/User';
import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';

export const SummarySection = () => {
  const basket: ProductCart = useSelector((state: RootState) => state.productCart)
  const delivery_price: number | undefined = 
    useSelector((state: RootState) => state.order.deliveryMethod?.deliveryPayment);
  const paymentMethod = useSelector((state: RootState) => state.order.paymentMethod);
  // const id = useSelector((state: RootState) => state.auth.user?.address.id);
  // const {data: address} = useGetUserAddressQuery(id);
  const [addressOfCurrentUser, setAddressOfCurrentUser] = useState<IAddress | null>(null);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [order] = useOrderMutation()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      const userID = user?.uid || "";
      getCurrentUser(userID).then(resolve => {
        setAddressOfCurrentUser(resolve!.address);
      });
    })
  }, [])

  const resetOrder = () => {
    dispatch(clearCart());
    dispatch(removeOrderData());
    navigate("/products");
  }

  const createOrder = async () => {
    const positions: IOrderPosition[] = [];
    
    basket.positions.forEach(position => {
      positions.push({product: position.product, amount: position.amount});
    })

    const payload: IOrder = {
      orderCode: "e74783hf83837",
      city: addressOfCurrentUser ? addressOfCurrentUser.city : "",
      street: addressOfCurrentUser ? addressOfCurrentUser.street : "",
      homeNumber: addressOfCurrentUser ? addressOfCurrentUser.homeNumber : "",
      postalCode: addressOfCurrentUser ? addressOfCurrentUser.postalCode : "",
      status: { name: "W trakcie realizaji" },
      paymentMethod: paymentMethod!,
      products: positions,
      state: '',
      statusRef: null,
      paymentMethodRef: null,
      deliveryMethodRef: null,
      deliveryMethod: null
    }

    await order(payload)
    .unwrap()
    .then((result) => console.log("fullfilled", result))
    .catch((error) => console.error("rejected", error));

    dispatch(clearCart());
    dispatch(removeOrderData());
    navigate("/products");
  }
  
  return (
    <section 
      className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green 
      rounded-[20px] px-[30px] py-[30px]"
    >
      <h3 className="text-center text-[32px]">Podsumowanie</h3>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <section className="h-[210px] overflow-y-auto py-[10px]">
      {basket.positions.map(position => 
        <>
          <div className="w-[90%] flex items-center justify-between pl-[10%]">
            <img 
              src={"./images/product-image.jpg"} 
              alt={position.product.title} 
              className="w-[15%]"
            />
            <p 
              className="w-[40%] text-left text-[20px] font-normal"
            >{position.product.title}</p>
            <p 
              className="text-center text-[20px] font-semibold"
            >{position.amount} sz.</p>
            <div>
              <p 
                className="text-[20px] text-dark_red text-center font-semibold"
              >{position.product.price} zł</p>
              <p 
                className="text-[16px] text-center font-normal"
              >({position.product.basePrice} zł/kg)</p>
            </div>
          </div>
          <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
        </>
      )}
      </section>
      <section className="my-[20px] flex flex-col items-center justify-center">
        <p className="w-[70%] flex justify-between items-center">
          <span 
            className="text-[24px] text-left font-semibold"
          >Wartość zamówienia:</span>
          <span 
            className="text-[24px] text-left text-dark_red font-semibold"
          >{basket.total} zł</span>
        </p>
        <p className="w-[70%] flex justify-between items-center mt-[10px]">
          <span 
            className="text-[24px] text-left font-semibold"
          >Koszt przesyłki:</span>
          <span 
            className="text-[24px] text-left text-dark_red font-semibold"
          >{delivery_price ? delivery_price : 0} zł</span>
        </p>
      </section>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <p className="w-[90%] flex justify-between items-center ml-[20px]">
        <span 
          className="text-[32px] text-left font-semibold"
        >Do zapłaty:</span>
        <span 
          className="text-[32px] text-left text-dark_red font-semibold"
        >{delivery_price ? delivery_price + basket.total : basket.total} zł</span>
      </p>
      <p className="w-[100%] flex justify-center items-center gap-[50px] mt-[40px]">
        <Button 
          text="Anuluj" 
          value="continue" 
          styles="h-[50px] bg-dark_red border-2 border-green hover:border-orange rounded-3xl text-white text-base font-lemon px-[6px] py-[2px] w-[200px] text-[16px] mr-[20px]" 
          onClick={()=>{resetOrder()}}
        />
        <Button 
          text="Zamów" 
          value="continue" 
          styles="h-[50px] bg-orange border-2 border-green hover:border-orange rounded-3xl text-green 
          text-base font-lemon px-[6px] py-[2px] w-[200px] text-[16px] mr-[20px]" 
          onClick={()=>{createOrder()}}
        />
      </p>
    </section>
  );
};