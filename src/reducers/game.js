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
    case GAME_SETTING:
      return Object.assign({}, state, {
        game_type: action.game_type,
        shot_type: action.shot_type,
        term: actions.term,
        opponent_user_id: action.opponent_user_id,
        game_ids: action.game_ids
      })

  }
  return state
}
