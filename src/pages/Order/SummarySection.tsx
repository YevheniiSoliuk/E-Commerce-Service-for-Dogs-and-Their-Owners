import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { ProductCart, clearCart } from '../../features/ordering/ProductCartSlice';
import { useNavigate } from 'react-router-dom';
import { removeOrderData } from '../../features/OrderSlice';
import { useOrderMutation } from '../../features/ApiOrderSlice';
import { IOrder } from '../../interfaces/Order';
import { useGetUserAddressQuery } from '../../features/ApiUserSlice';
import { Button } from '../../components/commons/Button/Button';

export const SummarySection = () => {
  const basket: ProductCart = useSelector((state: RootState) => state.productCart)
  const delivery_price: number | undefined = 
    useSelector((state: RootState) => state.order.deliveryMethod?.delivery_payment);
  const paymentMethodId = useSelector((state: RootState) => state.order.paymentMethod?.id);
  const id = useSelector((state: RootState) => state.auth.user?.address_id);
  const {data: address} = useGetUserAddressQuery(id);

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [order] = useOrderMutation()

  const resetOrder = () => {
    dispatch(clearCart());
    dispatch(removeOrderData());
    navigate("/products");
  }

  const createOrder = async () => {
    const productsIds: number[] = [];
    const amountOfProducts: number[] = [];

    basket.positions.forEach(position => {
      productsIds.push(Number(position.product.id));
      amountOfProducts.push(Number(position.amount));
    })

    const payload: IOrder = {
      city: address ? address.city : "",
      street: address ? address.street : "",
      home_number: address ? address.home_number : "",
      post_code: address ? address.post_code : "",
      status_id: 1,
      payment_method_id: paymentMethodId ? paymentMethodId : 0,
      products_id: productsIds,
      amounts_of_products: amountOfProducts
    }

    await order(payload)
    .unwrap()
    .then((result) => console.log("fullfilled", result))
    .catch((error) => console.error("rejected", error));

    dispatch(clearCart());
    dispatch(removeOrderData());
    navigate("/products");
  }
  
  return (
    <section 
      className="w-[45%] h-[100%] bg-dark_green border-[2px] border-green 
      rounded-[20px] px-[30px] py-[30px]"
    >
      <h3 className="text-center text-[32px]">Podsumowanie</h3>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <section className="h-[210px] overflow-y-auto py-[10px]">
      {basket.positions.map(position => 
        <>
          <div className="w-[90%] flex items-center justify-between pl-[10%]">
            <img 
              src={"./images/product-image.jpg"} 
              alt={position.product.title} 
              className="w-[15%]"
            />
            <p 
              className="w-[40%] text-left text-[20px] font-normal"
            >{position.product.title}</p>
            <p 
              className="text-center text-[20px] font-semibold"
            >{position.amount} sz.</p>
            <div>
              <p 
                className="text-[20px] text-dark_red text-center font-semibold"
              >{position.product.price} zł</p>
              <p 
                className="text-[16px] text-center font-normal"
              >({position.product.base_price} zł/kg)</p>
            </div>
          </div>
          <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
        </>
      )}
      </section>
      <section className="my-[20px] flex flex-col items-center justify-center">
        <p className="w-[70%] flex justify-between items-center">
          <span 
            className="text-[24px] text-left font-semibold"
          >Wartość zamówienia:</span>
          <span 
            className="text-[24px] text-left text-dark_red font-semibold"
          >{basket.total} zł</span>
        </p>
        <p className="w-[70%] flex justify-between items-center mt-[10px]">
          <span 
            className="text-[24px] text-left font-semibold"
          >Koszt przesyłki:</span>
          <span 
            className="text-[24px] text-left text-dark_red font-semibold"
          >{delivery_price ? delivery_price : 0} zł</span>
        </p>
      </section>
      <div className="w-[90%] h-[2px] bg-green ml-auto mr-auto my-[20px]"></div>
      <p className="w-[90%] flex justify-between items-center ml-[20px]">
        <span 
          className="text-[32px] text-left font-semibold"
        >Do zapłaty:</span>
        <span 
          className="text-[32px] text-left text-dark_red font-semibold"
        >{delivery_price ? delivery_price + basket.total : basket.total} zł</span>
      </p>
      <p className="w-[100%] flex justify-center items-center gap-[50px] mt-[40px]">
        <Button 
          text="Anuluj" 
          value="continue" 
          styles="h-[50px] bg-dark_red border-2 border-green hover:border-orange rounded-3xl text-white text-base font-lemon px-[6px] py-[2px] w-[200px] text-[16px] mr-[20px]" 
          onClick={()=>{resetOrder()}}
        />
        <Button 
          text="Zamów" 
          value="continue" 
          styles="h-[50px] bg-orange border-2 border-green hover:border-orange rounded-3xl text-green 
          text-base font-lemon px-[6px] py-[2px] w-[200px] text-[16px] mr-[20px]" 
          onClick={()=>{createOrder()}}
        />
      </p>
    </section>
  );
};