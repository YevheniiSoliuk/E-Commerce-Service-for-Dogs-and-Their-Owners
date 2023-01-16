import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/User';

type stateType = {
  users: IUser[]
} 

const initialState = {
  users: []
} as stateType

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    
  },
})

export default usersSlice.reducer;