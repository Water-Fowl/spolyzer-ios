import Orientation from "react-native-orientation";
import React from "react";
import templateEnhancer from "./hoc";
import { Actions } from "react-native-router-flux";
import {
  Alert, Dimensions, Image, StyleSheet, Text,
  TouchableHighlight, TouchableOpacity, View, TextInput
} from "react-native";
import { connect } from "react-redux";

import {
  ProfileImage, Background, NavBar,
  NavigateButton, TopBar, TopContentBar
} from "atoms";

import { mapStateToProps } from "../../modules/mapToProps";
import * as gameModules from "../../modules/game";

class GameCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: ""
    };
  }
  setUserIndexEvent(selectedUnitIndex, selectedUserIndex) {
    this.props.dispatch(
      gameModules.setUserIndex(selectedUnitIndex, selectedUserIndex)
    );
    Actions.gameSearchUser();
  }

  renderNoSelectedUserIcon() {
    return (
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
        <ProfileImage size={80} imageSource={user.image.url} />
        <Text style={styles.nameText}> {user.name} </Text>
      </View>
    );
  }

  renderUserIcon(unitIndex, userIndex) {
    if (this.props.game.gameUnits[unitIndex].users[userIndex]) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.setUserIndexEvent(unitIndex, userIndex);
          }}
        >
          {this.renderSelectedUserIcon(
            this.props.game.gameUnits[unitIndex].users[userIndex]
          )}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            this.setUserIndexEvent(unitIndex, userIndex);
          }}
        >
          {this.renderNoSelectedUserIcon()}
        </TouchableOpacity>
      );
    }
  }

  navigateScoreCreate() {
    if (
      this.props.game.gameUnits.left.count !=
      this.props.game.gameUnits.right.count
    ) {
      return Alert.alert(
        "エラー",
        "対戦人数を合わせてください。",
        [{ text: "了解" }],
        { cancelable: false }
      );
    } else if (this.props.game.gameUnits.left.count == 0) {
      return Alert.alert(
        "エラー",
        "ユーザーを選択してください。",
        [{ text: "了解" }],
        { cancelable: false }
      );
    } else {
      let gameName = this.state.gameName || "トレーニングマッチ";
      Actions.scoreCreate({ gameName: gameName });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>試合設定</TopContentBar>
        <View style={styles.alignItemsCenter}>
          <View style={styles.gameSettingBorder}>
            <View style={styles.gameSettingTable}>
              <Text style={styles.scoreGameCreateOpponents}>対戦相手選択</Text>
              <View style={styles.gameSettingTableInner}>
                <View style={styles.gameSettingTableInnerLeft}>
                  {this.renderUserIcon("left", 0)}
                  {this.renderUserIcon("left", 1)}
                </View>
                <View style={styles.gameSettingTableInnerCenter}>
                  <Image
                    source={require("../../assets/img/game_create_vs.png")}
                    style={styles.vsPosition}
                  />
                </View>
                <View style={styles.gameSettingInnerRight}>
                  {this.renderUserIcon("right", 0)}
                  {this.renderUserIcon("right", 1)}
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.gameNameText}>試合タイトル</Text>
          <View style={styles.form}>
            <TextInput
              onChangeText={gameName => {
                this.setState({ gameName });
              }}
              value={this.state.gameName}
              placeholder="試合タイトルを入力"
              placeholderTextColor="#666677"
              style={styles.textField}
              keyboardType="email-address"
              returnKeyType="done"
              maxLength={120}
            />
          </View>
          <NavigateButton
            action={() => {
              this.navigateScoreCreate();
            }}
            style={styles.buttonStyle}
            text="試合開始"
          />
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(templateEnhancer(GameCreate));

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
    marginTop: 20
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
  },
  gameNameText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
    alignSelf: "flex-start",
    marginTop: 16,
    backgroundColor: "transparent",
    paddingLeft: 48
  },
  form: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: "85%",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 12,
    marginBottom: 12
  },
  textField: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
    paddingLeft: 20,
    letterSpacing: 0
  }
});
