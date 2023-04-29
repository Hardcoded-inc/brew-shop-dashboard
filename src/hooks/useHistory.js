import { useSelector, useDispatch } from "react-redux";
import { changePointer, pushToHistory } from "../redux/history";

const useHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.list);
  const pointer = useSelector((state) => state.history.pointer);

  const addToHistory = (input) => dispatch(pushToHistory(input));
  const savePointer = (pointer) => dispatch(changePointer(pointer));

  const prevInput = () => {
    if (pointer < history.length) savePointer(pointer + 1);
    return history[pointer];
  };

  const nextInput = () => {
    if (pointer > 0) savePointer(pointer - 1);
    return ["", ...history][pointer];
  };

  return { prevInput, nextInput, addToHistory };
};

export default useHistory;
