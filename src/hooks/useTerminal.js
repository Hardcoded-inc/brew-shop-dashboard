import { useSelector, useDispatch } from "react-redux";
import { pushRecord, reset } from "../redux/terminal";

const useTerminal = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.terminal);
  const addRecord = (record) => dispatch(pushRecord(record));
  const clear = () => dispatch(reset());

  // TODO: Refactor app to use stdOut and stdIn
  const stdOut = (value) => addRecord({ value, type: "output" });
  const stdIn = (value) => addRecord({ value, type: "input" });

  // addRecord is deprecated, use stdOut and stdIn instead
  return { records, addRecord, clear, stdOut, stdIn };
};

export default useTerminal;
