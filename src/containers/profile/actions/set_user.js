import { SET_USER } from "../action_types";

export function setUser(userName, mailAddress, image) {
  return {
    type: SET_USER,
    userName,
    mailAddress,
    image
  };
}
