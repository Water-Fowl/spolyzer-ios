import {
    REUQUEST,
    SUCCESS,
    FAILURE,
} from "../actions/authentication"

const initialState = {
    is_authenticated: false
}

export default function authenticationReducer(state=initialState, action={}){
    switch (action.type){
        case REQUEST:
            return state
        case SUCCESS:
            return Objects.assign({}, state, {
                is_authentication: true
            })

        case FAILURE:
            return Objects.assign({}, state, {
                is_authentication: false
            })
    }
}
