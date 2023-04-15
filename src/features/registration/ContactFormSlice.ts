import { createSlice } from '@reduxjs/toolkit';

export interface ContactFormState {
  checkedEmailNewsletter: boolean;
  checkedSMSNewsletter: boolean;
  checkedEmailTransmition: boolean;
  checkedTerms: boolean;
}

const initialState: ContactFormState = {
  checkedEmailNewsletter: false,
  checkedSMSNewsletter: false,
  checkedEmailTransmition: false,
  checkedTerms: false
};

const ContactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    checkEmailNewsletter: (state) => {
      state.checkedEmailNewsletter = !state.checkedEmailNewsletter;
    },
    checkSMSNewsletter: (state) => {
      state.checkedSMSNewsletter = !state.checkedSMSNewsletter;
    },
    checkEmailTransmition: (state) => {
      state.checkedEmailTransmition = !state.checkedEmailTransmition;
    },
    checkTerms: (state) => {
      state.checkedTerms = !state.checkedTerms;
    }
  }
});

export const {
  checkEmailNewsletter,
  checkSMSNewsletter,
  checkEmailTransmition,
  checkTerms
} = ContactFormSlice.actions;

export default ContactFormSlice.reducer;
