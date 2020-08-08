import React, {Component} from "react";
import {Route, Switch, withRouter, Redirect} from "react-router-dom"; /* eslint no-use-before-define: 0 */  // --> OFF
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import * as actions from "./store/actions/index";
// import CardList from './components/CardList/CardList';
// import Counter from './components/Counter/Counter';

import CardList from "./containers/CardListWrapper/CardListWrapper";
import CounterExample from "./containers/CounterExample/CounterExample";
import MainPage from "./containers/MainPage/MainPage";
import Layout from "./hoc/Layout/Layout";
import ContactUs from "./containers/ContactUs/ContactUs";
import Page404 from "./components/Errorpages/Page404/Page404";
import ApiByHook from "./components/ApiByHook/ApiByHook";
import ApiByHookTwo from "./components/ApiByHookTwo/ApiByHookTwo";
import ApiByHookThree from "./components/ApiByHookThree/ApiByHookThree";
import ApiByHookFour from "./components/ApiByHookFour/ApiByHookFour";
import bootstrapExample from "./components/bootstrapExample/bootstrapExample";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: " A simple react reducer app [App]",
    };
  }
  // state = {
  //     Text : " A simple react reducer app"
  // }

  componentDidMount() {
    this.props.onSetUsers();
  }

  render() {
    const routes = (
      <Switch>
        <Route path="/counter" component={CounterExample} />
        <Route path="/api" component={CardList} />
        <Route path="/contactus" component={ContactUs} />
        {/* <Route path="/error" component={Page404} /> */}
        <Route path="/apibyhooks" component={ApiByHook} />
        <Route path="/apibyhooksTwo" component={ApiByHookTwo} />
        <Route path="/apibyhooksThree" component={ApiByHookThree} />
        <Route path="/apibyhooksFour" component={ApiByHookFour} />
        <Route path="/bootstrapExample" component={bootstrapExample} />
        <Route path="/" exact component={MainPage} />
        {/* <Redirect to='/error' /> */}
        {/* <Route path='/'  component={Page404} /> */}
        <Route component={Page404} />
      </Switch>
    );
    return (
      <div>
        <Layout>
          <h2>{this.state.Text}</h2>
          {routes}
        </Layout>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
