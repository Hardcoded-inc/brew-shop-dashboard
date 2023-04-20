import { useState } from "react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleOutputChange = (e) => {
    setOutput([...output, e.target.value]);
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span>root@Kali: terminal ~</span>
      </div>
      <div className="terminal-window">
        <div className="terminal-output">
          {output.map((item) => (
            <div className="terminal-output__single">
              <pre>
                <b>root@Kali</b>:
                <span className="terminal-carret__span">~</span>$
              </pre>
              {item}
            </div>
          ))}
        </div>
        <div className="terminal-carret">
          <pre>
            <b>root@Kali</b>:<span className="terminal-carret__span">~</span>$
          </pre>
          <input
            className="terminal-input"
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOutputChange(e);
                setInput("");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
