import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./redux/missions";
import terminalReducer from "./redux/terminal";

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    terminal: terminalReducer,
  },
});
