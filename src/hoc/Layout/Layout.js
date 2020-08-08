import React, {Component} from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/Navigation/Navigation";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
