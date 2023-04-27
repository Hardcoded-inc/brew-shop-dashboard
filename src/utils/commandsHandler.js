import { useReducer } from "react";
import { commandsReducer, COMMANDS, initialState } from "./commandsReducer";

const commandsHandler = (input) => {
  const [state, dispatch] = useReducer(commandsReducer, initialState);
  const [command, ...args] = input.split(" ");
  command = toUpperCase(command);

  if (COMMANDS.command) {
    dispatch({
      type: COMMANDS.command,
      payload: args,
    });
    return state;
  } else {
    return "Invalid command. Available commands: help, list, select, status, flag";
  }
};

export default commandsHandler;
