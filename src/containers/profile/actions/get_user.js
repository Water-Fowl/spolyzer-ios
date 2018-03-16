import {
  GET_USER_RECEIVED,
  GET_USER_REQUEST
} from "../action_types";
import { USERS_ENDPOINT } from "../../../config/api";

export function getUser(authHeaders){
  return (dispatch) => {
    dispatch(getUserRequest());
    return fetch(USERS_ENDPOINT, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...authHeaders
      }
    })
      .then(response => response.json())
      .then((json) => {
        dispatch(getUserReceived(json.user.name, json.user.email));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function getUserRequest() {
  return {
    type: GET_USER_REQUEST
  };
}

export function getUserReceived(userName, userEmail) {
  return {
    type: GET_USER_RECEIVED,
    userName,
    userEmail
  };
}
