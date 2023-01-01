import React from "react";
import { IPaymentMethod } from "../../../interfaces/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { toggleIsActiveCard } from "../../../features/OrderSlice";

const PaymentCard: React.FC<IPaymentMethod> = (card: IPaymentMethod) => {
  const isActiveCard = useSelector((state: RootState) => state.order.isActiveCard);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={isActiveCard ? "w-[15%] h-[145px] px-[10px] py-[10px] text-[20px] text-center border-[2px] border-orange text-orange " : "w-[15%] h-[145px] px-[10px] py-[10px] text-[20px] text-center"} onClick={()=>{dispatch(toggleIsActiveCard())}}>
      <img src={card.logo} alt={card.name} className="w-[full] h-[125px] mb-[20px]" onClick={()=>{}}/>
      <p>{card.name}</p>
    </div>
  )
}

export default PaymentCard;