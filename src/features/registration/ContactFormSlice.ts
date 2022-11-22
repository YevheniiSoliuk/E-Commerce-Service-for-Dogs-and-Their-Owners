import { createSlice } from "@reduxjs/toolkit";

export interface ContactFormState {
  checkedEmailNewsletter: boolean,
  checkedSMSNewsletter: boolean,
  checkedEmailTransmition: boolean,
  checkedTerms: boolean,
}

const initialState: ContactFormState = {
  checkedEmailNewsletter: false,
  checkedSMSNewsletter: false,
  checkedEmailTransmition: false,
  checkedTerms: false,
}

const ContactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    checkEmailNewsletter: (state) => {
      if(!state.checkedEmailNewsletter)
      {
        state.checkedEmailNewsletter = true;
      }
      else
      {
        state.checkedEmailNewsletter = false;
      }
    },
    checkSMSNewsletter: (state) => {
      if(!state.checkedSMSNewsletter)
      {
        state.checkedSMSNewsletter = true;
      }
      else
      {
        state.checkedSMSNewsletter = false;
      }
    },
    checkEmailTransmition: (state) => {
      if(!state.checkedEmailTransmition)
      {
        state.checkedEmailTransmition = true;
      }
      else
      {
        state.checkedEmailTransmition = false;
      }
    },
    checkTerms: (state) => {
      if(!state.checkedTerms)
      {
        state.checkedTerms = true;
      }
      else
      {
        state.checkedTerms = false;
      }
    },
  }
})

export const { 
  checkEmailNewsletter, 
  checkSMSNewsletter,
  checkEmailTransmition, 
  checkTerms
} = ContactFormSlice.actions;

export default ContactFormSlice.reducer;