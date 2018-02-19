import { SET_USER } from "../action_types";

export function setUser(user_name, mail_address, image) {
  return {
    type: SET_USER,
    user_name,
    mail_address,
    image
  };
}
