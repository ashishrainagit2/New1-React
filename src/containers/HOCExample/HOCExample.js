import React, {Component} from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export class HOCExample extends Component {
  render() {
    return (
      <div>
        <ClickCounter name="abc" />
        <HoverCounter />
      </div>
    );
  }
}

export default HOCExample;
