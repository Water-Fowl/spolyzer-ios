import {
  GAME_INFORMATION_REQUEST,
  GAME_INFORMATION_RECEIVED,
  GAME_SETTING_REQUEST,
  GAME_SETTING_RECEIVED
  GAME_TYPE_SETTING,
  SHOT_TYPE_SETTING,
  TERM_SETTING,
  SEARCH_USER_REQUEST,
  SEARCH_USER_RECEIVED 
} from './action_type'

const initialState = {
  score_game_ids: []
}

export default function gameReducer(state=initialState, action={}){
  switch(action.type){
    case GAME_ANALYSIS_REQUEST:
      return state
    case GAME_ANALYSIS_RECEIVED:
      return Object.assign({}, state, {
        score_game_ids: action.score_game_ids
      })
    case GAME_TYPE_SETTING:
      return Object.assign({}, state, {
        game_type: action.game_type,
      })
    case SHOT_TYPE_SETTING:
      return Object.assign({}, state, {
        shot_type: action.shot_type,
      })
    case TERM_SETTING:
      return Object.assign({}, state, {
        term: action.term
      })
    case GAME_SETTING_REQUEST:
      return state
    case GAME_SETTING_RECEIVED:
      return Object.assign({}, state, {
        score_game_ids: action.score_game_ids
      })
    case SEARCH_USER_REQUEST:
      return state
    case SEARCH_USER_RECEIVED:
      return Object.assign({}, state, {
        opponent_user_id: action.user_id
      })
    default:
      return state
  }
}
