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
      });
  };
}

export function emailValidation(isEmail){
  return{
    type: EMAIL_VALIDATION,
    isEmail: isEmail
  };
}

function requestRegistration() {
  return {
    type: POST_REGISTRATION_REQUEST
  };
}

function receivedRegistration(errors) {
  if (errors == null) {
    Actions.tab();
    return {
      type: POST_REGISTRATION_RECEIVED,
      isAuthenticated: true,
      error: false
    };
  }

  return {
    type: POST_REGISTRATION_RECEIVED,
    isAuthenticated: false,
    error: true
  };
}
