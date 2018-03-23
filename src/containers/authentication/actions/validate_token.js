import { Actions } from "react-native-router-flux";

import * as actionType from "../action_type";
import { VALIDATE_TOKEN_ENDPOINT } from "../../../config/api";
import { getUser } from "../../profile/actions/get_user";

export function validateToken(authHeaders) {
  return (dispatch) => {
    dispatch(getValidTokenRequest());
    return fetch(VALIDATE_TOKEN_ENDPOINT, {
      method: "GET",
      headers: {
        ...authHeaders,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }).then(function(response){
      console.log(response)
      if(response.ok){
        dispatch(getValidTokenReceived(true))
        dispatch(getUser(authHeaders))
      }
      else{
        dispatch(getValidTokenReceived(false))
      }

    })
      .catch((error) => {
        console.log(error);
      });
  };
}

function getValidTokenRequest() {
  return {
    type: actionType.GET_VALIDATE_TOKEN_REQUEST
  };
}

function getValidTokenReceived(isValidToken) {
  return {
    type: actionType.GET_VALIDATE_TOKEN_RECEIVED,
    isValidToken
  };
}
