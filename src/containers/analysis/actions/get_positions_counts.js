import { Actions } from "react-native-router-flux";

import {
  GET_POSITIONS_COUNTS_RECEIVED,
  GET_POSITIONS_COUNTS_REQUEST
} from "../action_types";
import { POSITIONS_COUNTS_ENDPOINT } from "../../../config/api";

export function getPositionsCounts(params, authHeaders) {
  return (dispatch) => {
    dispatch(getPositionsCountsRequest());
    return fetch(POSITIONS_COUNTS_ENDPOINT + params, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...authHeaders
      }
    })
      .then(response => response.json())
      .then(function(json){
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

