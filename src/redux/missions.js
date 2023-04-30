import { createSlice } from "@reduxjs/toolkit";
import missions from "../data/missions.json";

const initialState = missions;

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    setUserAnswer: (state, { missionIndex, flagIndex, answer }) => {
      state.list[missionIndex].flags[flagIndex].user_answer = answer;
    },
    selectMission: (state, { payload }) => {
      state.selectedMission = payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

// TODO: Probably it would be nice to create some (useMissions) hook to easily access state

export const { setFlageDone, resetState } = missionsSlice.actions;
export default missionsSlice.reducer;
