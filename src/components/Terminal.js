import { useEffect, useState, useRef } from "react";

import useHistory from "../hooks/useHistory";
import useCommand from "../hooks/useCommand";
import useTerminal from "../hooks/useTerminal";

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

  // TODO: Those components should be extracted to separate files
  const outputItem = (val) => (
    <pre className="terminal-output__single">{val}</pre>
  );
  const inputItem = (val) => (
    <div className="terminal-output__single">
      <pre className="terminal-output--green">
        <b>brewshop@user</b>:<span className="terminal-caret__span">~</span>$
      </pre>
      {val}
    </div>
  );

  return (
    // TODO: Extract css from here
    <div className="terminal">
      <div className="terminal-header">
        <span>brewshop@user: terminal ~</span>
      </div>
      <div className="terminal-window" onClick={handleClickOnTerminal}>
        <div className="terminal-output" id="terminal-output-id">
          {records.map(({ value, type }) =>
            type === "input" ? inputItem(value) : outputItem(value)
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
