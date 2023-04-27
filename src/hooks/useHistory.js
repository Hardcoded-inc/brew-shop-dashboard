import { useState } from "react";
import useTerminal from "./useTerminal";

const useHistory = () => {
  const { addRecord } = useTerminal();

  // using Ref, because it's independent from the re-render cycle
  // const history = useRef([]);
  const [history, setHistory] = useState([]);

  // Pointer always points to the current position in the history array
  const [pointer, setPointer] = useState(-1);

  const addToHistory = (input) => {
    setHistory([...history, input]);
    setPointer(history.length);
    addRecord({ value: input, type: "input" });
  };

  const prevInput = () => {
    if (pointer > 0) setPointer((prev) => prev - 1);
    return history[pointer];
  };

  const nextInput = () => {
    if (pointer < history.length - 1) setPointer((prev) => prev + 1);
    return history[pointer];
  };

  return { prevInput, nextInput, addToHistory };
};

export default useHistory;
