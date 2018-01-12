import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux'
import { GET_GAMES_ENDPOINT } from '../config/api'

export const GAME_INFORMATION_REQUEST = "GAME_INFORMATION_REQUEST"
export const GAME_INFORMATION_SUCCESS = "GAME_INFORMATION_SUCCESS"
export function postGameInformation(information_body){
    return dispatch => {
        dispatch(requestGameInformation());
        return fetch(GET_GAMES_ENDPOINT, {
            method: 'POST',
            heaers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(information_body)
        })
        .then(response => response.json())
        .then(json => dispath(receivedGameInformation(json.score_game_ids)))
        .then(Actions.action_view())
        .catch(function(error){
            console.log(error)
        })
    }
}

function requestGameInformation(){
    return {
        type: GAME_INFORMATION_REQUEST
    }
}

function receivedGameInformation(score_game_ids){
    console.log(score_game_ids)
    return {
        type: GAME_INFORMATION_RECEIVED,
        current_score_game_ids: score_game_ids,
    }
}
