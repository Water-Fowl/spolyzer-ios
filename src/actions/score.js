import { POST_SCORE_GAME_ENDPOINT } from '../config/api'
import { Actions } from 'react-native-router-flux';

export const ADD_SCORE = 'ADD_SCORE'
export const SET_MODAL = 'SET_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SCORE_REQUEST = 'SCORE_REQUEST'
export const SCORE_RECIEVED = 'SCORE_RECIEVED'

export function fetchAddScore(position, action, side){
  return{
    type: ADD_SCORE,
    action: action,
    position: position,
    side: side,
  }
}

export function setModal(position, side){
  return{
    type: SET_MODAL,
    position: position,
    side: side,
    modal: true,
  }
}

export function hideModal(){
  return{
    type: HIDE_MODAL,
    modal: false,
  }
}

export function postScoreGame(body){
  return dispatch => {
    dispatch(requestScoreGame());
    return fetch(POST_SCORE_GAME_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => dispatch(receivedScoreGame(json.score_game_id)))
      .then(Actions.score_view())
      .catch(function(error){
        console.log(error)
      })
  }
}

function requestScoreGame(){
  return {
    type: SCORE_REQUEST
  }
}

function receivedScoreGame(score_game_id){
  console.log(score_game_id)
  return {
    type: SCORE_RECIEVED,
    current_score_game_id: score_game_id
  }
}
