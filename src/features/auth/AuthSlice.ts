import { RootState } from './../../store/store';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IUser } from '../../interfaces/User';

type Credentials = {
  user: IUser | null,
  token: string | null,
  isAuth?: boolean
}

const initialState: Credentials = {
  user: null,
  token: null,
  isAuth: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, {payload}: PayloadAction<Credentials>) => {
      const {user, token} = payload;
      
      state.user = user;
      state.token = token;
      state.isAuth = true;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    }
  },
})

export const {
  setCredentials,
  logOut,
} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;