import { POST_SCORE_GAME_ENDPOINT } from '../config/api'
import { Actions } from 'react-native-router-flux';

export const ADD_SCORE = 'ADD_SCORE'
export const SET_MODAL = 'SET_MODAL'
export const HIDE_MODAL = 'HIDA_MODAL'
export const REQUEST = 'REQUEST'
export const RECIEVED = 'RECIEVED'

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
    return dispath => {
        disopath(requestScoreGame());
        return fetch(POST_SCORE_GAME_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(json => dispatch(receiveScoreGame(json.score_game_id)))
        .then(Actions.score_view)
        .catch(function(error){
            console.log(error)
        })
    }
}

function requestScoreGame(){
    return {
        type: REQUEST
    }
}

function receicedScoreGame(score_game_id){
    return {
        type: RECIEVED,
        current_score_game_id: score_game_id
    }
}
