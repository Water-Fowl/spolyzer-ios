import { SET_SELECTED_USER_INDEX } from "../action_types";
export default function setUserIndex(selectedUserIndex){
  return {
    type: SET_SELECTED_USER_INDEX,
    selectedUserIndex
  };
}
