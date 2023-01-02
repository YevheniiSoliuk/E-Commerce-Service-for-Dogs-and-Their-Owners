import React, { useEffect, useState } from 'react';
import Input from '../../../components/commons/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { setActiveCard, setOrderDeliveryMethod } from '../../../features/OrderSlice';
import { IDeliveryMethod } from '../../../interfaces/DeliveryMethod';
import PostalPunktsModal from './PostalPunktsMap';

const deliveryMethods: IDeliveryMethod[] = [
  {
    logo: "./images/dhl.jpg",
    name: "DHL Paczka - kurier",
    delivery_payment: 3,
    delivery_time: "1-2 dni",
    postal_punkts: []
  },
  {
    logo: "./images/dpd.png", 
    name: "DPD Paczka - kurier",
    delivery_payment: 0,
    delivery_time: "1-2 dni",
    postal_punkts: []
  },
  {
    logo: "./images/inpost-kurier.png", 
    name: "InPost Kurier Paczka",
    delivery_payment: 3,
    delivery_time: "2-3 dni",
    postal_punkts: []
  },
  {
    logo: "./images/inpost-paczkomaty.jpg", 
    name: "InPost Paczkomaty 24/7",
    delivery_payment: 2,
    delivery_time: "1 dzień",
    postal_punkts: []
  },
  {
    logo: "./images/orlen-paczka.png", 
    name: "Orlen Paczka – kioski Ruchu, salony współpartnerskie",
    delivery_payment: 0,
    delivery_time: "1-2 dni",
    postal_punkts: []
  },
]

const PaymentMethodsSection = () => {
  const [isPostalPunktsOpen, setIsPostalPunktsOpen] = useState(false);
  const closePostalPunktsModal = () => setIsPostalPunktsOpen(false);

  const method = useSelector((state: RootState) => state.order.deliveryMethod);
  const dispatch: AppDispatch = useDispatch();
  const [deliveryMethod, setDeliveryMethod] = useState<string>(method);

  // const { data, isLoading } = useDeliveriesQuery();
  // const [deliveryMethods, setDeliveryMethods] = useState<IDeliveryMethod[]>([]);
  // useEffect(()=>{
  //   if(data)
  //     setDeliveryMethods(data[""]);
  // }, [data])

  const setPaymentMethodOnLogoCLick = (value: string) => {
    setDeliveryMethod(value);
    dispatch(setOrderDeliveryMethod(value));
    setIsPostalPunktsOpen(o => !o);
  }
  
  return (
    <div className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green rounded-[20px] px-[30px] py-[30px]">
      <h3 className="text-center text-[32px]">Metody dostawy</h3>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <div className="ml-[30px]">
        {deliveryMethods.map((delivery: IDeliveryMethod) =>
          <>
            <Input 
              key={delivery.name}
              type="radio" 
              name="deliveries" 
              value={delivery.name}
              state={deliveryMethod} 
              onChange={(e)=>{setDeliveryMethod(e.target.value)}} 
              action={()=>{setPaymentMethodOnLogoCLick(delivery.name)}} 
              placeholder={delivery.name} 
              imgSrc={delivery.logo}
              price={delivery.delivery_payment}
            />
            <PostalPunktsModal
              modalProps={({
                isOpen: isPostalPunktsOpen,
                close: closePostalPunktsModal
              })}
              postalPuncts={delivery.postal_punkts}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodsSection;