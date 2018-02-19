import {
  POST_USER_UPDATE_RECEIVED,
  POST_USER_UPDATE_REQUEST
} from "./action_types";

export default function profileReducer(state=initialState, action={}){
  switch (action.type){
  case SET_USER:
    return Object.assign({}, state, {
      user_name: action.user_name,
      email: action.email,
      image: action.image
    });
  case POST_USER_UPDATE_REQUEST:
    return Object.assign({}, state, {
    });
  case POST_USER_UPDATE_RECEIVED:
    return Object.assign({}, state, {
    });
  default:
    return state;
  }
}
