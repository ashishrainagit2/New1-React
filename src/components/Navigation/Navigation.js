import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <div>
      <ul className={classes.NavigationBar}>
        <li className={classes.NavigationItem}>
          <NavLink exact activeClassName="active" to="/">
            HOME
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName="active" to="/api">
            API
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName="active" to="/counter">
            COUNTER
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName="active" to="/contactus">
            CONTACT-US
          </NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink activeClassName="active" to="/bootstrapExample">
            BOOTSTRAP
          </NavLink>
        </li>
        {/* <li className={classes.NavigationItem}>
                    <NavLink activeClassName="active" to="/apibyhooks">
                        API-BY-HOOKS
                    </NavLink>
                </li>
                <li className={classes.NavigationItem}>
                    <NavLink activeClassName="active" to="/apibyhooksTwo">
                        API-BY-HOOKS-TWO
                    </NavLink>
                </li>
                <li className={classes.NavigationItem}>
                    <NavLink activeClassName="active" to="/apibyhooksThree">
                        API-BY-HOOKS-THREE
                    </NavLink>
                </li> */}
        <li className={classes.NavigationItem}>
          <NavLink activeClassName="active" to="/apibyhooksFour">
            API-BY-CUSTOM-HOOKS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
