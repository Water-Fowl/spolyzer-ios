import Orientation from "react-native-orientation";
import React from "react";
import baseEnhancer from "enhances";
import { Actions } from "react-native-router-flux";
import {
  Background,
  NavBar,
  NavigateButton,
  TopBar,
  TopContentBar
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

import getShotTypes from "../actions/get_shot_types";
import setUserIndex from "../actions/set_user_index";
import { UserIcon } from "./components";

class GameCreate extends React.Component {
  componentWillMount(){
    const { dispatch } = this.props;
    /* バドミントンのIDは1*/
    const sport_id = 1;
    dispatch(getShotTypes(sport_id));
  }
  setUserIndexEvent(selectedUnitIndex, selectedUserIndex){
    const { dispatch } = this.props;
    dispatch(setUserIndex(selectedUnitIndex, selectedUserIndex));
    Actions.gameSearchUser();
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
                  <TouchableOpacity onPress={() =>{this.setUserIndexEvent(0, 0);}}>
                    <UserIcon unitIndex={0} userIndex={0}/>
                  </TouchableOpacity>
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
export default connect()(baseEnhancer(GameCreate));

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
  textbox: {
    borderColor: "#2EA7E0",
    height: 20,
    width: 88,
    borderWidth: 1.5,
    borderRadius: 5,
    opacity: 0.5,
    alignSelf: "center"
  },
  vsPosition: {
    height: 27,
    width: 35,
    marginTop: 100
  }
});
