import {
  GAME_TYPE_SETTING,
  SHOT_TYPE_SETTING,
  TERM_SETTING
} from "../action_types";

export function setGameType(gameUserCount) {
  return {
    type: GAME_TYPE_SETTING,
    gameUserCount
  };
}

export function setShotType(shotTypeId) {
  return {
    type: SHOT_TYPE_SETTING,
    shotTypeId
  };
}

export function setTerm(term) {
  return {
    type: TERM_SETTING,
    term
  };
}
