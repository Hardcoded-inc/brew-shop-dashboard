import { createSlice } from "@reduxjs/toolkit";
import { STARTING_SEQUENCE as value } from "../data/texts";

const initialState = [{ value, type: "output" }];

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
