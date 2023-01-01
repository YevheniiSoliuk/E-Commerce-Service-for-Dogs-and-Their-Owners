import React from 'react';
import OrdersTable from '../../../components/commons/Table/OrdersTable';
import SearchSection from '../../../components/SearchSection/SearchSection';
import { orders } from '../../../data/orders';

const OredrsInfo = () => {
  return (
    <div className="w-[950px] h-[100%] bg-dark_green border-2 border-green rounded-[25px] py-[40px] px-[50px]">
      <h2 className="text-[32px] text-center mb-[50px]">TWOJE ZAMÓWIENIA</h2>
      {/* <SearchSection forPage="orders" items={[]} setSearchResults={()=>{}} values={["Odebrano", "W trakcie realizacji", "W drodzę", "Oczekuje na potwierdzenie", "Oczekuje na odbiór"]} placeholder="Wyszukaj zamówienie ..."/> */}
      <OrdersTable orders={orders}/>
    </div>
  );
};

export default OredrsInfo;