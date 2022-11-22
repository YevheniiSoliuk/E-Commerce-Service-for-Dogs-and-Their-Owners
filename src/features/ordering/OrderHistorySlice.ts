import {createSlice} from "@reduxjs/toolkit";

export type ordersHistoryState = {
  settingsSection: string
}

const initialState: ordersHistoryState = {
  settingsSection: "user"
}

const ordersHistorySlice = createSlice({
  name: "ordersHistory",
  initialState,
  reducers: {
    changeSettingsSection(state, action) {
      state.settingsSection = action.payload;
    }
  }
});

export const {
  changeSettingsSection,
} = ordersHistorySlice.actions;

export default ordersHistorySlice.reducer;