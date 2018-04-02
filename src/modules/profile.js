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

export function getUserReceived(data) {
  return {
    type: GET_USER_RECEIVED,
    userName: data.name,
    userImageSource: data.image.url,
    userEmail: data.email
  };
}

export function requestPostUserUpdate() {
  return{
    type: REQUEST_POST_USER_UPDATE
  };
}

export function receivedPostUserUpdate(name, email, image){
  return {
    type: RECEIVED_POST_USER_UPDATE,
    userName: name,
    userEmail: email,
    userImageSource: image
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
