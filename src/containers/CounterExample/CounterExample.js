import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import Counter from "../../components/Counter/Counter";

export class CounterExample extends Component {
  render() {
    return (
      <div>
        <Counter
          value={this.props.counterValue}
          counterIncrement={() => this.props.onCounterIncrement(this.props.counterValue)}
          counterDecrement={() => this.props.onCounterDecrement(this.props.counterValue)}
          resetCounter={() => this.props.onResetCounter()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.counter.count,
    usersList: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCounterIncrement: (counter) => dispatch(actions.incrementCounter(counter)),
    onCounterDecrement: (counter) => dispatch(actions.decrementCounter(counter)),
    onResetCounter: () => dispatch(actions.resetCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterExample);
