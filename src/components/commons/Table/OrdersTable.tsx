import React from 'react';
import { IOrder } from '../../../interfaces/Order';
import OrderDetails from './TableRow';

const OrdersTable: React.FC<{orders : IOrder[]}> = ({orders}) => {
  return (
    <div className="w-[100%] h-[450px] bg-yellow/80 border-2 border-green rounded-[10px] mt-[20px] mb-[30px]px-[20px] py-[20px] overflow-y-auto">
      <table className="w-[100%] layout-auto tracking-[.1em]">
        <thead>
          <tr>
            <th>Nr</th>
            <th>Nr Zamówienia</th>
            <th>Data złożenia</th>
            <th>Status</th>
            <th>Suma</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: IOrder, index: number) =>
              <OrderDetails order={order} index={index}/>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
