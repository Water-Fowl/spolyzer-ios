import React from "react";
import {
  Actions
} from "react-native-router-flux";
import {
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import NoSelectedUserIcon from "./NoSelectedUserIcon";
import SelectedUserIcon from "./SelectedUserIcon";
import {
  mapStateToProps
} from "utils";

class UserIcon extends React.Component{
  render(){
    if(this.props.game.gameUnits[this.props.unitIndex].users[this.props.userIndex]){
      return(
        <SelectedUserIcon user={this.props.game.gameUnits[this.props.unitIndex].users[this.props.userIndex]}/>
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
