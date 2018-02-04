import {
  SET_POSITION_AND_SIDE,
  SET_ACTION,
} from '../action_types'
export function setPositionAndSide(position, side){
  return {
    type: SET_POSITION_AND_SIDE,
    position: position,
    side: side,
  }
}

export function setAction(action){
  return{
    type: SET_ACTION,
    action: action,
  }
}
