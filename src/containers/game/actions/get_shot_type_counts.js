import { Actions } from "react-native-router-flux";

import {
  GET_SHOT_TYPE_COUNTS_RECEIVED,
  GET_SHOT_TYPE_COUNTS_REQUEST
} from "../action_types";
import { SHOT_TYPE_COUNTS_ENDPOINT } from "../../../config/api";

export default function getShotTypeCounts(params, authHeaders) {
  return (dispatch) => {
    dispatch(getShotTypeCountsRequest());
    return fetch( SHOT_TYPE_COUNTS_ENDPOINT + `?id=${params}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...authHeaders
      }
    })
      .then(response => response.json())
      .then(function(json){
        console.log(json);
        dispatch(getShotTypeCountsReceived(json.counts));
      })
      .then(Actions.scoreView())
      .catch((error) => {
        console.log(error);
      });
  };
}

function getShotTypeCountsRequest() {
  return {
    type: GET_SHOT_TYPE_COUNTS_REQUEST
  };
}

function getShotTypeCountsReceived(counts) {
  return {
    type: GET_SHOT_TYPE_COUNTS_RECEIVED,
    shotTypeCounts: counts
  };
}
