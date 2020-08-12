import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from '../../shared/utility';

const initialState = {
  count: 10,
};

const updateCounter = (state, action) => {
  return {
    count: action.counter,
  };
};

const resetCounter = (state, action) => {
  return {
    count: 10
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE:
      return updateCounter(state, action);
    case actionTypes.RESET:
      return resetCounter(state, action);
    default:
      return state;
  }
};

export default reducer;
