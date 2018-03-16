import { Actions } from "react-native-router-flux";
import { CALL_API } from "redux-api-middleware";

import {
  POST_LOGIN_RECIEVED,
  POST_LOGIN_REQUEST,
  SET_TOKEN,
} from "../action_type";
import { SIGN_IN_ENDPOINT } from "../../../config/api";
import { getUserReceived } from "../../profile/actions/get_user";

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
      .then(function(response){
        dispatch(setToken(response.headers))
        return response.json()
      })
      .then(function(json){
        console.log(json)
        dispatch((getUserReceived(json.data.name, json.data.email)))
      })
      .then(() =>{
        Actions.tab()
      })
      .catch((error) => {
        console.log(error)
      });
  };
}

function requestLogin() {
  return {
    type: POST_LOGIN_REQUEST
  };
}

function receivedLogin(errors, userId) {
  if (errors == null) {
    return {
      type: POST_LOGIN_RECIEVED,
      isAuthenticated: true,
      error: false,
      userId
    };
  }
  return {
    type: LOGIN_RECIEVED,
    isAuthenticated: false,
    error: true
  };
}

function setToken(header){
  const token = header.get("access-token")
  return{
    type: SET_TOKEN,
    header:{
      "access-token": header.get("access-token"),
      "expiry": header.get("expiry"),
      "uid": header.get("uid"),
      "client": header.get("client"),
      "token-type": header.get("token-type")
    }
  }
}

