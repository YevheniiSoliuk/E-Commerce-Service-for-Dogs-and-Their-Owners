import { useEffect, useState } from 'react';
import { Input } from '../../../components/commons/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { setOrderPaymentMethod } from '../../../features/OrderSlice';
import { IPaymentMethod } from '../../../interfaces/PaymentMethod';
import { usePaymentsQuery } from '../../../features/ApiPaymentMethods';

// const cards: IPaymentMethod[] = [
//   {logo: "./images/pekao.png", name: "Pekao"},
//   {logo: "./images/pko.png", name: "PKO Bank"},
//   {logo: "./images/velobank.png", name: "VELO Bank"},
//   {logo: "./images/mbank.gif", name: "mBank"},
//   {logo: "./images/ing.png", name: "ING Bank"},
// ]


// const payments: IPaymentMethod[] = [
//   {logo: "./images/blik.png", name: "BLIK"},
//   {logo: "./images/przelew.jpg", name: "Przelew zwykły"},
//   {logo: "./images/selftake.jpg", name: "Odbiór osobisty"},
//   {logo: "./images/credit-card.png", name: "Karta płatnicza", cards: cards}
// ]

export const PaymentMethodsSection = () => {
  const method: string | undefined = useSelector((state: RootState) => state.order.paymentMethod?.name);
  const dispatch: AppDispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState<string>(method ? method : "");

  const { data } = usePaymentsQuery();
  const [paymentMethods, setPaymentMethods] = useState<IPaymentMethod[]>([]);

  useEffect(() => {
    if(data) {
      setPaymentMethods(data["Payment Methods"]);
    }
  }, [data])

  const setPaymentMethodOnLogoCLick = (value: IPaymentMethod) => {
    setPaymentMethod(value.name);
    dispatch(setOrderPaymentMethod(value));
  }
  
  return (
    <section
      className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green 
      rounded-[20px] px-[30px] py-[30px]"
    >
      <h3 className="text-center text-[32px]">Platności</h3>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <div className="ml-[30px]">
        {paymentMethods.map((payment: IPaymentMethod) =>
          <>
            <Input 
              key={payment.name}
              type="radio" 
              name="payments" 
              value={payment.name}
              state={paymentMethod} 
              onChange={(e)=>{setPaymentMethod(e.target.value)}} 
              action={()=>{setPaymentMethodOnLogoCLick(payment)}} 
              placeholder={payment.name} 
              imgSrc={payment.photo_url}
            />
          </>
        )}
      </div>
    </section>
  );
}