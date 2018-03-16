import {
  GET_SHOT_TYPES_RECEIVED,
  GET_SHOT_TYPES_REQUEST
} from "../action_types";
import { SHOT_TYPES_ENDPOINT } from "../../../config/api";

export default function getShotTypes(params, authHeaders) {
  return (dispatch) => {
    dispatch(getShotTypesRequest());
    return fetch( SHOT_TYPES_ENDPOINT + "?sport_id=" +  params, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...authHeaders
      }
    })
      .then(response => response.json())
      .then(function(json){
        dispatch(getShotTypesReceived(json.shot_types));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function getShotTypesRequest() {
  return {
    type: GET_SHOT_TYPES_REQUEST
  };
}

function getShotTypesReceived(shotTypes) {
  return {
    type: GET_SHOT_TYPES_RECEIVED,
    shotTypes
  };
}
