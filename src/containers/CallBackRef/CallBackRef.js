import React, {Component} from "react";

class CallBackRef extends React.Component {
  constructor(props) {
    console.log("1. Constructor ");
    super(props);

    this.textInput = null;

    this.setTextInputRef = (element) => {
      console.log("2. Constructor ");
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      console.log("4. Constructor ");
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    console.log("3. Constructor ");
    // autofocus the input on mount
    this.focusTextInput();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input!!"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CallBackRef;
