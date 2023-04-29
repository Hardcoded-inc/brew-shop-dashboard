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
      return {
        ...state,
        pointer: payload,
      };
    },
    pushToHistory: (state, { payload }) => {
      return {
        pointer: -1,
        list: [payload, ...state.list],
      };
    },
  },
});

export const { changePointer, pushToHistory } = historySlice.actions;
export default historySlice.reducer;
