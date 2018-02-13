import { Actions } from "react-native-router-flux";
import { REGISTRATION_ENDPOINT } from "../../../config/api";
import {
  REGISTRATION_RECEIVED,
  REGISTRATION_REQUEST,
  EMAIL_VALIDATION,
} from "../action_type";


export function postUserRegistration(body) {
  return (dispatch) => {
    dispatch(requestRegistration());
    return fetch(REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
    type: REGISTRATION_REQUEST,
  };
}

function receivedRegistration(errors) {
  if (errors == null) {
    Actions.tab();
    return {
      type: REGISTRATION_RECEIVED,
      is_authenticated: true,
      error: false,
    };
  }

  return {
    type: REGISTRATION_RECEIVED,
    is_authenticated: false,
    error: true,
  };
}
