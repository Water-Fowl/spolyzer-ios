import {
  GAME_INFORMATION_REQUEST,
  GAME_INFORMATION_RECEIVED,
  GAME_SETTING_REQUEST,
  GAME_SETTING_RECEIVED,
  GAME_TYPE_SETTING,
  SHOT_TYPE_SETTING,
  TERM_SETTING,
  SEARCH_USER_REQUEST,
  SEARCH_USER_RECEIVED,
} from './action_type';

const initialState = {
  score_game_ids: [],
};

export default function gameReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GAME_INFORMATION_REQUEST:
      return state;
    case GAME_INFORMATION_RECEIVED:
      return Object.assign({}, state, {
        score_game_ids: action.score_game_ids,
      });
    case GAME_TYPE_SETTING:
      return Object.assign({}, state, {
        game_type_id: action.game_type_id,
      });
    case SHOT_TYPE_SETTING:
      return Object.assign({}, state, {
        shot_type_id: action.shot_type_id,
      });
    case TERM_SETTING:
      return Object.assign({}, state, {
        term_id: action.term_id,
      });
    case GAME_SETTING_REQUEST:
      return state;
    case GAME_SETTING_RECEIVED:
      return Object.assign({}, state, {
        score_game_ids: action.score_game_ids,
      });
    case SEARCH_USER_REQUEST:
      return state;
    case SEARCH_USER_RECEIVED:
      return Object.assign({}, state, {
        opponent_user_id: action.user_id,
      });
    default:
      return state;
  }
}
