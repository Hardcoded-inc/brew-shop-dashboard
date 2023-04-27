import { useState } from "react";

export const commands = {
  help: (argsList) => {},
  list: (argsList) => {},
  select: (argsList) => {},
  status: (argsList) => {},
  flag: (argsList) => {},
};

const BAD_COMMAND =
  "Invalid command. Available commands: help, list, select, status, flag";

const useCommand = () => {
  const [output, setOutput] = useState("");

  const applyCommand = (input) => {
    const [command, ...args] = input.split(" ");
    const name = toLowerCase(command);

    if (!Object.keys(commands).includes(name)) {
      setOutput(BAD_COMMAND);
      return;
    }

    const out = commands[name](args);
    setOutput(out);
  };

  return { applyCommand, output };
};

export default useCommand;
