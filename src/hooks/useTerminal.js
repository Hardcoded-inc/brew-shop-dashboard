import { useSelector, useDispatch } from "react-redux";
import { pushRecord, reset } from "../redux/terminal";

const useTerminal = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.terminal);
  const addRecord = (record) => dispatch(pushRecord(record));
  const clear = () => dispatch(reset());

  return { records, addRecord, clear };
};

export default useTerminal;
