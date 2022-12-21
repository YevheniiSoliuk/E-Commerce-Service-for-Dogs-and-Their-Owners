import { IBrand } from '../interfaces/Brand';
import { ISubcategory } from './../interfaces/Category';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
  subcategory: ISubcategory | null,
  brands: IBrand[],
  priceMin: number,
  priceMax: number,
  rate: number
}

const initialState: FiltersState = {
  subcategory: null,
  brands: [],
  priceMin: 0,
  priceMax: 0,
  rate: 0
}

const FiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, {payload}: PayloadAction<ISubcategory>) => {
      state.subcategory = payload;
    },
    addBrand: (state, {payload}: PayloadAction<IBrand[]>) => {
      state.brands = {...state.brands, ...payload};
    },
    setPrice: (state, {payload}: PayloadAction<{minPrice: number, maxPrice: number}>) => {
      state.priceMin = payload.minPrice;
      state.priceMax = payload.maxPrice;
    },
    setRate: (state, {payload}: PayloadAction<number>) => {
      state.rate = payload;
    }
  }
})

export const {
  setCategory,
  addBrand,
  setPrice,
  setRate
} = FiltersSlice.actions;

export default FiltersSlice.reducer;
