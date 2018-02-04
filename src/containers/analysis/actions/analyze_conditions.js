import {
  GAME_TYPE_SETTING,
  SHOT_TYPE_SETTING,
  TERM_SETTING,
  OPPONENT_USER_SETTING,
} from '../action_type'

export function setGameType(game_type){
  return {
    type: GAME_TYPE_SETTING,
    game_type: game_type
  }
}

export function setShotType(shot_type){
  return{
    type: SHOT_TYPE_SETTING,
    shot_type: shot_type
  }
}

export function setTerm(term){
  return {
    type: TERM_SETTING,
    term: term
  }
}
