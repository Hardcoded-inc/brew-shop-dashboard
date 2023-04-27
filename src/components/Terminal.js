import { useEffect, useState, useRef } from "react";

import useHistory from "../hooks/useHistory";
import useCommand from "../hooks/useCommand";

const Terminal = () => {
  const [inputValue, setInputValue] = useState("");
  const { prevInput, nextInput, addToHistory } = useHistory();
  const [applyCommand, output] = useCommand();
  const inputRef = useRef(null);

  useEffect(() => {
    const terminal = document.getElementById("terminal-output-id");
    terminal.scrollTop = terminal.scrollHeight;
  }, [state.output]);

  const handleChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      applyCommand(inputValue);
      addToHistory(inputValue);
    }
    if (e.key === "ArrowUp") {
      // e.preventDefault();
      setInputValue(prevInput());
    }
    if (e.key === "ArrowDown") {
      // e.preventDefault();
      setInputValue(nextInput());
    }
  };

  return (
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
          {state.output.map((item) => (
            <div className="terminal-output__single">
              <pre>
                <b>root@Kali</b>:<span className="terminal-caret__span">~</span>
                $
              </pre>
              {item}
            </div>
          ))}
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
