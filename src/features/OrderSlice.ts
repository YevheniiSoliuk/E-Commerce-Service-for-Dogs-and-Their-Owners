import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  paymentMethod: string,
  isAnotherAddress: boolean,
  isActiveCard: boolean
}

const initialState: State = {
  paymentMethod: "",
  isAnotherAddress: false,
  isActiveCard: false,
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
    toggleIsActiveCard: (state) => {
      if(state.isActiveCard)
      {
        state.isActiveCard = false;
      }
      else 
      {
        state.isActiveCard = true;
      }
    }
  }
})

export const {
  setOrderPaymentMethod,
  toggleIsAnotherAddress,
  toggleIsActiveCard
} = OrderSlice.actions;

export default OrderSlice.reducer;