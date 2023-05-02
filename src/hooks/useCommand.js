import useTerminal from "./useTerminal";

const useCommand = () => {
  const { stdIn, stdOut, clear } = useTerminal();

  const handleClear = () => {
    stdOut("cleared");
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

    stdIn(input);

    if (!Object.keys(commands).includes(name)) {
      stdOut(BAD_COMMAND);
      return;
    }

    commands[name](args);
  };

  return { applyCommand };
};

export default useCommand;
