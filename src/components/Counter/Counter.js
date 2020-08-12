import React from "react";
import PropTypes from "prop-types";
import classes from "./Counter.module.css";

function Counter(props) {
  return (
    <div className={classes.Wrapper}>
      <p>Counter Example displaying full power or react, redux and react-router</p>
      <div>
        <p>
          Click Counter - {" "} {props.value}
        </p>
      </div>
      <div>
        <button onClick={props.counterIncrement} className={classes.custButton}> Increment </button>
        <button onClick={props.counterDecrement} className={classes.custButton}> Decrement </button>
        <button onClick={props.resetCounter} className={classes.custButton}> Reset </button>
        <br /> <br /> <hr />
          <div>
            <p>Example displaying default value set by prop-types</p>
          <p>{props.Staticvalue}</p>
          </div>
          <hr />
      </div>
    </div>
  );
}

Counter.defaultProps = {
  Staticvalue: 1000,
};

Counter.propTypes = {
  value: PropTypes.number,
  clickHandler: PropTypes.func,
};

export default Counter;
