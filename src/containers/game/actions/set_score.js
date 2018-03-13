import {
  SET_POSITION_AND_SIDE,
  SET_SHOT_TYPE
} from "../action_types";

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
