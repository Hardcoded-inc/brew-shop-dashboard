import useTerminal from "./useTerminal";

export const commands = {
  help: (argsList) => "Help output.",
  list: (argsList) => "Hist output.",
  select: (argsList) => "seHect output.",
  status: (argsList) => "stHtus output.",
  flag: (argsList) => "Hlag output.",
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
