import React from "react";
import {connect} from "react-redux";
import * as actions from "./store/actions/index";
import CardList from "./components/CardList/CardList";
import Counter from "./components/Counter/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: " A simple react reducer app",
    };
  }
  // state = {
  //     Text : " A simple react reducer app"
  // }

  componentDidMount() {
    this.props.onSetUsers();
  }

  render() {
    return (
      <div>
        <h2>{this.state.Text}</h2>
        <Counter
          value={this.props.counterValue}
          clickHandler={() => this.props.onCounterIncrement(this.props.counterValue)}
        />
        <CardList list={this.props.usersList} />
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
    onSetUsers: () => dispatch(actions.setUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
