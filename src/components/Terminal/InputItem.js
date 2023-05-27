import React from "react";

const InputItem = (val) => (
  <div className="terminal-output__single">
    <pre className="terminal-output--green">
      <b>brewshop@user</b>:<span className="terminal-caret__span">~</span>$
    </pre>
    {val}
  </div>
);

export default InputItem;