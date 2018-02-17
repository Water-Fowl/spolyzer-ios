import {
  GAME_TYPE_SETTING,
  OPPONENT_USER_SETTING,
  SHOT_TYPE_SETTING,
  TERM_SETTING,
} from "../action_type";

export function setGameType(game_type_id) {
  return {
    type: GAME_TYPE_SETTING,
    game_type_id,
  };
}

export function setShotType(shot_type_id) {
  return {
    type: SHOT_TYPE_SETTING,
    shot_type_id,
  };
}

export function setTerm(term_id) {
  return {
    type: TERM_SETTING,
    term_id,
  };
}
