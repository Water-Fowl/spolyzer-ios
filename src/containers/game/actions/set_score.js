import {
  SET_POSITION_AND_SIDE,
  SET_SHOT_TYPE
} from "../action_types";

export function setPositionAndSide(position, side) {
  return {
    type: SET_POSITION_AND_SIDE,
    position,
    side
  };
}

export function setShotType(shot_type) {
  return {
    type: SET_SHOT_TYPE,
    shot_type
  };
}
