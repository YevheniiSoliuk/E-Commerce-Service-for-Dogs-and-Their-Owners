import { RootState } from './../../store/store';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Credentials = {
  user: string[] | null,
  token: string | null,
}

const initialState: Credentials = {
  user: null, 
  token: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, {payload}: PayloadAction<Credentials>) => {
      const {user, token} = payload;

      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    }
  },
})

export const {
  setCredentials,
  logOut,
} = authSlice.actions;

export default authSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;
// export const selectCurrentToken = (state: RootState) => state.auth.token;