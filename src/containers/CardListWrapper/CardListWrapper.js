import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import CardList from "../../components/CardList/CardList";
import classes from "./CardListWrapper.module.css";

export class CardListWrapper extends Component {

  componentDidMount() {
    this.props.onSetUsers();
  }
  
  render() {
    return (
      <div className={classes.CardListWrapper}>
        <CardList list={this.props.usersList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetUsers: () => dispatch(actions.setUsers()),
  };
};

export default connect(mapStateToProps , mapDispatchToProps)(CardListWrapper);
