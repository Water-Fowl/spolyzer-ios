
const initialState = {
};

const GET_SHOT_TYPES_RECEIVED = "GET_SHOT_TYPES_RECEIVED";
const GET_SHOT_TYPES_REQUEST = "GET_SHOT_TYPES_REQUEST";

export function getShotTypesRequest() {
  return {
    type: GET_SHOT_TYPES_REQUEST
  };
}

export function getShotTypesReceived(json) {
  const shotTypes = json.shot_types;
  let reshapedShotTypes = {};
  for (shotType of shotTypes){
    reshapedShotTypes[shotType.id] = shotType.name_ja;
  }
  return {
    type: GET_SHOT_TYPES_RECEIVED,
    shotTypes: reshapedShotTypes
  };
}

export function getShotTypes(params, authHeaders) {
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

export function sportReducer(state = initialState, action={}){
  switch (action.type){
  case GET_SHOT_TYPES_REQUEST:
    return state;
  case GET_SHOT_TYPES_RECEIVED:
    return {
      ...state,
      shotTypes:action.shotTypes
    };
  default:
    return state;
  }
}
