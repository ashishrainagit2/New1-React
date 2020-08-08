import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from '../../shared/utility';

const initialState = {
  count: 1,
};

const incrementCounter = (state, action) => {
  return {
    count: action.counter,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return incrementCounter(state, action);
    default:
      return state;
  }
};

export default reducer;
