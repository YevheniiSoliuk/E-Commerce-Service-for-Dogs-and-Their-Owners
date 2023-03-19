import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { setOrderDeliveryMethod } from '../../../features/OrderSlice';
import { IDeliveryMethod } from '../../../interfaces/DeliveryMethod';
import { useDeliveriesQuery } from '../../../features/ApiDeliveryMethods';

import { Input } from '../../../components/commons/Input/Input';
import { PostalPunktsModal } from './PostalPunktsMap';
import { ChangeEventValue } from 'google-map-react';

// const deliveryMethods: IDeliveryMethod[] = [
//   {
//     logo: "./images/dhl.jpg",
//     name: "DHL Paczka - kurier",
//     delivery_payment: 3,
//     delivery_time: "1-2 dni",
//     postal_punkts: []
//   },
//   {
//     logo: "./images/dpd.png", 
//     name: "DPD Paczka - kurier",
//     delivery_payment: 0,
//     delivery_time: "1-2 dni",
//     postal_punkts: []
//   },
//   {
//     logo: "./images/inpost-kurier.png", 
//     name: "InPost Kurier Paczka",
//     delivery_payment: 3,
//     delivery_time: "2-3 dni",
//     postal_punkts: []
//   },
//   {
//     logo: "./images/inpost-paczkomaty.jpg", 
//     name: "InPost Paczkomaty 24/7",
//     delivery_payment: 2,
//     delivery_time: "1 dzień",
//     postal_punkts: []
//   },
//   {
//     logo: "./images/orlen-paczka.png", 
//     name: "Orlen Paczka – kioski Ruchu, salony współpartnerskie",
//     delivery_payment: 0,
//     delivery_time: "1-2 dni",
//     postal_punkts: []
//   },
// ]

export const DeliveryMethodsSection = () => {
  const [isPostalPunktsOpen, setIsPostalPunktsOpen] = useState<boolean>(false);
  const closePostalPunktsModal = () => setIsPostalPunktsOpen(false);

  const method = useSelector((state: RootState) => state.order.deliveryMethod?.name);
  const dispatch: AppDispatch = useDispatch();
  const [deliveryMethod, setDeliveryMethod] = useState<string>(method ? method : "");

  const { data } = useDeliveriesQuery();
  const [deliveryMethods, setDeliveryMethods] = useState<IDeliveryMethod[]>([]);
  
  useEffect(() => {
    if(data) {
      setDeliveryMethods(data["Delivery methods"]);
    }
  }, [data])

  const setDeliveryMethodOnLogoCLick = (value: IDeliveryMethod) => {
    setDeliveryMethod(value.name);
    dispatch(setOrderDeliveryMethod(value));
    setIsPostalPunktsOpen(o => !o);
  }
  
  return (
    <section 
      className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green 
      rounded-[20px] px-[30px] py-[30px]"
    >
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setDeliveryMethod(e.target.value)}} 
              action={()=>{setDeliveryMethodOnLogoCLick(delivery)}} 
              placeholder={delivery.name} 
              imgSrc={delivery.logoURL}
              price={delivery.deliveryPayment}
            />
            {/* <PostalPunktsModal
              modalProps={({
                isOpen: isPostalPunktsOpen,
                close: closePostalPunktsModal
              })}
              postalPunctIds={delivery.postal_points}
            /> */}
          </>
        )}
      </div>
    </section>
  );
};