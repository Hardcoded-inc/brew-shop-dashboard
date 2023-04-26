import { useEffect, useRef, useState } from "react";
import processCommand from "../utils/commands";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [inputHistory, setInputHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    const terminal = document.getElementById("terminal-output-id");
    terminal.scrollTop = terminal.scrollHeight;
  }, [output]);

  useEffect(() => {
    inputRef.current.style.width =
      inputRef.current.value.length > 0
        ? inputRef.current.value.length + "ch"
        : "10px";
  }, [input]);

  const handleInputChange = (e) => setInput(e.target.value);
  const handleClickOnTerminal = () => inputRef.current.focus();

  const handleInputHistory = (direction) => {
    if (inputHistory.length > 0) {
      if (direction === "up") {
        if (historyIndex === -1) {
          setHistoryIndex(inputHistory.length - 1);
          setInput(inputHistory[inputHistory.length - 1]);
        } else if (historyIndex > 0) {
          setHistoryIndex(historyIndex - 1);
          setInput(inputHistory[historyIndex - 1]);
        }
      } else if (direction === "down") {
        if (historyIndex === -1) {
          setInput("");
        } else if (historyIndex < inputHistory.length - 1) {
          setHistoryIndex(historyIndex + 1);
          setInput(inputHistory[historyIndex + 1]);
        } else if (historyIndex === inputHistory.length - 1) {
          setHistoryIndex(-1);
          setInput("");
        }
      }
    }
  };

  const handleCommand = () => {
    processCommand(input, output, setOutput);
    setInputHistory([...inputHistory, input]);
    setHistoryIndex(-1);
    setInput("");
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span>root@Kali: terminal ~</span>
      </div>
      <div className="terminal-window" onClick={handleClickOnTerminal}>
        <div className="terminal-output" id="terminal-output-id">
          {output.map((item) => (
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
            value={input}
            ref={inputRef}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCommand();
              else if (e.key === "ArrowUp") {
                e.preventDefault();
                handleInputHistory("up");
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                handleInputHistory("down");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
