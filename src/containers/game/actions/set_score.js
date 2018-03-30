import {
  SET_POSITION_AND_SIDE,
  SET_SHOT_TYPE
} from "../action_types";


export function setScoreCreateModal() {
  return {
    type: SET_SCORE_CREATE_MODAL,
    scoreCreateModal: true
  };
}

export function hideScoreCreateModal() {
  return {
    type: HIDE_SCORE_CREATE_MODAL,
    scoreCreateModal: false
  };
}
export function setPositionAndSide(position, side, missType) {
  return {
    type: SET_POSITION_AND_SIDE,
    position,
    side,
    missType
  };
}

export function setShotType(shotType, missType) {
  return {
    type: SET_SHOT_TYPE,
    shotType,
    missType
  };
}
