import React from "react";
import { IPaymentMethod } from "../../../interfaces/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { setActiveCard } from "../../../features/OrderSlice";

const PaymentCard: React.FC<IPaymentMethod> = (card: IPaymentMethod) => {
  const activeCard = useSelector((state: RootState) => state.order.activeCard);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={activeCard === card.name ? "w-[15%] h-[145px] px-[10px] py-[10px] text-[20px] text-center border-[2px] border-orange text-orange " : "w-[15%] h-[145px] px-[10px] py-[10px] text-[20px] text-center"} onClick={()=>{dispatch(setActiveCard(card.name))}}>
      <img src={card.logo} alt={card.name} className="w-[full] h-[125px] mb-[20px]" onClick={()=>{}}/>
      <p>{card.name}</p>
    </div>
  )
}

export default PaymentCard;