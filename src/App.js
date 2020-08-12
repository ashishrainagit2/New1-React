import React, {Component} from "react";
/* eslint no-use-before-define: 0 */  // --> OFF Redirect
import {Route, Switch, withRouter} from "react-router-dom"; 
import {connect} from "react-redux";

import CardListWrapper from "./containers/CardListWrapper/CardListWrapper";
import CounterExample from "./containers/CounterExample/CounterExample";
import MainPage from "./containers/MainPage/MainPage";
import Layout from "./hoc/Layout/Layout";
import ContactUs from "./containers/ContactUs/ContactUs";
import CounterByHook from "./components/CounterByHook/CounterByHook";
import Page404 from "./components/Errorpages/Page404/Page404";
import ApiByHook from "./components/ApiByHook/ApiByHook";
import ApiByHookTwo from "./components/ApiByHookTwo/ApiByHookTwo";
import ApiByHookThree from "./components/ApiByHookThree/ApiByHookThree";
import ApiByHookFour from "./components/ApiByHookFour/ApiByHookFour";
import bootstrapExample from "./components/bootstrapExample/bootstrapExample";
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
        {/* <Route path="/error" component={Page404} /> */}
        CounterByHook
        <Route path="/counter-Hook" component={CounterByHook} />
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
          <h2 className="App">{this.state.Text}</h2>
          {routes}
        </Layout>
      </div>
    );
  }
}



export default withRouter(connect()(App));
