import React from "react";
import PropTypes from "prop-types";
import classes from "./Cards.module.css";

function Cards(props) {
  return (
    <div className={classes.wrapper}>
      {props.id ? <h2> Card Number :{props.id}</h2> : null}
      <div>
        {props.cname ? (
          <div>
            Company Name :<span className={classes.data}>{props.cname}</span>
          </div>
        ) : null}
        {props.phrase ? (
          <div>
            Catch Phrase :<span className={classes.data}>{props.phrase} </span>
          </div>
        ) : null}
      </div>
      <div>
        {props.name ? (
          <div>
            Name :<span className={classes.data}>{props.name}</span>
          </div>
        ) : null}
        {props.username ? (
          <div>
            UserName:
            <span className={classes.data}>{props.username}</span>
          </div>
        ) : null}
      </div>
      <div>
        {props.phone ? (
          <div>
            Phone :<span className={classes.data}>{props.phone}</span>
          </div>
        ) : null}
        {props.website ? (
          <div>
            Website:
            <span className={classes.data}>{props.website}</span>
          </div>
        ) : null}
        {props.city ? (
          <div>
            City:
            <span className={classes.data}>{props.city}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

Cards.propTypes = {
  cname: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default Cards;
