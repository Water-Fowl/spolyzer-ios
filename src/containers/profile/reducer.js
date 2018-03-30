import {
  GET_USER_RECEIVED,
  GET_USER_REQUEST,
  RECEIVED_POST_USER_UPDATE,
  REQUEST_POST_USER_UPDATE,
  SET_USER
} from "./action_types";

const initialState = {
};


export default function profileReducer(state=initialState, action={}){
  switch (action.type){
  case GET_USER_REQUEST:
    return state;
  case GET_USER_RECEIVED:
    return Object.assign({}, state, {
      userName: action.userName,
      userEmail: action.userEmail,
      userImageSource: action.userImageSource
    });
  case REQUEST_POST_USER_UPDATE:
    return Object.assign({}, state, {
    });
  case RECEIVED_POST_USER_UPDATE:
    return Object.assign({}, state, {
      userName: action.userName,
      userEmail: action.userEmail,
      userImageSource: action.userImageSource
    });
  default:
    return state;
  }
}
