import React, {Component} from "react";
import ErrorBoundary from "../../hoc/ErrorBoundary";

export class ErrorComponent extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div>
          <div>broken div </div>
          {/* --no-verify  */}
        </div>
      </ErrorBoundary>
    );
  }
}

export default ErrorComponent;
