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

          if(payload.discount_amount !== 0 && 
            payload.discount_price !== null && 
            payload.discount_price !== undefined)
          {
            state.totalDiscount += payload.discount_price;
          }
        }
      });
  
      if(isNewPosition)
      {
        state.positions.push({product: payload, amount: 1});
        state.positionsAmount += 1;
        state.total += payload.price;

        if(payload.discount_amount !== 0 && 
          payload.discount_price !== null && 
          payload.discount_price !== undefined)
        {
          state.totalDiscount += payload.discount_price;
        }
      }
    },
    removePosition: (state, {payload}:PayloadAction<string|number>) => {
      state.positions.forEach(position => {
        if(position.product.id === payload) 
        { 
          state.total -= position.amount * position.product.price;
          if(position.product.discount_amount !== 0 && 
            position.product.discount_price !== null && 
            position.product.discount_price !== undefined)
          {
            state.totalDiscount -= position.amount * position.product.discount_price
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

          if(payload.product.discount_amount !== 0 && 
            payload.product.discount_price !== null && 
            payload.product.discount_price !== undefined)
          {
            state.totalDiscount += payload.product.discount_price * value;
          }
        }
      });

      if(isNewPosition)
      {
        state.positions.push({product: payload.product, amount: value});
        state.positionsAmount += 1;
        state.total += payload.product.price * value;

        if(payload.product.discount_amount !== 0 &&
          payload.product.discount_price !== null &&
          payload.product.discount_price !== undefined)
        {
          state.totalDiscount += payload.product.discount_price * value;
        }
      }
    },
    incrementProductAmount: (state, {payload}: PayloadAction<string|number>) => {
      state.positions.forEach(position => {
        if(position.product.id === payload)
        { 
          position.amount += 1;
          state.total += position.product.price;

          if(position.product.discount_amount !== 0 &&
            position.product.discount_price !== null &&
            position.product.discount_price !== undefined)
          {
            state.totalDiscount += position.product.discount_price;
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

            if(position.product.discount_amount !== 0 &&
              position.product.discount_price !== null &&
              position.product.discount_price !== undefined)
            {
              state.totalDiscount -= position.product.discount_price;
            }
          }
          else
          {
            position.amount -= 1;
            state.total -= position.product.price;

            if(position.product.discount_amount !== 0 &&
              position.product.discount_price !== null &&
              position.product.discount_price !== undefined)
            {
              state.totalDiscount -= position.product.discount_price;
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