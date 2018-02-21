import {
  GAME_TYPE_SETTING,
  OPPONENT_USER_SETTING,
  SHOT_TYPE_SETTING,
  TERM_SETTING
} from "../action_type";

export function setGameType(gameTypeId) {
  return {
    type: GAME_TYPE_SETTING,
    gameTypeId
  };
}

export function setShotType(shotTypeId) {
  return {
    type: SHOT_TYPE_SETTING,
    shotTypeId
  };
}

export function setTerm(termId) {
  return {
    type: TERM_SETTING,
    termId
  };
}
