import {
  HIDE_SCORE_CREATE_MODAL,
  IS_EMAIL_IN_SIGN_UP,
  IS_NOT_EMAIL_IN_SIGN_UP,
  SET_SCORE_CREATE_MODAL
} from "./action_types";

const initialState = {
  scoreCreateModal: false
};
export default function viewReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      scoreCreateModal: true
    });
  case HIDE_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      scoreCreateModal: false
    });
  case IS_NOT_EMAIL_IN_SIGN_UP:
    return Object.assign({}, state,{
      signUpEmailError: true
    });
  case IS_EMAIL_IN_SIGN_UP:
    return Object.assign({}, state,{
      signUpEmailError: true
    });
  default:
    return state;
  }
}
