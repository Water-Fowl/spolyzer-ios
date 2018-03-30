import { SET_SHOT_TYPE_COUNTS } from "../action_types";

export default function setShotTypeCounts(position, side){
  return {
    type: SET_SHOT_TYPE_COUNTS,
    position,
    side
  };
}
