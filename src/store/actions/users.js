import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setUserDetails = (users) => {
  return {
    type: actionTypes.SET_USERS,
    users,
  };
};

export const setUserDetailsFailed = (users) => {
  return {
    type: actionTypes.SET_USERS_FAILED,
  };
};

export const setUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(setUserDetails(response.data));
      })
      .catch((error) => {
        dispatch(setUserDetailsFailed());
      });
  };
};
