import MANUAL from "../data/manual";
import useTerminal from "./useTerminal";
import useMissions from "./useMissions";
import useFlag from "./useFlag";

const useCommand = () => {
  const { stdIn, stdOut, clear } = useTerminal();
  const { getMissions, selectMission, currentMission } = useMissions();
  const { checkFlag } = useFlag(currentMission);

  const handleHelp = () => stdOut(MANUAL);
  const handleClear = () => clear();
  const handleList = () => stdOut(getMissions());
  const handleSelect = (args) => {
    const id = parseInt(args[0]);
    if (isNaN(id)) return stdOut(`err: invalid arg\n  select [MISSION ID]`);
    stdOut(selectMission(id));
  };
  const handleFlag = (args) => {
    const value = args[0];
    if (!currentMission) return stdOut(`err: Select mission!`);
    if (!value) return stdOut(`err: missing arg\n  flag [FLAG VALUE]`);
    checkFlag(value);
  };

  // TODO: Implement those commands
  const commands = {
    help: handleHelp,
    list: handleList,
    select: handleSelect,
    status: (argsList) => "Status command output.",
    flag: handleFlag,
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
