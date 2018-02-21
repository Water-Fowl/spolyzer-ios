import{ POST_USER_UPDATE_ENDPOINT } from "../../../config/api";
import {
  RECEIVED_POST_USER_UPDATE,
  REQUEST_POST_USER_UPDATE
} from "../action_types";

export function postUserUpdate(body) {
  return (dispatch) => {
    dispatch(requestPostUserUpdate());
    return fetch(POST_USER_UPDATE_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedPostUserUpdate()))
      .catch((error) => {
      });
  };
}

export function requestPostUserUpdate() {
  return{
    type: REQUEST_POST_USER_UPDATE
  };
}

export function receivedPostUserUpdate(){
  return {
    type: RECEIVED_POST_USER_UPDATE
  };
}
