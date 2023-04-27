import { useEffect, useState, useReducer, useRef } from "react";
import {
  terminalReducer,
  ACTION_TYPES,
  initialState,
} from "../utils/terminalReducer";
import commandsHandler from "../utils/commandsHandler";

const Terminal = () => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(terminalReducer, initialState);
  const inputRef = useRef(null);

  useEffect(() => {
    const terminal = document.getElementById("terminal-output-id");
    terminal.scrollTop = terminal.scrollHeight;
  }, [state.output]);

  const handleClickOnTerminal = () => inputRef.current.focus();

  // const handleInput = (e) => {
  //   dispatch({
  //     type: ACTION_TYPES.SET_INPUT,
  //     payload: e.target.value,
  //   });
  // };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputHistory = (direction) => {
    if (state.inputHistory.length === 0) return;

    switch (direction) {
      case "up":
        if (state.historyIndex < state.inputHistory.length - 1) {
          dispatch({
            type: ACTION_TYPES.PREV_INPUT,
          });
        }
        break;

      case "down":
        if (state.historyIndex === 0) {
          dispatch({
            type: ACTION_TYPES.SET_INPUT,
            payload: "",
          });
        }

        if (state.historyIndex > 0) {
          dispatch({
            type: ACTION_TYPES.NEXT_INPUT,
          });
        }
        break;

      default:
        break;
    }
  };

  const handlePost = (e) => {
    if (inputRef.current.value === "") return;

    const output = commandsHandler(e.target.value);

    dispatch({
      type: ACTION_TYPES.SET_OUTPUT,
      payload: output,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handlePost(e);
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      handleInputHistory("up");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleInputHistory("down");
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
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
