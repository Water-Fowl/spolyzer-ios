import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';

const BASE_URL = 'ec2-52-198-150-98.ap-northeast-1.compute.amazonaws.com';
const REQUEST = "REQUEST"
const SUCCESS = "SUCCESS"
const FAILURE = "FAILURE"
export const postUserAuthentication = () => ({
    [CALL_API]:{
        endpoint: BASE_URL + '/sign_up',
        method: 'post',
        body: {
            "name":"takumimuggle", 
            "email":"takumimuggle@gmail.com", 
            "password":"takumimuggle", 
            "password_confirmation":"takumimuggle", 
            "confirm_success_url":"api.water-fowl.co.jp"},
        types: ["REQUEST", {
            type: "SUCCESS",
            payload: () => {
                Actions.tab()
            }
        }, "FAILURE"]
    }
})
