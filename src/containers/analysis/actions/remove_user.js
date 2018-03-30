import { Actions } from "react-native-router-flux";

import { REMOVE_USER } from "../action_types";

export default function removeUser(selectedUserIndex){
  return {
    type: REMOVE_USER,
    selectedUserIndex
  };
}
