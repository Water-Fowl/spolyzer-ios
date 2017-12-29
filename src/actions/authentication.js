import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';

const BASE_URL = 'ec2-52-198-150-98.ap-northeast-1.compute.amazonaws.com/api/v1';
export const REQUEST = "REQUEST"
export const RECIEVED = "RECIEVED"


export function postUserAuthentication(body){
  return dispatch => {
    dispatch(requestAuthentication(body))
    return fetch(BASE_URL + '/auth/', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
				'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(console.log(response))
    .then(dispatch(receivedAuthentication))
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
