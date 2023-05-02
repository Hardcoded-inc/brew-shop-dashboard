import useTerminal from "./useTerminal";
import MANUAL from "../data/manual";
import useMissions from "./useMissions";

const useCommand = () => {
  const { stdIn, stdOut, clear } = useTerminal();
  const { getMissions, selectMission } = useMissions();

  const handleHelp = () => stdOut(MANUAL);
  const handleClear = () => clear();
  const handleList = () => stdOut(getMissions());
  const handleSelect = (args) => {
    const id = parseInt(args[0]);
    if (isNaN(id)) return stdOut(`err: invalid arg\n  select [MISSION ID]`);
    stdOut(selectMission(id));
  };

  // TODO: Implement those commands
  const commands = {
    help: handleHelp,
    list: handleList,
    select: handleSelect,
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
