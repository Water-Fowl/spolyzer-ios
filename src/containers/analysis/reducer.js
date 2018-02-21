import {
  GAME_INFORMATION_RECEIVED,
  GAME_INFORMATION_REQUEST,
  GAME_SETTING_RECEIVED,
  GAME_SETTING_REQUEST,
  GAME_TYPE_SETTING,
  SEARCH_USER_RECEIVED,
  SEARCH_USER_REQUEST,
  SHOT_TYPE_SETTING,
  TERM_SETTING
} from "./action_type";

const initialState = {
  scoreGameIds: []
};

export default function analysisReducer(state = initialState, action = {}) {
  switch (action.type) {
  case GAME_INFORMATION_REQUEST:
    return state;
  case GAME_INFORMATION_RECEIVED:
    return Object.assign({}, state, {
      scoreGameIds: action.scoreGameIds
    });
  case GAME_TYPE_SETTING:
    return Object.assign({}, state, {
      gameTypeId: action.gameTypeId
    });
  case SHOT_TYPE_SETTING:
    return Object.assign({}, state, {
      shotTypeId: action.shotTypeId
    });
  case TERM_SETTING:
    return Object.assign({}, state, {
      termId: action.termId
    });
  case GAME_SETTING_REQUEST:
    return state;
  case GAME_SETTING_RECEIVED:
    return Object.assign({}, state, {
      scoreGameIds: action.scoreGameIds
    });
  case SEARCH_USER_REQUEST:
    return state;
  case SEARCH_USER_RECEIVED:
    return Object.assign({}, state, {
      opponentUserId: action.userId
    });
  default:
    return state;
  }
}
