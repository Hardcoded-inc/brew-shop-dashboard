import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./redux/missions";
import terminalReducer from "./redux/terminal";
import historyReducer from "./redux/history";
import { loadFromLocalStorage, saveToLocalStorage } from "./utils/localStorage";

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    terminal: terminalReducer,
    history: historyReducer,
  },
  // preloadedState: loadFromLocalStorage(),
});

// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
