import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDeliveryMethod } from '../interfaces/DeliveryMethod';
import { IPaymentMethod } from '../interfaces/PaymentMethod';

type State = {
  paymentMethod: IPaymentMethod | null,
  deliveryMethod: IDeliveryMethod | null
}

const initialState: State = {
  paymentMethod: null,
  deliveryMethod: null,
}

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderPaymentMethod: (state, {payload}: PayloadAction<IPaymentMethod>) => {
      state.paymentMethod = payload;
    },
    setOrderDeliveryMethod: (state, {payload}: PayloadAction<IDeliveryMethod>) => {
      state.deliveryMethod = payload;
    },
    removeOrderData: (state) => {
      state.deliveryMethod = null;
      state.paymentMethod = null;
    }
  }
})

export const {
  setOrderPaymentMethod,
  setOrderDeliveryMethod,
  removeOrderData
} = OrderSlice.actions;

export default OrderSlice.reducer;