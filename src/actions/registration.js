import { Actions } from 'react-native-router-flux';
import { REGISTRATION_ENDPOINT } from '../config/api';

export const REQUEST = "REQUEST"
export const RECIEVED = "RECIEVED"


export function postUserRegistration(body){
  return dispatch => {
    dispatch(requestRegistration());
    return fetch( REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => console.log(json))
    /* 一時的に絶対ログインできるようにする*/
      .then(dispatch(receivedRegistration(true)))
      .then(Actions.tab())
      .catch(function(error){
        console.log(error.message)
      })
  }
}

function requestRegistration(){
  return{
    type: REQUEST
  }
}

function receivedRegistration(is_authentication){
  return {
    type: RECIEVED,
    is_authenticated: is_authentication,
    error: false,
  }
}
