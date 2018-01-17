import {
    AUTH_REQUEST,
    AUTH_RECIEVED,
} from "../actions/authentication"

const initialState = {
    is_authenticated: false,
    error: false
}

export default function authenticationReducer(state=initialState, action={}){
    switch (action.type){
        case AUTH_REQUEST:
            return state
        case AUTH_RECIEVED:
            return Object.assign({}, state, {
                is_authenticated: action.is_authenticated,
                error: action.error 
            })
        default:
            return state
    }
}
