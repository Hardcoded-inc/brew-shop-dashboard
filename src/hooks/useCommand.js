import useTerminal from "./useTerminal";

export const commands = {
  help: (argsList) => "Help command output.",
  list: (argsList) => "List command output.",
  select: (argsList) => "Select command output.",
  status: (argsList) => "Status command output.",
  flag: (argsList) => "Flag command output.",
};

const BAD_COMMAND =
  "Invalid command. Available commands: help, list, select, status, flag";

const useCommand = () => {
  const { addRecord } = useTerminal();

  const applyCommand = (input) => {
    const [command, ...args] = input.split(" ");
    const name = command.toLowerCase();

    if (!Object.keys(commands).includes(name)) {
      addRecord({ value: BAD_COMMAND, type: "output" });
      return;
    }

    const out = commands[name](args);
    addRecord({ value: out, type: "output" });
  };

  return { applyCommand };
};

export default useCommand;
