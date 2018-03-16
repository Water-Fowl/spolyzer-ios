import { Actions } from "react-native-router-flux";

import {
  EMAIL_VALIDATION,
  POST_REGISTRATION_RECEIVED,
  POST_REGISTRATION_REQUEST,
  SET_TOKEN
} from "../action_type";
import { REGISTRATION_ENDPOINT } from "../../../config/api";

export function postRegistration(body) {
  return (dispatch) => {
    dispatch(requestRegistration());
    return fetch(REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(function(response){
        dispatch(setToken(response.headers))
        return response.json()
      })
      .then(function(json){
        console.log(json)
        dispatch(receivedRegistration(json.user.uid));
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

function setToken(header){
  console.log(header)
  return{
    type: SET_TOKEN,
    ...headers
  }
}
