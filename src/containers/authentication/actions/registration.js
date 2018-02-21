import { Actions } from "react-native-router-flux";

import {
  EMAIL_VALIDATION,
  POST_REGISTRATION_RECEIVED,
  POST_REGISTRATION_REQUEST
} from "../action_type";
import { REGISTRATION_ENDPOINT } from "../../../config/api";

export function postRegistration(body) {
  return (dispatch) => {
    dispatch(requestRegistration());
    return fetch(REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => json.errors)
      .then(errors => dispatch(receivedRegistration(errors)))
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function emailValidation(is_email){
  return{
    type: EMAIL_VALIDATION,
    is_email: is_email
  };
}

function requestRegistration() {
  return {
    type: POST_REGISTRATION_REQUEST
  };
}

function receivedRegistration(errors, user_id) {
  if (errors == null) {
    Actions.tab();
    return {
      type: POST_REGISTRATION_RECEIVED,
      is_authenticated: true,
      error: false,
      user_id
    };
  }

  return {
    type: POST_REGISTRATION_RECEIVED,
    is_authenticated: false,
    error: true
  };
}
