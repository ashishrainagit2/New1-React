import React, {Component} from "react"; // --> OFF Redirect
/* eslint no-use-before-define: 0 */ import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import {connect} from "react-redux";
import ReactGA from "react-ga";

import CardListWrapper from "./containers/CardListWrapper/CardListWrapper";
import CounterExample from "./containers/CounterExample/CounterExample";
import MainPage from "./containers/MainPage/MainPage";
import Layout from "./hoc/Layout/Layout";
import ContactUs from "./containers/ContactUs/ContactUs";
import CounterByHook from "./components/CounterByHook/CounterByHook";
import Page404 from "./components/Errorpages/Page404/Page404";
import ApiByHook from "./components/ApiByHook/ApiByHook";
import ApiByHookFour from "./components/ApiByHookFour/ApiByHookFour";
import bootstrapExample from "./components/bootstrapExample/bootstrapExample";
import TestingExampleWrapper from "./components/TestingExampleWrapper/TestingExampleWrapper";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: " A simple website created using react reducer eco-system ",
    };
  }

  render() {
    const routes = (
      <Switch>
        <Route path="/counter" component={CounterExample} />
        <Route path="/api" component={CardListWrapper} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/counter-Hook" component={CounterByHook} />
        <Route path="/apibyhooks" component={ApiByHook} />
        <Route path="/apibyhooksFour" component={ApiByHookFour} />
        <Route path="/bootstrapExample" component={bootstrapExample} />
        <Route path="/TestingExampleWrapper" component={TestingExampleWrapper} />
        <Route path="/" exact component={MainPage} />
        <Route component={Page404} />
      </Switch>
    );
    return (
      <div>
        <Layout>
          <h2 className="App">{this.state.Text}</h2>
          {routes}
        </Layout>
      </div>
    );
  }
}

function initializeReactGA() {
  ReactGA.initialize("UA-125593276-2");
  ReactGA.pageview("/homepage");
}

export default withRouter(connect()(App));
