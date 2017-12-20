import { RSAA } from 'redux-api-middleware';
import { CALL_API } from 'redux-api-middleware'

export function postScoreGame(score_game){
    load: () =>
    return{
        [CALL_API]:{
            endpoint: 'game',
            method: 'post',
            body: score_game,
            types: ["REQUEST", "SUCCESS", "FAILURE"],
        }
    }
} 
