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
        return response.json();
      })
      .then(function(json){
        dispatch(receivedRegistration());
      })
      .then(function(json){
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

function receivedRegistration() {
  Actions.login();
  return {
    type: POST_REGISTRATION_RECEIVED,
    error: false,
  };
}

function setToken(header){
  return{
    type: SET_TOKEN,
    ...headers
  };
}
