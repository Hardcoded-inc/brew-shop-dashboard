import { createSlice } from "@reduxjs/toolkit";
import missions from "../data/missions.json";

const initialState = missions;

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    acceptFlag: (state) => {
      const currentMission = state.list.find(
        ({ id }) => id === state.selectedMissionId
      );
      currentMission.flags.find(({ done }) => !done).done = true;
    },
    setMissionId: (state, { payload }) => {
      state.selectedMissionId = payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { acceptFlag, setMissionId, reset } = missionsSlice.actions;
export default missionsSlice.reducer;
