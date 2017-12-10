export const ADD_SCORE = 'ADD_SCORE'
export const SET_MODAL = 'SET_MODAL'
export const HIDE_MODAL = 'HIDA_MODAL'

export function fetchAddScore(position, action, side){
    return{
        type: ADD_SCORE,
        action: action,
        position: position,
        side: side,
    }
}

export function setModal(position, side){

    return{
        type: SET_MODAL,
        position: position,
        side: side,
        modal: true,
    }
}

export function hideModal(){
    return{
        type: HIDE_MODAL,
        modal: false,
    }
}
