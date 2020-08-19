import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton" onClick={console.log("Someone clicked me!")}>
    {props.children}
  </button>
));

export default FancyButton;
