import { createSlice } from "@reduxjs/toolkit";

export interface ContactFormState {
  isCorporation: boolean,
  checkedEmailNewsletter: boolean,
  checkedSMSNewsletter: boolean,
  checkedTerms: boolean,
}

const initialState: ContactFormState = {
  isCorporation: false,
  checkedEmailNewsletter: false,
  checkedSMSNewsletter: false,
  checkedTerms: false,
}

const ContactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    toggleContactForm: (state) => {
      if(!state.isCorporation)
      {
        state.isCorporation = true;
      }
      else
      {
        state.isCorporation = false;
      }
    },
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
  toggleContactForm, 
  checkEmailNewsletter, 
  checkSMSNewsletter, 
  checkTerms
} = ContactFormSlice.actions;

export default ContactFormSlice.reducer;