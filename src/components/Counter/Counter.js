import React from "react";
import PropTypes from "prop-types";

function Counter(props) {
  return (
    <div>
      <div>
        <p>
          {" "}
          Click Counter
          {props.value}{" "}
        </p>
      </div>
      <div>
        <button onClick={props.clickHandler}> Click me </button>
      </div>
    </div>
  );
}

Counter.defaultProps = {
  value: 100,
};

Counter.propTypes = {
  value: PropTypes.number,
  clickHandler: PropTypes.func,
};

export default Counter;
