import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./redux/missions";
import terminalReducer from "./redux/terminal";
import historyReducer from "./redux/history";
import useLocalStorage from "./hooks/useLocalStorage";

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    terminal: terminalReducer,
    history: historyReducer,
  },
  preloadedState: useLocalStorage("load"),
});

store.subscribe(() => useLocalStorage("save", store.getState()));

export default store;
