import React from "react";
import {
  Actions
} from "react-native-router-flux";
import {
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import NoSelectedUserIcon from "./no_selected_user_icon";
import SelectedUserIcon from "./selected_user_icon";

class UserIcon extends React.Component{
  render(){
    if(this.props.gameUsers[this.props.unitIndex][this.props.userIndex]){
      return(
        <SelectedUserIcon user={this.props.gameUsers[this.props.unitIndex][this.props.userIndex]}/>
      );
    }
    else {
      return (
        <NoSelectedUserIcon />
      );
    }
  }
}

export default connect(mapStateToProps)(UserIcon);

function mapStateToProps(state, props){
  const { game } = state;
  const {
    gameUsers
  } = game || {
    gameUsers: {}
  };
  return {
    gameUsers
  };
}
