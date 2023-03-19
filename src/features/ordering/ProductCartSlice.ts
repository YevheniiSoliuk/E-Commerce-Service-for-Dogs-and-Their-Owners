import { IOrderPosition, IProduct } from './../../interfaces/Order';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductCart = {
  positions: IOrderPosition[],
  positionsAmount: number,
  total: number,
  totalDiscount: number
}

const initialState: ProductCart = {
  positions: [],
  positionsAmount: 0,
  total: 0,
  totalDiscount: 0
}

const ProductCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addPosition: (state, {payload}:PayloadAction<IProduct>) => {
      let isNewPosition: boolean = true;

      state.positions.forEach(position => {
        if(position.product.id === payload.id) 
        { 
          position.amount += 1;
          isNewPosition = false;
          state.total += payload.price;

          if(payload.discountAmount !== null)
          {
            state.totalDiscount += payload.price * (payload.discountAmount/100);
          }
        }
      });
  
      if(isNewPosition)
      {
        state.positions.push({product: payload, amount: 1});
        state.positionsAmount += 1;
        state.total += payload.price;

        if(payload.discountAmount !== null)
        {
          state.totalDiscount += payload.price * (payload.discountAmount/100);
        }
      }
    },
    removePosition: (state, {payload}:PayloadAction<string|number>) => {
      state.positions.forEach(position => {
        if(position.product.id === payload) 
        { 
          state.total -= position.amount * position.product.price;
          if(position.product.discountAmount !== null)
          {
            state.totalDiscount -= position.amount * (position.product.price * (position.product.discountAmount/100));
          }
        }     
      });

      state.positions = state.positions.filter(position => position.product.id !== payload);
      state.positionsAmount -= 1;
    },
    incrementProductAmountByValue: (state, {payload}: PayloadAction<{product: IProduct, value: number}>) => {
      const id = payload.product.id;
      const value = payload.value;
      let isNewPosition = true;

      state.positions.forEach(position => {
        if(position.product.id === id)
        { 
          position.amount += value;
          state.total += payload.product.price * value;
          isNewPosition = false;

          if(payload.product.discountAmount !== null)
          {
            state.totalDiscount += payload.product.price * (payload.product.discountAmount/100) * value;
          }
        }
      });

      if(isNewPosition)
      {
        state.positions.push({product: payload.product, amount: value});
        state.positionsAmount += 1;
        state.total += payload.product.price * value;

        if(payload.product.discountAmount !== null)
        {
          state.totalDiscount += payload.product.price * (payload.product.discountAmount/100) * value;
        }
      }
    },
    incrementProductAmount: (state, {payload}: PayloadAction<string|number>) => {
      state.positions.forEach(position => {
        if(position.product.id === payload)
        { 
          position.amount += 1;
          state.total += position.product.price;

          if(position.product.discountAmount !== null)
          {
            state.totalDiscount += position.product.price * (position.product.discountAmount/100);
          }
        }
      });
    },
    decrementProductAmount: (state, {payload}: PayloadAction<string|number>) => {
      state.positions.forEach(position => {
        if(position.product.id === payload) {
          if(position.amount === 1)
          {
            state.positions = state.positions.filter(position => position.product.id !== payload);
            state.positionsAmount -= 1;
            state.total -= position.product.price;

            if(position.product.discountAmount !== null)
            {
              state.totalDiscount -= position.product.price * (position.product.discountAmount/100);
            }
          }
          else
          {
            position.amount -= 1;
            state.total -= position.product.price;

            if(position.product.discountAmount !== null)
            {
              state.totalDiscount -= position.product.price * (position.product.discountAmount/100);
            }
          }
        }
      });
    },
    clearCart: (state) => {
      state.positions = [];
      state.positionsAmount = 0;
      state.total = 0;
      state.totalDiscount = 0;
    }
  }
});

export const {
  addPosition,
  removePosition,
  incrementProductAmountByValue,
  incrementProductAmount,
  decrementProductAmount,
  clearCart
} = ProductCartSlice.actions;

export default ProductCartSlice.reducer;