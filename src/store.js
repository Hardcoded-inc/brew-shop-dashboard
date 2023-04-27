import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./redux/missions";

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
