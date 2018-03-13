import { Actions } from "react-native-router-flux";

import {
  GET_POSITIONS_COUNTS_RECEIVED,
  GET_POSITIONS_COUNTS_REQUEST
} from "../action_types";
import { POSITIONS_COUNTS_ENDPOINT } from "../../../config/api";

export function getPositionsCounts(params) {
  return (dispatch) => {
    dispatch(getPositionsCountsRequest());
    return fetch(POSITIONS_COUNTS_ENDPOINT + params, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(function(json){
        console.log(json.counts);
        dispatch(getPositionsCountsReceived(json.counts));
      })
      .then(Actions.analysisView())
      .catch((error) => {
      });
  };
}

function getPositionsCountsRequest(){
  return{
    type: GET_POSITIONS_COUNTS_REQUEST
  };
}

function getPositionsCountsReceived(positionCounts){
  return{
    positionCounts,
    type: GET_POSITIONS_COUNTS_RECEIVED
  };
}

