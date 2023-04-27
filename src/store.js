import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./features/missions";

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
