import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  paymentMethod: string,
  isAnotherAddress: boolean,
  activeCard: string,
  deliveryMethod: string
}

const initialState: State = {
  paymentMethod: "",
  isAnotherAddress: false,
  activeCard: "",
  deliveryMethod: "",
}

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderPaymentMethod: (state, {payload}:PayloadAction<string>) => {
      state.paymentMethod = payload;
    },
    toggleIsAnotherAddress: (state) => {
      if(!state.isAnotherAddress)
      {
        state.isAnotherAddress = true;
      }
      else 
      {
        state.isAnotherAddress = false;
      }
    },
    setActiveCard: (state, {payload}: PayloadAction<string>) => {
      state.activeCard = payload;
    },
    setOrderDeliveryMethod: (state, {payload}: PayloadAction<string>) => {
      state.deliveryMethod = payload;
    }
  }
})

export const {
  setOrderPaymentMethod,
  toggleIsAnotherAddress,
  setActiveCard,
  setOrderDeliveryMethod
} = OrderSlice.actions;

export default OrderSlice.reducer;