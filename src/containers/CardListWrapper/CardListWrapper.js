import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

import CardList from "../../components/CardList/CardList";

export class CardListWrapper extends Component {
  render() {
    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardListWrapper);
