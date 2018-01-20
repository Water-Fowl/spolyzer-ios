import {
  GAME_INFORMATION_REQUEST,
  GAME_INFORMATION_RECEIVED,
  GAME_SETTING,
} from '../actions/game'

const initialState = {
  score_game_ids: []
}

export default function gameReducer(state=initialState, action={}){
  switch(action.type){
    case GAME_INFORMATION_REQUEST:
      return state
    case GAME_INFORMATION_RECEIVED:
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
    case OPPONENT_USER_SETTING:
      return Object.assign({}, state, {
        opponent_user_id: action.opponent_user_id
      })
    case GAME_SETTING_REQUST:
      return state
    case GAME_SETTING_RECEIVED:
      return Object.assign({}, state, {
        score_game_ids: action.score_game_ids
      })
    default:
      return state
  }
}
