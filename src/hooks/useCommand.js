import useTerminal from "./useTerminal";

const useCommand = () => {
  const { addRecord, clear } = useTerminal();

  const handleClear = () => {
    addRecord({ value: "cleared", type: "output" });
    clear();
  };

  // TODO: Implement those commands
  const commands = {
    help: (argsList) => "Help command output.",
    list: (argsList) => "List command output.",
    select: (argsList) => "Select command output.",
    status: (argsList) => "Status command output.",
    flag: (argsList) => "List command output.",
    clear: handleClear,
  };

  const BAD_COMMAND =
    "Invalid command. Available commands: " + Object.keys(commands).join(", ");

  const applyCommand = (input) => {
    const [command, ...args] = input.split(" ");
    const name = command.toLowerCase();

    addRecord({ value: input, type: "input" });

    if (!Object.keys(commands).includes(name)) {
      addRecord({ value: BAD_COMMAND, type: "output" });
      return;
    }

    commands[name](args);
  };

  return { applyCommand };
};

export default useCommand;
