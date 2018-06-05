const REQUEST_POST_USER_UPDATE = "REQUEST_POST_USER_UPDATE";
const RECEIVED_POST_USER_UPDATE = "RECEIVED_POST_USER_UPDATE";
const GET_USER_RECEIVED = "GET_USER_RECEIVED";
const GET_USER_REQUEST = "GET_USER_REQUEST";
const SET_USER = "SET_USER";

const initialState = {};

export function getUserRequest() {
  return {
    type: GET_USER_REQUEST
  };
}

export function getUserReceived(json) {
  return {
    type: GET_USER_RECEIVED,
    user: json
  };
}

export function patchUserRequest() {
  return {
    type: REQUEST_POST_USER_UPDATE
  };
}

export function patchUserReceived(json) {
  return {
    type: RECEIVED_POST_USER_UPDATE,
    user: json
  };
}

export function setUser(userName, mailAddress, image) {
  return {
    type: SET_USER,
    userName,
    mailAddress,
    image
  };
}

export function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
  case GET_USER_REQUEST:
    return state;
  case GET_USER_RECEIVED:
    return Object.assign({}, state, {
      user: action.user
    });
  case REQUEST_POST_USER_UPDATE:
    return Object.assign({}, state, {});
  case RECEIVED_POST_USER_UPDATE:
    return Object.assign({}, state, {
      user: action.user
    });
  default:
    return state;
  }
}
