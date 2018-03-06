import {
  ActionConst,
  Actions
} from "react-native-router-flux";

import {
  RECEIVED_POST_USER_UPDATE,
  REQUEST_POST_USER_UPDATE
} from "../action_types";
import{ USER_ENDPOINT } from "../../../config/api";
import {
  getUser
} from "./get_user";

export function postUserUpdate(body, params) {
  return (dispatch) => {
    console.log(body);
    dispatch(requestPostUserUpdate());
    return fetch(USER_ENDPOINT + params.id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedPostUserUpdate(json.user.name, json.user.email)))
      .then(Actions.profileTop({ type: ActionConst.BACK_ACTION }))
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

export function receivedPostUserUpdate(name, email){
  console.log(name);
  console.log(email);
  return {
    type: RECEIVED_POST_USER_UPDATE,
    userName: name,
    userEmail: email
  };
}
