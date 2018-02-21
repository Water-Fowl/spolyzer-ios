import { SEARCH_USER_ENDPOINT } from "../../../config/api";
import {
  SEARCH_USER_RECEIVED,
  SEARCH_USER_REQUEST
} from "../action_types";

export function getUserName(body) {
  return (dispatch) => {
    dispatch(requestUserName());
    return fetch(SEARCH_USER_ENDPOINT, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .catch((error) => {
      });
  };
}

function requestUserName() {
  return {
    type: SEARCH_USER_REQUEST
  };
}

function receivedUserName() {
  return {
    type: SEARCH_USER_RECEIVED
  };
}
