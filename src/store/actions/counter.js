import * as actionTypes from "./actionTypes";

export const incrementer = (params) => {
  return {
    type: actionTypes.UPDATE,
    counter: params,
  };
};

export const incrementCounter = (params) => {
  const value = params + 1;
  return (dispatch) => {
    dispatch(incrementer(value));
  };
};

export const decrementCounter = (params) => {
  const value = params - 1;
  return (dispatch) => {
    dispatch(incrementer(value));
  };
};

export const resetCounter = (params) => {
  return {
    type: actionTypes.RESET,
    counter: 10
  }
};
