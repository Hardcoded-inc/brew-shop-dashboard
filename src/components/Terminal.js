import { useEffect, useState, useRef } from "react";

import useHistory from "../hooks/useHistory";
import useCommand from "../hooks/useCommand";
import useTerminal from "../hooks/useTerminal";

import InputItem from "./Terminal/InputItem";
import OutputItem from "./Terminal/OutputItem";

const Terminal = () => {
  const [inputValue, setInputValue] = useState("");
  const { prevInput, nextInput, addToHistory } = useHistory();
  const { applyCommand } = useCommand();
  const { records } = useTerminal();
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    const terminal = document.getElementById("terminal-output-id");
    terminal.scrollTop = terminal.scrollHeight;
  };
  useEffect(scrollToBottom, [records]);

  // Handlers

  const handleClickOnTerminal = () => inputRef.current.focus();

  const handleChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputValue !== "") {
        addToHistory(inputValue);
        applyCommand(inputValue);
        setInputValue("");
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setInputValue(prevInput());
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setInputValue(nextInput());
    }
  };


  return (
    // TODO: Extract css from here
    <div className="terminal">
      <div className="terminal-header">
        <span>brewshop@user: terminal ~</span>
      </div>
      <div className="terminal-window" onClick={handleClickOnTerminal}>
        <div className="terminal-output" id="terminal-output-id">
          {records.map(({ value, type }) =>
            type === "input" ? InputItem(value) : OutputItem(value)
          )}
        </div>
        <div className="terminal-caret">
          <pre className="terminal-output--green">
            <b>brewshop@user</b>:<span className="terminal-caret__span">~</span>
            $
          </pre>
          <input
            className="terminal-input"
            type="text"
            value={inputValue}
            ref={inputRef}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
