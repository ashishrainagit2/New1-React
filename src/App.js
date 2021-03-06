import React, {Component} from "react"; // --> OFF Redirect
/* eslint no-use-before-define: 0 */ import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import {connect} from "react-redux";
import ReactGA from "react-ga";

import CardListWrapper from "./containers/CardListWrapper/CardListWrapper";
// import CounterExample from "./containers/CounterExample/CounterExample";

import MainPage from "./containers/MainPage/MainPage";
import Layout from "./hoc/Layout/Layout";
import ContactUs from "./containers/ContactUs/ContactUs";
import CounterByHook from "./components/CounterByHook/CounterByHook";
import Page404 from "./components/Errorpages/Page404/Page404";
import ApiByHook from "./components/ApiByHook/ApiByHook";
import ApiByHookFour from "./components/ApiByHookFour/ApiByHookFour";
import bootstrapExample from "./components/bootstrapExample/bootstrapExample";
import TestingExampleWrapper from "./components/TestingExampleWrapper/TestingExampleWrapper";
import ErrorComponent from "./containers/ErrorComponent/ErrorComponent";
import RenderPropsCounter from "./containers/RenderPropsExample/RenderPropsExample";
import HOCExample from "./containers/HOCExample/HOCExample";
import CallBackRef from "./containers/CallBackRef/CallBackRef";
import FancybuttonWrapper from "./containers/FancyButtonWrapper/FancyButtonWrapper";
import PortalsExample from "./components/PortalExample/PortalExample";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterExample = React.lazy(() =>
  import("./containers/CounterExample/CounterExample")
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: " A simple website created using react reducer eco-system: v18.8.v3 ",
    };
  }

  render() {
    const routes = (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/counter" component={CounterExample} />
          <Route path="/api" component={CardListWrapper} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/counter-Hook" component={CounterByHook} />
          <Route path="/apibyhooks" component={ApiByHook} />
          <Route path="/apibyhooksFour" component={ApiByHookFour} />
          <Route path="/bootstrapExample" component={bootstrapExample} />
          <Route path="/TestingExampleWrapper" component={TestingExampleWrapper} />
          <Route path="/Error" component={ErrorComponent} />
          <Route path="/RenderProps" component={RenderPropsCounter} />
          <Route path="/hocexample" component={HOCExample} />
          <Route path="/callbackref" component={CallBackRef} />
          <Route path="/FancybuttonWrapper" component={FancybuttonWrapper} />
          <Route path="/PortalsExample" component={PortalsExample} />
          <Route path="/" exact component={MainPage} />
          <Route component={Page404} />
        </Switch>
      </React.Suspense>
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

ReactGA.initialize("UA-125593276-2");
ReactGA.pageview(window.location.pathname + window.location.search);

export default withRouter(connect()(App));
