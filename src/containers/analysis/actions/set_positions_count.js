import { SET_POSITIONS_COUNTS } from "../action_types";
export default function setPositionsCount(minPosition, maxPosition, side){
  return {
    type: SET_POSITIONS_COUNTS,
    minPosition,
    maxPosition,
    side
  };
}
