import { SET_SELECTED_USER_INDEX } from "../action_types";
export default function setUserIndex(selectedUnitIndex, selectedUserIndex){
  return {
    type: SET_SELECTED_USER_INDEX,
    selectedUnitIndex,
    selectedUserIndex
  };
}
