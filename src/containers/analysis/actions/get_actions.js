import { GET_ACTIONS_ENDPOIN } from "../../../config/api";
import {
  GET_ACTIONS_RECEIVED,
  GET_ACTIONS_REQUEST,
} from "../action_types";

export function getActions(informationBody){
  return (dispatch) => {
    dispatch(requestGetActions());
    return fetch(GET_ACTIONS_ENDPONT, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json".
      },
      body: JSON.stringify(informationBody)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedGetActions(json.actions)))
      .catch((error) => {
      });
  };
}


function requestGetActions(){
  return{
    type: GET_ACTIONS_REQUEST,
  }
}

function reveivedGetActions(actions){
  return {
    type: GET_ACTIONS_RECEIVED,
    actions: actions
  }
}
