export const GAME_TYPE__SETTING = "GAME_SETTING"
export const SHOT_TYPE_SETTING = "SHOT_TYPE_SETTING"
export const TERM_SETTING = "TERM_SETTING"
export const OPPONENT_USER_SETTING = "OPPONENT_USER_SETTING"

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
