import {
  getScoreByPositionAndSide
} from "utils";

import {
  GET_SEARCH_USER_RECEIVED,
  GET_SEARCH_USER_REQUEST,
  GET_SHOT_TYPES_RECEIVED,
  GET_SHOT_TYPES_REQUEST,
  GET_SHOT_TYPE_COUNTS_RECEIVED,
  GET_SHOT_TYPE_COUNTS_REQUEST,
  POST_GAME_RECIEVED,
  POST_GAME_REQUEST,
  SET_POSITION_AND_SIDE,
  SET_SELECTED_USER_INDEX,
  SET_SHOT_TYPE,
  SET_SHOT_TYPE_COUNTS,
  SET_USER
} from "./action_types";

const initialState = {
  scores: [],
  scoreCounts: [0, 0],
  users: "",
  gameUsers: {0:{}, 1:{}}
};

export default function gameReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_SHOT_TYPE:
    /* 今回得られたスコアを取得し、配列に格納する */
    const currentScore = getScoreByPositionAndSide(state.position, state.side);
    const currentScores = [state.scoreCounts[0] + currentScore[0], state.scoreCounts[1] + currentScore[1]];
    return Object.assign({}, state, {
      /* TODO 誰が決めたかを入力する */
      scores: state.scores.concat({user: state.gameUsers[state.side * 2], dropped_at: state.position, shot_type: action.shot_type, side: state.side}),
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
      currentScoreGameId: action.currentScoreGameId
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
    state.gameUsers[action.selectedUnitIndex][action.selectedUserIndex] = action.user
    return Object.assign({}, state, {
      gameUsers: state.gameUsers
    });
  case SET_SELECTED_USER_INDEX:
    return Object.assign({}, state, {
      selectedUserIndex: action.selectedUserIndex,
      selectedUnitIndex: action.selectedUnitIndex
    });
  case SET_SHOT_TYPE_COUNTS:
    return Object.assign({}, state, {
      selectedShotTypeCounts: state.shotTypeCounts[action.side][action.position]
    });
  case GET_SHOT_TYPES_REQUEST:
    return state
  case GET_SHOT_TYPES_RECEIVED:
    return Object.assign({}, state, {
      shotTypes: action.shotTypes
    })
  default:
    return state;
  }
}
