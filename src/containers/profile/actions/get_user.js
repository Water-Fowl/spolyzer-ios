import { GET_USER_ENDPOINT } from "../../../config/api";
import {
  RECEIVED_GET_USER,
  REQUEST_GET_USER
} from "../action_types";

export function getUser(body){
  return (dispatch) => {
    dispatch(requestGetUser());
    return fetch(GET_USER_ENDPOINT, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedGetUser()))
      .catch((error) => {
      });
  };
}

export function requestGetUser() {
  return {
    type: REQUEST_GET_USER
  };
}

export function receivedGetUser(userName, emailAddress, image) {
  return {
    type: RECEIVED_GET_USER,
    userName,
    emailAddress,
    image
  };
}
