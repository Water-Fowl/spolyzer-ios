const initialState = {};

const GET_SHOT_TYPES_RECEIVED = "GET_SHOT_TYPES_RECEIVED";
const GET_SHOT_TYPES_REQUEST = "GET_SHOT_TYPES_REQUEST";
const GET_SPORTS_RECEIVED = "GET_SPORTS_RECEIVED";
const GET_SPORTS_REQUEST = "GET_SPORTS_REQUEST";
const SET_SPORT = "SET_SPORT";

export function getShotTypesRequest() {
  return {
    type: GET_SHOT_TYPES_REQUEST
  };
}
export function getShotTypesReceived(json) {
  const shotTypes = json;
  let reshapedShotTypes = {};
  for (shotType of shotTypes) {
    reshapedShotTypes[shotType.id] = shotType.name_ja;
  }
  return {
    type: GET_SHOT_TYPES_RECEIVED,
    shotTypes: reshapedShotTypes
  };
}

export function getSportsRequest() {
  return {
    type: GET_SPORTS_REQUEST
  };
}

export function getSportsReceived(json) {
  return {
    type: GET_SPORTS_RECEIVED,
    sports: json
  };
}

export function setSport(sportId) {
  return {
    type: SET_SPORT,
    sportId: sportId
  };
}

export function sportReducer(state = initialState, action = {}) {
  switch (action.type) {
  case GET_SHOT_TYPES_REQUEST:
    return state;
  case GET_SHOT_TYPES_RECEIVED:
    return {
      ...state,
      shotTypes: action.shotTypes
    };
  case GET_SPORTS_REQUEST:
    return state;
  case GET_SPORTS_RECEIVED:
    return {
      ...state,
      sports: action.sports
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
