import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import { ModalProps } from "../../../components/Login/ModalProps";
import { IPaymentMethod } from "../../../interfaces/PaymentMethod";
import PaymentCard from "./PaymentCardCard";

type Props = {
  modalProps: ModalProps,
  cards: IPaymentMethod[]
}

const PaymentCardsModal = ({modalProps, cards}: Props) => {
  const { isOpen, close } = modalProps;

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div className="w-[90%] h-[600px] bg-yellow rounded-[20px] border-2 border-green font-lemon text-center text-green px-[45px] py-[45px]">
        <h2 className="text-[24px] mb-[30px]">Wybierz typ płatności i kliknij poza obszar okienka</h2>
        <div className="flex flex-wrap justify-between items-center">
          {cards.map((card:IPaymentMethod) => 
            <PaymentCard name={card.name} logo={card.logo}/>
          )}
        </div>
      </div>
    </Popup>
  )
}

export default PaymentCardsModal;