import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import AuthSlice from "../features/auth/AuthSlice";
import OrderHistorySlice from "../features/ordering/OrderHistorySlice";
import ProductCartSlice from "../features/ordering/ProductCartSlice";
import ContactFormSlice from "../features/registration/ContactFormSlice";

export const store = configureStore({
  reducer: {
    contactForm: ContactFormSlice,
    orderHistory: OrderHistorySlice,
    productCart: ProductCartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: AuthSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch