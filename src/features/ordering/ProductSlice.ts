import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type SliceState = {
  rating: number;
};

const initialState = {
  rating: 0
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setRating: (state, { payload }: PayloadAction<number>) => {
      state.rating = payload;
    }
  }
});

export const { setRating } = ProductSlice.actions;

export default ProductSlice.reducer;
