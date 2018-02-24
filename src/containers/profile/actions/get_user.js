import {
  GET_USER_RECEIVED,
  GET_USER_REQUEST
} from "../action_types";
import { USER_ENDPOINT } from "../../../config/api";

export function getUser(params){
  return (dispatch) => {
    dispatch(getUserRequest());
    return fetch(USER_ENDPOINT + params, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => dispatch(getUserReceived(json.user.name, json.user.email)))
      .catch((error) => {
      });
  };
}

function getUserRequest() {
  return {
    type: GET_USER_REQUEST
  };
}

function getUserReceived(userName, userEmail) {
  return {
    type: GET_USER_RECEIVED,
    userName,
    userEmail
  };
}
