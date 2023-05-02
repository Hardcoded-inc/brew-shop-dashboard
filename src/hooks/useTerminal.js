import { useSelector, useDispatch } from "react-redux";
import { pushRecord, reset } from "../redux/terminal";

const useTerminal = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.terminal);
  const addRecord = (record) => dispatch(pushRecord(record));
  const clear = () => dispatch(reset());

  const stdOut = (value) => addRecord({ value, type: "output" });
  const stdIn = (value) => addRecord({ value, type: "input" });

  return { records, clear, stdOut, stdIn };
};

export default useTerminal;
