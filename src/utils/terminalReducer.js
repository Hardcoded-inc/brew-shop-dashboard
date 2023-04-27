export const initialState = {
  input: "",
  output: [],
  inputHistory: [],
  historyIndex: -1,
};

export const ACTION_TYPES = {
  SET_INPUT: "SET_INPUT",
  SET_OUTPUT: "SET_OUTPUT",
  SET_INPUT_HISTORY: "SET_INPUT_HISTORY",
  SET_HISTORY_INDEX: "SET_HISTORY_INDEX",
  PREV_INPUT: "PREV_INPUT",
  NEXT_INPUT: "NEXT_INPUT",
};

export const terminalReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case ACTION_TYPES.SET_OUTPUT:
      return {
        ...state,
        output: [...state.output, action.payload],
        inputHistory: [action.payload, ...state.inputHistory],
        input: "",
      };
    case ACTION_TYPES.PREV_INPUT:
      return {
        ...state,
        input: state.inputHistory[state.historyIndex + 1],
        historyIndex: state.historyIndex + 1,
      };
    case ACTION_TYPES.NEXT_INPUT:
      return {
        ...state,
        input: state.inputHistory[state.historyIndex - 1],
        historyIndex: state.historyIndex - 1,
      };
    default:
      return state;
  }
};
