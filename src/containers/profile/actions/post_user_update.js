import {
  ActionConst,
  Actions
} from "react-native-router-flux";

import {
  RECEIVED_POST_USER_UPDATE,
  REQUEST_POST_USER_UPDATE
} from "../action_types";
import{ USERS_ENDPOINT } from "../../../config/api";
import {
  getUser
} from "./get_user";

export function postUserUpdate(body, params, authHeaders) {
  return (dispatch) => {
    dispatch(requestPostUserUpdate());
    return fetch(USERS_ENDPOINT + params.id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...authHeaders
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedPostUserUpdate(json.user.name, json.user.email, json.user.image.url)))
      .catch((error) => {
        console.log(error);
      });
  };
}

export function requestPostUserUpdate() {
  return{
    type: REQUEST_POST_USER_UPDATE
  };
}

export function receivedPostUserUpdate(name, email, image){
  return {
    type: RECEIVED_POST_USER_UPDATE,
    userName: name,
    userEmail: email,
    userImageSource: image,
  };
}
