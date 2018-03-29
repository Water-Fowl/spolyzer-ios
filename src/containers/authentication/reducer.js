import {
  EMAIL_VALIDATION,
  POST_LOGIN_RECIEVED,
  POST_LOGIN_REQUEST,
  POST_REGISTRATION_RECEIVED,
  POST_REGISTRATION_REQUEST,
  GET_VALIDATE_TOKEN_RECEIVED,
  GET_VALIDATE_TOKEN_REQUEST,
  SET_TOKEN,
  NETWORK_ERROR
} from "./action_type";

const initialState = {
  isValidToken: false
};

export default function authenticationReducer(state = initialState, action = {}) {
  switch (action.type) {
  case POST_LOGIN_REQUEST:
    return state;
  case POST_LOGIN_RECIEVED:
    return Object.assign({}, state, {
      isAuthenticated: action.isAuthenticated
    });
  case POST_REGISTRATION_REQUEST:
    return state;
  case POST_REGISTRATION_RECEIVED:
    return Object.assign({}, state, {
    });
  case EMAIL_VALIDATION:
    return Object.assign({}, state, {
    });
  case SET_TOKEN:
    return Object.assign({}, state, {
      header: action.header,
      isValidToken: action.isValidToken
    });
  case GET_VALIDATE_TOKEN_RECEIVED:
    return Object.assign({}, state, {
      isValidToken: action.isValidToken,
      errorMsg: null
    });
  case GET_VALIDATE_TOKEN_REQUEST:
    return state;
  case NETWORK_ERROR:
    return Object.assign({}, state, {
      errorMsg: action.msg
    });
  default:
    return state;
  }
}
