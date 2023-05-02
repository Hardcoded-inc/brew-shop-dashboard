import { createSlice } from "@reduxjs/toolkit";
import missions from "../data/missions.json";

const initialState = missions;

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    acceptFlag: (state) => {
      const currentMission = state.list.find(
        ({ id }) => id === state.currentMissionId
      );
      currentMission.flags.find(({ done }) => !done).done = true;
    },
    selectMission: (state, { payload }) => {
      state.selectedMissionId = payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { acceptFlag, selectMission, reset } = missionsSlice.actions;
export default missionsSlice.reducer;
