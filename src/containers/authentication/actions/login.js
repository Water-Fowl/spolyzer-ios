import { Actions } from "react-native-router-flux";
import { CALL_API } from "redux-api-middleware";

import {
  POST_LOGIN_RECIEVED,
  POST_LOGIN_REQUEST,
  SET_TOKEN
} from "../action_type";
import { SIGN_IN_ENDPOINT } from "../../../config/api";
import { getUser } from "../../profile/actions/get_user";

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
        dispatch(receivedLogin(json.errors, json.user_id))
        dispatch(getUser(json.user_id))
      })
      .catch((error) => {
      });
  };
}

function requestLogin() {
  return {
    type: POST_LOGIN_REQUEST
  };
}

function receivedLogin(errors, image, userName, emailAddress) {
  if (errors == null) {
    Actions.tab();
    return {
      type: POST_LOGIN_RECIEVED,
      isAuthenticated: true,
      image: image,
      userName: userName,
      emailAddress: emailAddress,
      error: false
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
    token
  }
}
