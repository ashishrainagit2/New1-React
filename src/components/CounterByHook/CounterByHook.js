import React, {useState, useEffect} from "react";
import classes from "./ApiByHook.module.css";

function ApiByHook() {
  const [counter, counterIncrementer] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${counter} times!`;
  });

  return (
    <div>
      <p className={classes.center}>Hooked up API</p>
      <p onClick={() => counterIncrementer(counter + 1)}>Counter :{counter}</p>
    </div>
  );
}

export default ApiByHook;
