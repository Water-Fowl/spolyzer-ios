import {
  GET_USER_RECEIVED,
  GET_USER_REQUEST,
  POST_USER_UPDATE_RECEIVED,
  POST_USER_UPDATE_REQUEST,
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
      userEmail: action.userEmail
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
