import { reshapePositionsCount } from "utils";

const initialState = {
  gameUserCount: 1,
  shotTypeId: 1,
  term: 1,
  analysisUsers: {}
};

const GAME_TYPE_SETTING = "GAME_TYPE_SETTING";
const SHOT_TYPE_SETTING = "SHOT_TYPE_SETTING";
const TERM_SETTING = "TERM_SETTING";
const OPPONENT_USER_SETTING = "OPPONENT_USER_SETTING";
const GET_GAMES_REQUEST = "GET_GAMES_REQUEST";
const GET_GAMES_RECEIVED = "GET_GAMES_RRQUEST";
const GET_SEARCH_USER_RECEIVED = "GET_SEARCH_USER_RECEIVED";
const GET_SEARCH_USER_REQUEST = "GET_SEARCH_USER_REQUEST";
const GET_RECENTLY_GAMES_REQUEST = "GET_RECENTLY_GAMES_REQUEST";
const GET_RECENTLY_GAMES_RECEIVED = "GET_RECENTLY_GAMES_RECEIVED";
const GET_ACTIONS_REQUEST = "GET_ACTIONS_REQUEST";
const GET_ACTIONS_RECEIVED = "GET_ACTIONS_RECEIVED";
const GET_POSITIONS_COUNTS_REQUEST = "GET_POSITIONS_COUNTS_REQUEST";
const GET_POSITIONS_COUNTS_RECEIVED = "GET_POSITIONS_COUNTS_RECEIVED";
const SET_USER = "SET_USER_ANALYSIS";
const REMOVE_USER = "REMOVE_USER_ANALYSIS";
const SET_SELECTED_USER_INDEX = "SET_SELECTED_USER_INDEX";
const SET_POSITIONS_COUNTS = "SET_POSITIONS_COUNTS";

export function requestGetActions(){
  return{
    type: GET_ACTIONS_REQUEST
  };
}

export function reveivedGetActions(actions){
  return {
    type: GET_ACTIONS_RECEIVED,
    actions: actions
  };
}

export function getGamesRequest() {
  return {
    type: GET_GAMES_REQUEST
  };
}

export function getGamesReceived(gameId) {
  return {
    type: GET_GAMES_RECEIVED,
    gameId
  };
}

export function getPositionsCountsRequest(){
  return{
    type: GET_POSITIONS_COUNTS_REQUEST
  };
}

export function getPositionsCountsReceived(positionCounts){
  return{
    positionCounts,
    type: GET_POSITIONS_COUNTS_RECEIVED
  };
}

export function getSearchUserRequest() {
  return {
    type: GET_SEARCH_USER_REQUEST
  };
}

export function getSearchUserReceived(users) {
  return {
    type: GET_SEARCH_USER_RECEIVED,
    users
  };
}

export function removeUser(selectedUserIndex){
  return {
    type: REMOVE_USER,
    selectedUserIndex
  };
}

export function setPositionsCount(minPosition, maxPosition, side){
  return {
    type: SET_POSITIONS_COUNTS,
    minPosition,
    maxPosition,
    side
  };
}

export function setGameType(gameUserCount) {
  return {
    type: GAME_TYPE_SETTING,
    gameUserCount
  };
}

export function setShotType(shotTypeId) {
  return {
    type: SHOT_TYPE_SETTING,
    shotTypeId
  };
}

export function setTerm(term) {
  return {
    type: TERM_SETTING,
    term
  };
}

export function setUser(selectedUserIndex, user){
  return {
    type: SET_USER,
    selectedUserIndex,
    user
  };
}

export function setUserIndex(selectedUserIndex){
  return {
    type: SET_SELECTED_USER_INDEX,
    selectedUserIndex
  };
}

export default function analysisReducer(state = initialState, action = {}) {
  switch (action.type) {
  case actionTypes.GET_GAMES_REQUEST:
    return state;
  case actionTypes.GET_GAMES_RECEIVED:
    return Object.assign({}, state, {
      gameId: action.gameId
    });
  case actionTypes.GAME_TYPE_SETTING:
    return Object.assign({}, state, {
      gameUserCount: action.gameUserCount
    });
  case actionTypes.SHOT_TYPE_SETTING:
    return Object.assign({}, state, {
      shotTypeId: action.shotTypeId
    });
  case actionTypes.TERM_SETTING:
    return Object.assign({}, state, {
      term: action.term
    });
  case actionTypes.GAME_SETTING_REQUEST:
    return state;
  case actionTypes.GAME_SETTING_RECEIVED:
    return Object.assign({}, state, {
      scoreGameIds: action.scoreGameIds
    });
  case actionTypes.GET_SEARCH_USER_REQUEST:
    return state;
  case actionTypes.GET_SEARCH_USER_RECEIVED:
    return Object.assign({}, state, {
      users: action.users
    });
  case actionTypes.GET_POSITIONS_COUNTS_REQUEST:
    return Object.assign({}, state, {
    });
  case actionTypes.GET_POSITIONS_COUNTS_RECEIVED:
    return Object.assign({}, state, {
      positionCounts: action.positionCounts
    });
  case actionTypes.REMOVE_USER:
    state.analysisUsers[action.selectedUserIndex] = null;
    return Object.assign({}, state, {
      analysisUsers: state.analysisUsers
    });
  case actionTypes.SET_USER:
    state.analysisUsers[action.selectedUserIndex] = action.user;
    return Object.assign({}, state, {
      analysisUsers: state.analysisUsers
    });
  case actionTypes.SET_SELECTED_USER_INDEX:
    return Object.assign({}, state, {
      selectedUserIndex: action.selectedUserIndex
    });
  case actionTypes.SET_POSITIONS_COUNTS:
    const {
      positionsCountList
    } = reshapePositionsCount(
      state.positionCounts,
      action.side,
      action.minPosition,
      action.maxPosition
    );
    return Object.assign({}, state, {
      selectedPositionsCount: positionsCountList
    });
  default:
    return state;
  }
}
