import Orientation from "react-native-orientation";
import React from "react";
import baseEnhancer from "enhances";
import { Actions } from "react-native-router-flux";
import {
  Background,
  NavBar,
  NavigateButton,
  TopBar,
  TopContentBar,
  ProfileImage
} from "components";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";

import getShotTypes from "../../../reducer/sport/actions/get_shot_types";
import setUserIndex from "../actions/set_user_index";
import { UserIcon } from "./components";
import { mapStateToProps } from "utils";

class GameCreate extends React.Component {
  setUserIndexEvent(selectedUnitIndex, selectedUserIndex){
    const { dispatch } = this.props;
    dispatch(setUserIndex(selectedUnitIndex, selectedUserIndex));
    Actions.gameSearchUser();
  }

  renderNoSelectedUserIcon() {
    return(
      <View>
        <View style={styles.noSelectedContainer}>
          <Text style={styles.noSelectedText}>not</Text>
          <Text style={styles.noSelectedText}>selected</Text>
        </View>
        <Text style={styles.nameText}> ユーザを選択 </Text>
      </View>
    );
  }

  renderSelectedUserIcon(user) {
    return (
      <View style={styles.alignItemsCenter}>
        <ProfileImage size={80} imageSource={user.image.url}/>
        <Text style={styles.nameText}> {user.name} </Text>
      </View>
    );
  }

  renderUserIcon(unitIndex, userIndex){
    if(this.props.game.gameUnits[unitIndex].users[userIndex]){
      return (
        <TouchableOpacity onPress={() =>{this.setUserIndexEvent(unitIndex, userIndex);}}>
          { this.renderSelectedUserIcon(this.props.game.gameUnits[unitIndex].users[userIndex]) }
        </TouchableOpacity>
      );
    }
    else {
      return (
        <TouchableOpacity onPress={() =>{this.setUserIndexEvent(unitIndex, userIndex);}}>
          { this.renderNoSelectedUserIcon() }
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>試合設定</TopContentBar>
        <View style={styles.alignItemsCenter} >
          <View style={styles.gameSettingBorder} >
            <View style={styles.gameSettingTable}>
              <Text style={styles.scoreGameCreateOpponents}>対戦相手選択</Text>
              <View style={styles.gameSettingTableInner}>
                <View style={styles.gameSettingTableInnerLeft}>
                  { this.renderUserIcon(0, 0) }
                  <TouchableOpacity onPress={() => {this.setUserIndexEvent(0, 1);}}>
                    <UserIcon unitIndex={0} userIndex={1}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.gameSettingTableInnerCenter}>
                  <Image
                    source={require("../../../assets/img/game_create_vs.png")}
                    style={styles.vsPosition}
                  />
                </View>
                <View style={styles.gameSettingInnerRight} >
                  <TouchableOpacity onPress={() => {this.setUserIndexEvent(1, 0);}}>
                    <UserIcon unitIndex={1} userIndex={0}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {this.setUserIndexEvent(1, 1);}}>
                    <UserIcon unitIndex={1} userIndex={1}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <NavigateButton action={Actions.scoreCreate} style={styles.buttonStyle} text="試合開始" />
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(baseEnhancer(GameCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  gameSettingBorder: {
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 2.5,
    marginTop: 30,
    borderColor: "rgb(20, 35, 70)"
  },
  gameSettingTable: {
    width: 320,
    height: 270,
    backgroundColor: "rgb(20, 35, 70)",
    justifyContent: "center",
    opacity: 0.7
  },
  gameSettingTableInner: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 280,
    height: 240
  },
  gameSettingTableInnerLeft: {
    flex: 1,
    width: 70,
    height: 220,
    justifyContent: "center",
    alignItems: "center"
  },
  gameSettingTableInnerCenter: {
    flex: 1,
    width: 30,
    height: 220,
    alignItems: "center"
  },
  scoreGameCreateOpponents: {
    padding: 0,
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  },
  buttonStyle: {
    marginTop: 80
  },
  vsPosition: {
    height: 27,
    width: 35,
    marginTop: 100
  },
  noSelectedContainer: {
    borderColor: "rgba(46, 167, 224, 0.4)",
    backgroundColor: "rgba(46, 167, 224, 0.4)",
    height: 75,
    width: 75,
    borderWidth: 2,
    borderRadius: 100,
    alignSelf: "center",
    margin: 7,
    justifyContent: "center"
  },
  noSelectedText: {
    backgroundColor: "transparent",
    color: "white",
    alignSelf: "center",
    textAlign: "center"
  },
  nameText: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 12,
    color: "white",
    marginTop: 10,
    textAlign: "center",
    borderColor: "#2EA7E0",
    width: 100,
    borderWidth: 1.5,
    borderRadius: 5,
    alignSelf: "center"
  }
});
