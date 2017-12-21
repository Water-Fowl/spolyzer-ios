import { RSAA } from 'redux-api-middleware';
import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';

export function postScoreGame(score_game_request_body){
    load: () =>
    return{
        [CALL_API]:{
            endpoint: 'game',
            method: 'post',
            body: score_game_request_body,
            types: ["REQUEST", {
                type: "SUCCESS",
                payload: () =>{
                    Actions.score_view
                }
            }, "FAILURE"],
        }
    }
} 
