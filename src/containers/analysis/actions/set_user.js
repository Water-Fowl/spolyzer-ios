import { Actions } from "react-native-router-flux";

import { SET_USER } from "../action_types";

export default function setUser(selectedUserIndex, user){
  return {
    type: SET_USER,
    selectedUserIndex,
    user
  };
}
