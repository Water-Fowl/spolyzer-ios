import {
    GAME_INFORMATION_REQUEST,
    GAME_INFORMATION_RECEIVED,
} from '../actions/game'

const initialState = {
    score_game_ids: []
}

export default function gameReducer(state=initialState, action={}){
    switch(action.type){
        case GAME_INFORMATION_REQUEST:
            return state
        case GAME_INFORMATION_RECEIVED:
            return Object.assign({}, state, {
                score_game_ids: action.score_game_ids
            })
    }
    return state
}
