import { createSlice } from "@reduxjs/toolkit";
import missions from "../data/missions.json";

const initialState = missions;

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    setFlagTrue: (state, { missionIndex, flagIndex, answer }) => {
      const pickedFlag = state.list[missionIndex].flags[flagIndex];
      pickedFlag.user_answer = answer;
      pickedFlag.isValid = true;
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

export const { setFlagTrue, selectMission, reset } = missionsSlice.actions;
export default missionsSlice.reducer;
