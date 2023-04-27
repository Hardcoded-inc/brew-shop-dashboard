import { createSlice } from "@reduxjs/toolkit";

// TODO: Get initial state from local storage
const initialState = {};

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    // TODO: Just write those reducers
    setStageDone: (state, { stageId }) => {
      // 1. Get mission
      // 2. Set stage "done" to true
    },
    resetState: (state) => {
      // Reset state from json
    },
  },
});

// TODO: Probably it would be nice to create some (useMissions) hook to easily access the state

export const { setStageDone, resetState } = missionsSlice.actions;
export default missionsSlice.reducer;
