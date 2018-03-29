import { reshapePositionsCount } from "utils";

import * as actionTypes from "./action_types";

const initialState = {
  gameUserCount: 1,
  shotTypeId: 1,
  term: 1,
  analysisUsers: {}
};

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
    console.log(positionsCountList)
    return Object.assign({}, state, {
      selectedPositionsCount: positionsCountList
    });
  default:
    return state;
  }
}
