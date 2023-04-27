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

  useEffect(scrollToBottom, [records]);
  const scrollToBottom = () => {
    const terminal = document.getElementById("terminal-output-id");
    terminal.scrollTop = terminal.scrollHeight;
  };

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
      setInputValue(prevInput());
    }
    if (e.key === "ArrowDown") {
      setInputValue(nextInput());
    }
  };

  // TODO: Those components should be extracted to separate files
  const outputItem = (val) => (
    <div className="terminal-output__single">{val}</div>
  );
  const inputItem = (val) => (
    <div className="terminal-output__single">
      <pre>
        <b>root@Kali</b>:<span className="terminal-caret__span">~</span>$
      </pre>
      {val}
    </div>
  );

  return (
    // TODO: Extract css from here
    <div
      className="terminal"
      style={{
        border:
          document.activeElement === inputRef.current
            ? "2px solid #ffffff"
            : "2px solid #020202",
      }}
    >
      <div className="terminal-header">
        <span>root@Kali: terminal ~</span>
      </div>
      <div className="terminal-window" onClick={handleClickOnTerminal}>
        <div className="terminal-output" id="terminal-output-id">
          <pre>$</pre>
          {records.map(({ value, type }) =>
            type === "input" ? inputItem(value) : outputItem(value)
          )}
        </div>
        <div className="terminal-caret">
          <pre>
            <b>root@Kali</b>:<span className="terminal-caret__span">~</span>$
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
