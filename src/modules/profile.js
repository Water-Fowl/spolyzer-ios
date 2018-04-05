const REQUEST_POST_USER_UPDATE = "REQUEST_POST_USER_UPDATE";
const RECEIVED_POST_USER_UPDATE = "RECEIVED_POST_USER_UPDATE";
const GET_USER_RECEIVED = "GET_USER_RECEIVED";
const GET_USER_REQUEST = "GET_USER_REQUEST";
const SET_USER = "SET_USER";

export function getUserRequest() {
  return {
    type: GET_USER_REQUEST
  };
}

export function getUserReceived(json) {
  return {
    type: GET_USER_RECEIVED,
    userName: json.user.name,
    userImageSource: json.user.image.url,
    userEmail: json.user.email
  };
}

export function patchUserRequest() {
  return{
    type: REQUEST_POST_USER_UPDATE
  };
}

export function patchUserReceived(json){
  console.log(json)
  return {
    type: RECEIVED_POST_USER_UPDATE,
    userName: json.user.name,
    userEmail: json.user.email,
    userImageSource: json.user.image.url
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

export function profileReducer(state=initialState, action={}){
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
