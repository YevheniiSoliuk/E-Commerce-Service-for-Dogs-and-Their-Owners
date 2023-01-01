import React from 'react';
import DeliveryInfo from './DeliveryInfo';
import PaymentMethodsSection from './PaymentMethodsSection/PaymentMethodsSection';

const Order = () => {
  return (
    <div className="my-[50px] mx-[100px]">
      <h2 className="text-[40px] text-center">Realizacja zamówienia</h2>
      <div className="mt-[50px]">
        <div className="flex items-center justify-between">
          <DeliveryInfo />
          <PaymentMethodsSection />
        </div>
        <div className="flex items-center justify-between">
          
        </div>
      </div>
    </div>
  );
};

export default Order;