import {
  SET_SCORE_CREATE_MODAL,
  HIDE_SCORE_CREATE_MODAL,
  IS_EMAIL_IN_SIGN_UP,
  IS_NOT_EMAIL_IN_SIGN_UP,
} from "./action_types";

const initialState = {
  score_create_modal: false,
};
export default function viewReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      score_create_modal: true,
    });
  case HIDE_SCORE_CREATE_MODAL:
    return Object.assign({}, state, {
      score_create_modal: false,
    });
  case IS_NOT_EMAIL_IN_SIGN_UP:
    return Object.assign({}, state,{
      sign_up_email_error: true
    });
  case IS_EMAIL_IN_SIGN_UP:
    return Object.assign({}, state,{
      sign_up_email_error: true
    });
  default:
    return state;
  }
}
