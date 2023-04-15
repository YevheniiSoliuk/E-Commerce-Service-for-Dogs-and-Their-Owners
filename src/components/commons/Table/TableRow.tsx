import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IOrder, IOrderPosition } from '../../../interfaces/Order';

export const OrderDetails: React.FC<{ order: any; index: number }> = ({
  order,
  index
}) => {
  const [orderClicked, setOrderClicked] = useState(false);
  const navigate = useNavigate();

  const toggleOrderDetails = () => {
    setOrderClicked(!orderClicked);
  };

  const clickHandler = (product: IOrderPosition, id: string | number) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <tr
        className="h-[110px] text-center border-b-[1px] border-t-[1px] border-green hover:cursor-pointer"
        onClick={() => {
          toggleOrderDetails();
        }}
      >
        <td>{index + 1}</td>
        <td>{order.number}</td>
        <td>{order.date}</td>
        <td className="w-[70px]">{order.status}</td>
        <td className="text-dark_red">{order.summaryPrice} zł</td>
      </tr>
      {orderClicked
        ? order.products.map((product: any) => (
            <tr className="h-[110px] bg-yellow/70 border-y-[3px] border-green">
              <td className="pl-[20px]">
                <img
                  src={product.product.photos[0]}
                  alt="product"
                  className="w-[100px]"
                />
              </td>
              <td>
                <p className="text-[12px]">{product.product.title}</p>
                <p className="text-[10px]">{product.product.brand_id}</p>
                <p className="text-[10px]">{product.product.subcategory_id}</p>
              </td>
              <td className="text-center">
                <p className="text-[14px]">Liczba sztuk</p>
                <p className="text-[16px]">{product.amount}</p>
              </td>
              <td className="text-center">
                <p className="text-[14px]">Cena</p>
                <p className="text-[14px] text-dark_red">
                  {product.product.price} zł
                </p>
                <p className="text-[10px]">
                  ({product.product.base_price} zł/kg)
                </p>
              </td>
              <td className="text-center">
                <span
                  className="text-[12px] hover:text-orange hover:cursor-pointer"
                  onClick={() => {
                    clickHandler(product, product.product.id);
                  }}
                >
                  Szczegóły
                </span>
              </td>
            </tr>
          ))
        : null}
    </>
  );
};
