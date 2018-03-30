import {
  HIDE_SCORE_CREATE_MODAL,
  IS_EMAIL_IN_SIGN_UP,
  IS_NOT_EMAIL_IN_SIGN_UP,
  SET_SCORE_CREATE_MODAL
} from "./action_types";

export function setScoreCreateModal() {
  return {
    type: SET_SCORE_CREATE_MODAL,
    scoreCreateModal: true
  };
}

export function hideScoreCreateModal() {
  return {
    type: HIDE_SCORE_CREATE_MODAL,
    scoreCreateModal: false
  };
}

export function isNotEmailInSignUp(){
  return {
    type: IS_NOT_EMAIL_IN_SIGN_UP,
    signUpEmailErrorMessage: true
  };
}

export function isEmailInSignUp(){
  return {
    type: IS_EMAIL_IN_SIGN_UP,
    signUpWmailErrorMessage: false
  };
}
