import {
    REQUEST,
    RECIEVED,
} from "../actions/authentication"

const initialState = {
    is_authenticated: false
}

export default function authenticationReducer(state=initialState, action={}){
    switch (action.type){
        case REQUEST:
            return Object.assign({}, state, {
                is_authenticated: true
            })
        case RECIEVED:
            return Object.assign({}, state, {
                is_authenticated: action.is_authentication
            })
        default:
            return state
    }
}
