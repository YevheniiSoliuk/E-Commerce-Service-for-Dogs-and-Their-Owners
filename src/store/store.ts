import { configureStore } from "@reduxjs/toolkit";
import ContactFormSlice from "../features/registration/ContactFormSlice";

export const store = configureStore({
  reducer: {
    contactForm: ContactFormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch