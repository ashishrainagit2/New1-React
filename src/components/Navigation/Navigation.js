import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <div>
      <ul className={classes.NavigationBar}>
        <li className={classes.NavigationItem}>
          <NavLink exact activeClassName={classes.active} to="/">
            HOME
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink exact activeClassName={classes.active} to="/counter">
            COUNTER
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName={classes.active} to="/api">
            API
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName={classes.active} to="/contactus">
            CONTACT-US
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName={classes.active} to="/bootstrapExample">
            BOOTSTRAP
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName="active" to="/counter-Hook">
            COUNTER-BY-HOOK
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName="active" to="/apibyhooksFour">
            API-BY-CUSTOM-HOOKS
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName="active" to="/testingExampleWrapper">
            TESTING-DEMO
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
