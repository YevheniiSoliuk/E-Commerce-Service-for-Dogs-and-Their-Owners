import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import AuthSlice from "../features/auth/AuthSlice";
import OrderHistorySlice from "../features/ordering/OrderHistorySlice";
import ProductCartSlice from "../features/ordering/ProductCartSlice";
import ProductSlice from "../features/ordering/ProductSlice";
import ContactFormSlice from "../features/registration/ContactFormSlice";
import FiltersSlice from "../features/FiltersSlice";

export const store = configureStore({
  reducer: {
    contactForm: ContactFormSlice,
    orderHistory: OrderHistorySlice,
    productCart: ProductCartSlice,
    product: ProductSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: AuthSlice,
    filters: FiltersSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch