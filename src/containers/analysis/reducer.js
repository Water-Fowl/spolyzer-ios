import {
  GAME_SETTING_RECEIVED,
  GAME_SETTING_REQUEST,
  GAME_TYPE_SETTING,
  GET_GAMES_RECEIVED,
  GET_GAMES_REQUEST,
  SEARCH_USER_RECEIVED,
  SEARCH_USER_REQUEST,
  SHOT_TYPE_SETTING,
  TERM_SETTING
} from "./action_types";

const initialState = {
};

export default function analysisReducer(state = initialState, action = {}) {
  switch (action.type) {
  case GET_GAMES_REQUEST:
    return state;
  case GET_GAMES_RECEIVED:
    return Object.assign({}, state, {
      gameId: action.gameId
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
