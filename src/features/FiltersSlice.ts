import { IBrand } from '../interfaces/Brand';
import { ISubcategory } from './../interfaces/Category';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type FiltersState = {
  subcategory: ISubcategory | null;
  brands: IBrand[];
  priceMin: number;
  priceMax: number;
  rate: number;
};

const initialState: FiltersState = {
  subcategory: null,
  brands: [],
  priceMin: 0,
  priceMax: 0,
  rate: 0
};

const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, { payload }: PayloadAction<ISubcategory>) => {
      state.subcategory = payload;
    },
    addBrand: (state, { payload }: PayloadAction<IBrand>) => {
      const index = state.brands.findIndex((brand) => brand.id === payload.id);

      if (index !== -1) {
        state.brands = state.brands.filter((brand) => brand.id !== payload.id);
      } else {
        state.brands.push(payload);
      }
    },
    setPrice: (
      state,
      { payload }: PayloadAction<{ minPrice: number; maxPrice: number }>
    ) => {
      state.priceMin = payload.minPrice;
      state.priceMax = payload.maxPrice;
    },
    setRate: (state, { payload }: PayloadAction<number>) => {
      state.rate = payload;
    },
    clearFilters: (state) => {
      state.subcategory = null;
      state.brands = [];
      state.priceMax = 0;
      state.priceMin = 0;
      state.rate = 0;
    }
  }
});

export const { setCategory, addBrand, setPrice, setRate, clearFilters } =
  FiltersSlice.actions;

export default FiltersSlice.reducer;
