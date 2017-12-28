import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';

const BASE_URL = 'ec2-52-198-150-98.ap-northeast-1.compute.amazonaws.com';
const REQUEST = "REQUEST"
const SUCCESS = "SUCCESS"
const FAILURE = "FAILURE"
export function postScoreGame(score_game_request_body){
    load: () =>
    return{
        [CALL_API]:{
            endpoint: BASE_URL + '/game',
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
