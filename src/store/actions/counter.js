import * as actionTypes from "./actionTypes";

export const incrementer = (params) => {
  return {
    type: actionTypes.INCREMENT,
    counter: params,
  };
};

export const incrementCounter = (params) => {
  const value = params + 1;
  return (dispatch) => {
    dispatch(incrementer(value));
  };
};
