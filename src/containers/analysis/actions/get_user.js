import { Actions } from "react-native-router-flux";

import {
  GET_SEARCH_USER_RECEIVED,
  GET_SEARCH_USER_REQUEST
} from "../action_types";
import { SEARCH_USER_ENDPOINT } from "../../../config/api";

export default function getSearchUser(params) {
  return (dispatch) => {
    dispatch(getSearchUserRequest());
    return fetch( SEARCH_USER_ENDPOINT + params, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(function(json){
        console.log(json);
        dispatch(getSearchUserReceived(json.users));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function getSearchUserRequest() {
  return {
    type: GET_SEARCH_USER_REQUEST
  };
}

function getSearchUserReceived(users) {
  console.log(users);
  return {
    type: GET_SEARCH_USER_RECEIVED,
    users
  };
}