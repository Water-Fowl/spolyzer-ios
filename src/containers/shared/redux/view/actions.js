import {
  SET_SCORE_CREATE_MODAL,
  HIDE_SCORE_CREATE_MODAL,
  EMAIL_ERROR_IN_SIGN_UP,
} from "./action_types";

export function setScoreCreateModal() {
  return {
    type: SET_SCORE_CREATE_MODAL,
    score_create_modal: true,
  };
}

export function hideScoreCreateModal() {
  return {
    type: HIDE_SCORE_CREATE_MODAL,
    score_create_modal: false,
  };
}

export function emailErrorInSignUp(){
  return {
    type: EMAIL_ERROR_IN_SIGN_UP,
    sign_up_email_error: true
  }
}

