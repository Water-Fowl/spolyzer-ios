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
    console.log(body);
    return fetch(REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(function(response){
        console.log(response);
        return response.json();
      })
      .then(function(json){
        console.log(json);
        return json.data, json.errors;
      })
      .then(function(json_data, json_errors){
        console.log(json_data);
        dispatch(receivedRegistration(json_errors, json_data.id));
      })
      .catch((error) => {
        console.log(error);
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

function receivedRegistration(errors, userId) {
  if (errors == null) {
    Actions.tab();
    return {
      type: POST_REGISTRATION_RECEIVED,
      isAuthenticated: true,
      error: false,
      userId
    };
  }
  return {
    type: POST_REGISTRATION_RECEIVED,
    isAuthenticated: false,
    error: true
  };
}
