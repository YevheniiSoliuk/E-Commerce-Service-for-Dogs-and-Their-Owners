import React, { useEffect, useState } from 'react';
import Input from '../../../components/commons/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { setActiveCard, setOrderPaymentMethod } from '../../../features/OrderSlice';
import { IPaymentMethod } from '../../../interfaces/PaymentMethod';
import PaymentCardsModal from './PaymentCardsPopup';

const cards: IPaymentMethod[] = [
  {logo: "./images/pekao.png", name: "Pekao"},
  {logo: "./images/pko.png", name: "PKO Bank"},
  {logo: "./images/velobank.png", name: "VELO Bank"},
  {logo: "./images/mbank.gif", name: "mBank"},
  {logo: "./images/ing.png", name: "ING Bank"},
]


const payments: IPaymentMethod[] = [
  {logo: "./images/blik.png", name: "BLIK"},
  {logo: "./images/przelew.jpg", name: "Przelew zwykły"},
  {logo: "./images/selftake.jpg", name: "Odbiór osobisty"},
  {logo: "./images/credit-card.png", name: "Karta płatnicza", cards: cards}
]

const PaymentMethodsSection = () => {
  const [isCardsOpen, setIsCardsOpen] = useState(false);
  const closeCardsModal = () => setIsCardsOpen(false);

  const method = useSelector((state: RootState) => state.order.paymentMethod);
  const dispatch: AppDispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState<string>(method);

  // const { data, isLoading } = usePaymentsQuery();
  // const [paymentMethods, setPaymentMethods] = useState<IPaymentMethod[]>([]);
  // useEffect(()=>{
  //   if(data)
  //     setPaymentMethods(data[""]);
  // }, [data])

  const setPaymentMethodOnLogoCLick = (value: string) => {
    if(value === "Karta płatnicza")
    {
      setIsCardsOpen(o => !o);
    }

    setPaymentMethod(value);
    dispatch(setOrderPaymentMethod(value));
    dispatch(setActiveCard(""));
  }
  
  return (
    <div className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green rounded-[20px] px-[30px] py-[30px]">
      <h3 className="text-center text-[32px]">Platności</h3>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <div className="ml-[30px]">
        {payments.map((payment: IPaymentMethod) =>
          <>
            <Input 
              key={payment.name}
              type="radio" 
              name="payments" 
              value={payment.name}
              state={paymentMethod} 
              onChange={(e)=>{setPaymentMethod(e.target.value)}} 
              action={()=>{setPaymentMethodOnLogoCLick(payment.name)}} 
              placeholder={payment.name} 
              imgSrc={payment.logo}
            />
            {payment.cards ?
              <PaymentCardsModal
                modalProps={({
                  isOpen: isCardsOpen,
                  close: closeCardsModal
                })}
                cards={payment.cards}
              /> :
              null
            }
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodsSection;