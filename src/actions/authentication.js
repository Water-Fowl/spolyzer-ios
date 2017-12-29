import { CALL_API } from 'redux-api-middleware'
import { Actions } from 'react-native-router-flux';

const BASE_URL = 'ec2-52-198-150-98.ap-northeast-1.compute.amazonaws.com/api/v1';
export const REQUEST = "REQUEST"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"
export const postUserAuthentication = (data) => ({
    [CALL_API]:{
        endpoint: BASE_URL + '/auth/',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: ["REQUEST", {
            type: "SUCCESS",
            payload: () => {
                console.log('hoge')
                Actions.tab()
            }
        }, "FAILURE"]
    }
})
