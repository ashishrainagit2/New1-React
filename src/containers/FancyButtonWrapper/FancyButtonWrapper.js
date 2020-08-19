import React, {Component} from "react";
import FancyButton from "../../components/FancyButton/FancyButton";

export class FancyButtonWrapper extends Component {
  constructor(props) {
    super(props);
    this.ButtonInput = React.createRef();
  }

  componentDidMount() {
    this.ButtonInput.current.click();
  }

  render() {
    return (
      <div>
        <p>This is fancy button wrapper!</p>
        <FancyButton ref={this.ButtonInput}>Click Me !</FancyButton>
      </div>
    );
  }
}

export default FancyButtonWrapper;
