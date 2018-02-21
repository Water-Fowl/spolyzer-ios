import{ POST_USER_UPDATE_ENDPOINT } from "../../../config/api";
import {
  POST_USER_UPDATE_RECEIVED,
  POST_USER_UPDATE_REQUEST
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
