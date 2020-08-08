import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: [],
};

const setUsers = (state, action) => {
  return {
    users: action.users,
  };
};

const setUsersFailed = () => {
  console.log("setusersFailed");
};

const reducer = (state = initialState, action) => {
  console.log("reducer in users");
  switch (action.type) {
    case actionTypes.SET_USERS:
      return setUsers(state, action);
    case actionTypes.SET_USERS_FAILED:
      return setUsersFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
