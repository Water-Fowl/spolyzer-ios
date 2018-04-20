
const initialState = {
};

const GET_SHOT_TYPES_RECEIVED = "GET_SHOT_TYPES_RECEIVED";
const GET_SHOT_TYPES_REQUEST = "GET_SHOT_TYPES_REQUEST";
const SET_SPORT = "SET_SPORT";

export function getShotTypesRequest() {
  return {
    type: GET_SHOT_TYPES_REQUEST
  };
}
export function setSport(sportId){
  return {
    type: SET_SPORT,
    sportId: sportId
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

export function sportReducer(state = initialState, action={}){
  switch (action.type){
  case GET_SHOT_TYPES_REQUEST:
    return state;
  case GET_SHOT_TYPES_RECEIVED:
    return {
      ...state,
      shotTypes:action.shotTypes
    };
  case SET_SPORT:
    return {
      ...state,
      id: action.sportId
    };
  default:
    return state;
  }
}
