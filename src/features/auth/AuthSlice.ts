import { RootState } from './../../store/store';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IUser } from '../../interfaces/User';

type Credentials = {
  user: IUser | null,
  token: string | null,
  isAuth?: boolean
  passRecoveryToken?: string
}

const initialState: Credentials = {
  user: null,
  token: null,
  isAuth: false,
  passRecoveryToken: ""
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
    },
    setPassRecoveryToken : (state, {payload}: PayloadAction<string>) => {
      state.passRecoveryToken = payload;
    },
    setNewFavoriteProducts: (state, {payload}: PayloadAction<number[]>) => {
      if(state.user?.favourites)
      {
        state.user.favourites = payload;
      }
    }
  },
})

export const {
  setCredentials,
  logOut,
  setPassRecoveryToken,
  setNewFavoriteProducts
} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;