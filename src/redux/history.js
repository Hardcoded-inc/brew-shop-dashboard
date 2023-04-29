import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pointer: -1,
  list: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    changePointer: (state, { payload }) => {
      state.payload = payload;
    },
    pushToHistory: (state, { payload }) => {
      state.pointer = -1;
      state.list = [payload, ...state.list];
    },
  },
});

export const { changePointer, pushToHistory } = historySlice.actions;
export default historySlice.reducer;
