import Orientation from "react-native-orientation";
import React from "react";
import templateEnhancer from "./hoc";
import { Actions } from "react-native-router-flux";
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";

import {
  ProfileImage,
  Background,
  NavBar,
  NavigateButton,
  TopBar,
  TopContentBar
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

  componentWillMount() {
    if (
      !this.props.profile.user.image.url &&
      this.props.authentication.header
    ) {
      this.setChangedThumbnailIds();
    }
  }

  setChangedThumbnailIds() {
    try {
      AsyncStorage.getItem("changedThumbnailIds").then(result => {
        let changedThumbnailIds = JSON.parse(result);
        if (!changedThumbnailIds) {
          this.alertThumbnail();
          return;
        }
        if (changedThumbnailIds.indexOf(this.props.profile.user.id) === -1) {
          this.alertThumbnail(changedThumbnailIds);
          return;
        }
      });
    } catch (error) {
    }
  }

  updateChangedThumbnailIds(changedThumbnailIds) {
    changedThumbnailIds.push(this.props.profile.user.id);
    try {
      AsyncStorage.setItem(
        "changedThumbnailIds",
        JSON.stringify(changedThumbnailIds)
      );
    } catch (error) {
    }
  }

  alertPresent = false;
  alertThumbnail(changedThumbnailIds = []) {
    if (!this.alertPresent) {
      this.alertPresent = true;
      Alert.alert(
        "プロフィール編集(推奨)",
        "プロフィール画像が設定されていません。画像を設定すると検索時に見つけやすくなります。",
        [
          {
            text: "表示しない",
            onPress: () => {
              this.alertPresent = false;
              this.updateChangedThumbnailIds(changedThumbnailIds);
            },
            style: "cancel"
          },
          {
            text: "設定する",
            onPress: () => {
              this.alertPresent = false;
              this.updateChangedThumbnailIds(changedThumbnailIds);
              Actions.profileEdit();
            }
          }
        ],
        { cancelable: false }
      );
    }
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
      <View>
        <View style={styles.SelectedContainer}>
          <ProfileImage size={70} imageSource={user.image.url} />
        </View>
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
        <ScrollView>
          <View style={styles.alignItemsCenter}>
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
            <View style={styles.gameSettingBorder}>
              <View style={styles.gameSettingTable}>
                <Text style={styles.scoreGameCreateOpponents}>
                  対戦相手選択
                </Text>
                <View style={styles.gameSettingTableInner}>
                  <View style={styles.gameSettingTableInnerLeft}>
                    {this.renderUserIcon("left", 0)}
                    {this.renderUserIcon("left", 1)}
                  </View>
                  <View style={styles.gameSettingTableInnerCenter}>
                    <Image
                      source={{ url: "game_create_vs.png" }}
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
            <NavigateButton
              action={() => {
                this.navigateScoreCreate();
              }}
              style={styles.buttonStyle}
              text="試合開始"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default connect(mapStateToProps)(templateEnhancer(GameCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  alignItemsCenter: {
    flex: 1,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 30,
    justifyContent: "center"
  },
  gameSettingBorder: {
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 2.5,
    borderColor: "rgb(20, 35, 70)"
  },
  gameSettingTable: {
    paddingBottom: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "rgb(20, 35, 70)"
  },
  gameSettingTableInner: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    padding: 5
  },
  gameSettingTableInnerCenter: {
    padding: 25
  },
  scoreGameCreateOpponents: {
    paddingTop: 8,
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "transparent",
    width: "100%",
    textAlign: "center",
    position: "absolute"
  },
  vsPosition: {
    height: 27,
    width: 35
  },
  noSelectedContainer: {
    borderColor: "rgba(46, 167, 224, 0.4)",
    backgroundColor: "rgba(46, 167, 224, 0.4)",
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 100,
    alignSelf: "center",
    margin: 7,
    justifyContent: "center"
  },
  SelectedContainer: {
    height: 70,
    width: 70,
    alignSelf: "center",
    margin: 7,
    justifyContent: "center"
  },
  noSelectedText: {
    backgroundColor: "transparent",
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 10
  },
  nameText: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 11,
    color: "white",
    marginTop: 2,
    textAlign: "center",
    borderColor: "#2EA7E0",
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center"
  },
  form: {
    width: "85%",
    alignSelf: "center",
    marginBottom: 12
  },
  buttonStyle: { bottom: 0, margin: 15 },
  textField: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    borderBottomColor: "#28a8de",
    borderWidth: 0.5,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0
  }
});
