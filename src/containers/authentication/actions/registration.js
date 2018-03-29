import { Actions } from "react-native-router-flux";

import {
  EMAIL_VALIDATION,
  POST_REGISTRATION_RECEIVED,
  POST_REGISTRATION_REQUEST,
  SET_TOKEN
} from "../action_type";
import { REGISTRATION_ENDPOINT } from "../../../config/api";
import {
  Alert
} from "react-native";

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
      .then(async function(response){
        dispatch(receivedRegistration(response.ok))
        if(response.ok){
          Actions.confirmation();
        }
        else{
          let json = await response.json()
          let messages = json.errors.full_messages.join("\n")
          return new Promise((resolve) => {
            Alert.alert("エラー", messages, [{ text: "了解", onPress: () => { resolve(false) } }])
          })
        }
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

function receivedRegistration(response_ok) {
  return {
    type: POST_REGISTRATION_RECEIVED,
    error: response_ok
  };
}

function setToken(header){
  return{
    type: SET_TOKEN,
    ...headers
  };
}
