import * as actionTypes from "./action_types";

const initialState = {
}

export default function sportReducer(state = initialState, action={}){
  switch (action.type){
    case actionTypes.GET_SHOT_TYPES_REQUEST:
      return state;
    case actionTypes.GET_SHOT_TYPES_RECEIVED:
      return {
        ...state,
        shotTypes:action.shotTypes
      };
    default:
      return state
  }
}
