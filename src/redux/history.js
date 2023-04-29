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
      state.pointer = payload;
    },
    pushToHistory: (state, { payload }) => {
      state.pointer = -1;
      state.list = [payload, ...state.list];
    },
  },
});

export const { changePointer, pushToHistory, reset } = historySlice.actions;
export default historySlice.reducer;
