const POST_LOGIN_REQUEST = "POST_LOGIN_REQUEST";
const POST_LOGIN_RECIEVED = "POST_LOGIN_RECIEVED";
const POST_REGISTRATION_REQUEST = "POST_REGISTRATION_REQUEST";
const POST_REGISTRATION_RECEIVED = "POST_REGISTRATION_RECEIVED";
const GET_VALIDATE_TOKEN_RECEIVED = "GET_VALID_TOKEN_RECEIVED";
const GET_VALIDATE_TOKEN_REQUEST = "GET_VALID_TOKEN_REQUEST";
const EMAIL_VALIDATION = "EMAIL_VALIDATION";
const SET_TOKEN = "SET_TOKEN";
const NETWORK_ERROR = "NETWORK_ERROR";

export function requestLogin() {
  return {
    type: POST_LOGIN_REQUEST
  };
}

export function receivedLogin() {
  return {
    type: POST_LOGIN_RECIEVED,
    isAuthenticated: true
  };
}

export function responseToHeader(responseHeader){
  const header = {
    "access-token": responseHeader.get("access-token"),
    "expiry": responseHeader.get("expiry"),
    "uid": responseHeader.get("uid"),
    "client": responseHeader.get("client"),
    "token-type": responseHeader.get("token-type")
  };
  return header;
}

export function setToken(header){
  return{
    type: SET_TOKEN,
    header,
    isValidToken: true
  };
}

export function requestRegistration() {
  return {
    type: POST_REGISTRATION_REQUEST
  };
}

export function receivedRegistration(response_ok) {
  return {
    type: POST_REGISTRATION_RECEIVED,
    error: response_ok
  };
}

export function getValidTokenRequest() {
  return {
    type: actionType.GET_VALIDATE_TOKEN_REQUEST
  };
}

export function getValidTokenReceived(isValidToken) {
  return {
    type: actionType.GET_VALIDATE_TOKEN_RECEIVED,
    isValidToken
  };
}

export function networkError(msg){
  return {
    type: actionType.NETWORK_ERROR,
    msg
  };
}


export function authenticationReducer(state = initialState, action = {}) {
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
