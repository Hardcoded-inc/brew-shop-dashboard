import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const terminalSlice = createSlice({
  name: "terminal",
  initialState,
  reducers: {
    pushRecord: (state, { payload }) => {
      return [...state, payload];
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { pushRecord, reset } = terminalSlice.actions;
export default terminalSlice.reducer;
