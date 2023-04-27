export const initialState = {
  //some initial state from missions.json
  test: "",
};

export const COMMANDS = {
  HELP: "HELP",
  LIST: "LIST",
  SELECT: "SELECT",
  STATUS: "STATUS",
  FLAG: "FLAG",
};

export const commandsReducer = (state, action) => {
  switch (action.type) {
    case COMMANDS.HELP:
      return {
        ...state,
        test: "HELP",
      };
    case COMMANDS.LIST:
      return {
        ...state,
        test: "LIST",
      };
    case COMMANDS.SELECT:
      return {
        ...state,
        test: "SELECT",
      };
    case COMMANDS.STATUS:
      return {
        ...state,
        test: "STATUS",
      };
    case COMMANDS.FLAG:
      return {
        ...state,
        test: "FLAG",
      };

    default:
      return state;
  }
};
