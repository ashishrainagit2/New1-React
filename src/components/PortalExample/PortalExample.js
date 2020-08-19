import React from "react";
import ReactDOM from "react-dom";

function PortalExample() {
  return ReactDOM.createPortal(
    <div>
      <h2>Portals Demo</h2>
    </div>,
    document.getElementById("portal-root")
  );
}

export default PortalExample;
