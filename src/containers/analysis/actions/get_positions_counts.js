import { Actions } from "react-native-router-flux";

import { GET_POSITIONS_COUNTS_ENDPOINT } from "../../../config/api";
import {
  GET_POSITIONS_COUNTS_RECEIVED,
  GET_POSITIONS_COUNTS_REQUEST
} from "../action_types";

export function getPositionsCounts(params) {
  return (dispatch) => {
    dispatch(getPositionsCountsRequest());
    return fetch(GET_POSITIONS_COUNTS_ENDPOINT + "?" + params, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => dispatch(getPositionsCountsReceived()))
      .then(Actions.analysisView())
      .catch((error) => {
        console.log(error)
      });
  }
}

function getPositionsCountsRequest(){
  return{
    type: GET_POSITIONS_COUNTS_REQUEST,
  }
}

function getPositionsCountsReceived(){
  return{
    type: GET_POSITIONS_COUNTS_RECEIVED,
  }
}

