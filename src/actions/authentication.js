import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';
import { SIGN_IN_ENDPOINT } from '../config/api';

export const REQUEST = "REQUEST"
export const RECIEVED = "RECIEVED"


export function postUserAuthentication(body){
  return dispatch => {
    dispatch(requestAuthentication(body));
    return fetch(SIGN_IN_ENDPOINT, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
				'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(dispatch(receivedAuthentication(true)))
    .then(Actions.tab())
    .catch(function(error){
      console.log(error.message)
    })
  }
}

function requestAuthentication(){
  return {
    type: REQUEST
  }
}

function receivedAuthentication(is_authentication){
  return {
    type: RECIEVED,
    is_authenticated: is_authentication,
  }
}
