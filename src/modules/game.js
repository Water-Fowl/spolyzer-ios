
import {
  getScoreByPositionAndSide
} from "utils";

const GET_SEARCH_USER_REQUEST = "GET_SEARCH_USER_REQUEST_ON_GAME";
const GET_SEARCH_USER_RECEIVED = "GET_SEARCH_USER_RECEIVED_ON_GAME";
const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER_ON_GAME";
const SET_SHOT_TYPE = "SET_SHOT_TYPE";
const SET_POSITION_AND_SIDE = "SET_POSITION_AND_SIDE";
const SET_SHOT_TYPE_COUNTS = "SET_SHOT_TYPE_COUNTS";
const POST_GAME_REQUEST = "POST_GAME_REQUEST";
const POST_GAME_RECIEVED = "POST_GAME_RECIEVED";
const SET_SELECTED_USER_INDEX = "SET_SELECTED_USER_INDEX";
const GET_SHOT_TYPE_COUNTS_RECEIVED = "GET_SHOT_TYPE_COUNTS_RECEIVED";
const GET_SHOT_TYPE_COUNTS_REQUEST = "GET_SHOT_TYPE_COUNTS_REQUEST";
const GET_SHOT_TYPES_RECEIVED = "GET_SHOT_TYPES_RECEIVED";
const GET_SHOT_TYPES_REQUEST = "GET_SHOT_TYPES_REQUEST";
const SET_SCORE_CREATE_MODAL = "SET_SCORE_CREATE_MODAL";
const HIDE_SCORE_CREATE_MODAL = "HIDE_SCORE_CREATE_MODAL";
const RESET_STATE = "RESET_STATE_OF_GAME_REDUCER";

export function getShotTypeCountsRequest() {
  return {
    type: GET_SHOT_TYPE_COUNTS_REQUEST
  };
}

export function getShotTypeCountsReceived(json) {
  return {
    type: GET_SHOT_TYPE_COUNTS_RECEIVED,
    shotTypeCounts: json.counts
  };
}

export function getShotTypesRequest() {
  return {
    type: GET_SHOT_TYPES_REQUEST
  };
}

export function getSearchUserRequest() {
  return {
    type: GET_SEARCH_USER_REQUEST
  };
}

export function postGameRequest() {
  return {
    type: POST_GAME_REQUEST
  };
}

export function postGameReceived(json) {
  return {
    type: POST_GAME_RECIEVED,
    gameId: json.game.id
  };
}

export function getSearchUserReceived(json) {
  return {
    type: GET_SEARCH_USER_RECEIVED,
    users: json.users
  };
}

export function getShotTypesReceived(shotTypes) {
  const reshapedShotTypes = {};
  for (shotType in shotTypes){
    reshapedShotTypes[shotType.id] = shotType.name_ja;
  }
  return {
    type: GET_SHOT_TYPES_RECEIVED,
    shotTypes: reshapedShotTypes
  };
}

export function setPositionAndSide(position, side, missType) {
  return {
    type: SET_POSITION_AND_SIDE,
    position,
    side,
    missType
  };
}

export function setShotTypeCounts(position, side){
  return {
    type: SET_SHOT_TYPE_COUNTS,
    position,
    side
  };
}

export function setShotType(shotType, missType) {
  return {
    type: SET_SHOT_TYPE,
    shotType,
    missType
  };
}

export function setUser(selectedUnitIndex, selectedUserIndex, user){
  return {
    type: SET_USER,
    selectedUnitIndex,
    selectedUserIndex,
    user
  };
}

export function removeUser(){
  return {
    type: REMOVE_USER
  };
}

export function setUserIndex(selectedUnitIndex, selectedUserIndex){
  return {
    type: SET_SELECTED_USER_INDEX,
    selectedUnitIndex,
    selectedUserIndex
  };
}

export function resetState(){
  return {
    type: RESET_STATE
  };
}

const initialState = {
  scores: [],
  scoreCounts: [0, 0],
  users: "",
  gameUnits: {
    0:{
      users: [],
      count: 0
    },
    1:{
      users: [],
      count: 0
    }
  }
};

export function gameReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      scoreCreateModal: true
    });
  case HIDE_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      scoreCreateModal: false
    });
  case SET_SHOT_TYPE:
    /* 今回得られたスコアを取得し、配列に格納する */
    const currentScore = getScoreByPositionAndSide(state.position, state.side);
    const currentScores = [state.scoreCounts[0] + currentScore[0], state.scoreCounts[1] + currentScore[1]];
    return Object.assign({}, state, {
      scores: state.scores.concat({unit: state.side, dropped_at: state.position, shot_type: action.shotType, miss_type: action.missType, side: state.side}),
      scoreCounts: currentScores
    });
  case SET_POSITION_AND_SIDE:
    return Object.assign({}, state, {
      position: action.position,
      side: action.side
    });
  case POST_GAME_REQUEST:
    return state;
  case POST_GAME_RECIEVED:
    return Object.assign({}, state, {
      gameId: action.gameId
    });
  case GET_SEARCH_USER_REQUEST:
    return Object.assign({}, state, {
    });
  case GET_SEARCH_USER_RECEIVED:
    return Object.assign({}, state, {
      users: action.users
    });
  case GET_SHOT_TYPE_COUNTS_REQUEST:
    return state;
  case GET_SHOT_TYPE_COUNTS_RECEIVED:
    return Object.assign({}, state, {
      shotTypeCounts: action.shotTypeCounts
    });
  case SET_USER:
    if(state.gameUnits[action.selectedUnitIndex].users[action.selectedUserIndex]){
      state.gameUnits[action.selectedUnitIndex].users[action.selectedUserIndex] = action.user;
    }
    else{
      state.gameUnits[action.selectedUnitIndex].users.push(action.user);
    }
    state.gameUnits[action.selectedUnitIndex].count = state.gameUnits[action.selectedUnitIndex].users.length;
    return Object.assign({}, state, {
      gameUnits: state.gameUnits
    });
  case REMOVE_USER:
    state.gameUnits[state.selectedUnitIndex].users.pop(state.selectedUserIndex, 1);
    return Object.assign({}, state, {
      gameUnits: state.gameUnits
    });
  case SET_SELECTED_USER_INDEX:
    return Object.assign({}, state, {
      selectedUserIndex: action.selectedUserIndex,
      selectedUnitIndex: action.selectedUnitIndex
    });
  case SET_SHOT_TYPE_COUNTS:
    if(state.shotTypeCounts[action.side]){
      return {
        ...state,
        selectedShotTypeCounts: state.shotTypeCounts[action.side][action.position]
      };
    }
    else {
      return {
        ...state,
        selectedShotTypeCounts: []
      };
    }
    return Object.assign({}, state, {
      selectedShotTypeCounts: selectedShotTypeCounts
    });
  case RESET_STATE:
    return initialState;
  default:
    return state;
  }
}
