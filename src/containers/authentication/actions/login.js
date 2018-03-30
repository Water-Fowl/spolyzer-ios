import { Actions } from "react-native-router-flux";
import { CALL_API } from "redux-api-middleware";

import {
  POST_LOGIN_RECIEVED,
  POST_LOGIN_REQUEST,
  SET_TOKEN
} from "../action_type";
import { SIGN_IN_ENDPOINT } from "../../../config/api";
import { getUserReceived } from "../../profile/actions/get_user";
import getShotTypes from "../../../reducer/sport/actions/get_shot_types";
import {
  Alert
} from "react-native";

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
      .then(async function(response){
        let json = await response.json();

        if(!response.ok){
          let messages = json.errors.join("\n");
          return new Promise((resolve) => {
            Alert.alert("エラー", messages, [{ text: "了解", onPress: () => { resolve(false); } }]);
          });
          return false;
        }
        dispatch(receivedLogin());
        dispatch(getUserReceived(json.data));

        const responseHeader = await response.headers;
        const header = responseToHeader(responseHeader);
        dispatch(setToken(header));

        return header;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function requestLogin() {
  return {
    type: POST_LOGIN_REQUEST
  };
}

function receivedLogin() {
  return {
    type: POST_LOGIN_RECIEVED,
    isAuthenticated: true
  };
}

function responseToHeader(responseHeader){
  const header = {
    "access-token": responseHeader.get("access-token"),
    "expiry": responseHeader.get("expiry"),
    "uid": responseHeader.get("uid"),
    "client": responseHeader.get("client"),
    "token-type": responseHeader.get("token-type")
  };
  return header;
}

function setToken(header){
  return{
    type: SET_TOKEN,
    header,
    isValidToken: true
  };
}

