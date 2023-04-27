import { useRef, useState } from "react";

const useHistory = () => {
  // using Ref, because it's independent from the re-render cycle
  const history = useRef([]);

  // Pointer always points to the current position in the history array
  const [pointer, setPointer] = useState(-1);

  const addToHistory = (input) => {
    history.current = [...history.current, input];
    setPointer(history.length);
  };

  const prevInput = () => {
    if (pointer > 0) setPointer((prev) => prev - 1);
    return history[pointer];
  };

  const nextInput = () => {
    if (pointer < history.length - 1) setPointer((prev) => prev + 1);
    return history[pointer];
  };

  return { prevInput, nextInput, addToHistory, log: history.current };
};

export default useHistory;
