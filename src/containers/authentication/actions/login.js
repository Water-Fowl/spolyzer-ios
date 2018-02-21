import { Actions } from "react-native-router-flux";
import { CALL_API } from "redux-api-middleware";

import {
  POST_LOGIN_RECIEVED,
  POST_LOGIN_REQUEST
} from "../action_type";
import { SIGN_IN_ENDPOINT } from "../../../config/api";

export function postLogin(body) {
  return (dispatch) => {
    dispatch(requestLogin());
    return fetch(SIGN_IN_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedLogin(json.errors, json.user_id)))
      .catch((error) => {
        console.log(error.message);
      });
  };
}

function requestLogin() {
  return {
    type: POST_LOGIN_REQUEST
  };
}

function receivedLogin(errors, image, user_name, email_address) {
  if (errors == null) {
    Actions.tab();
    return {
      type: POST_LOGIN_RECIEVED,
      image: image,
      user_name: user_name,
      email_address: email_address,
      is_authenticated: true,
      error: false
    };
  }

  return {
    type: LOGIN_RECIEVED,
    is_authenticated: false,
    error: true
  };
}
