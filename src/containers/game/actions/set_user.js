import { Actions } from "react-native-router-flux";

import { SET_USER } from "../action_types";

export default function setUser(selectedUnitIndex, selectedUserIndex, user){
  return {
    type: SET_USER,
    selectedUnitIndex,
    selectedUserIndex,
    user
  };
}
