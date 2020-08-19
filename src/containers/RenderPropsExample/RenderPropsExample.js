import React, {Component} from "react";
import RenderPropsCommon from "./RenderPropsCommon";
import RenderPropsExampleTwo from "./RenderPropsExampleTwo";
import RenderPropsExampleThree from "./RenderPropsExampleThree";

export class RenderPropsExample extends Component {
  render() {
    return (
      <div>
        <p>Render Props Demo</p>

        <RenderPropsCommon
          render={(count, incrementCount) => (
            <RenderPropsExampleTwo
              count={count}
              incrementCount={incrementCount}
            ></RenderPropsExampleTwo>
          )}
        ></RenderPropsCommon>

        <RenderPropsCommon
          render={(count, incrementCount) => (
            <RenderPropsExampleThree
              count={count}
              incrementCount={incrementCount}
            ></RenderPropsExampleThree>
          )}
        ></RenderPropsCommon>
      </div>
    );
  }
}

export default RenderPropsExample;
