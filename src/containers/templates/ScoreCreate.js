import Orientation from "react-native-orientation";
import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Alert,
  BackgroundImage,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TriangleCorner,
  View
} from "react-native";
import { LandScapeBackground, TopContentBar } from "atoms";
import { ShotTypeModal } from "molecules";
import { ScoreField } from "organisms";
import { connect } from "react-redux";
import * as analysisModules from "../../modules/analysis";
import * as gameModules from "../../modules/game";
import * as requestModules from "../../modules/request";

import {
  GAMES_ENDPOINT,
  SHOT_TYPE_COUNTS_ENDPOINT,
  gameCountEndpointGenerator
} from "../../config/api";
import { scoreDisplay } from "utils";
import { mapStateToProps } from "../../modules/mapToProps";

class ScoreCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: Dimensions.get("window").width,
      width: Dimensions.get("window").height,
      scores: "",
      scoreCounts: [0, 0],
      modalIsVisible: false,
      hideAlert: false,
      n_sets: 0
    };
    this.hideModal = this.hideModal.bind(this);
    this.setShotType = this.setShotType.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount() {
    Orientation.lockToLandscape();
  }
  componentWillReceiveProps(nextProps) {
    this.setSoreDisplay(nextProps.game.scoreCounts);
  }

  showModal(position, side) {
    this.setState({ modalIsVisible: true, position: position, side: side });
  }

  hideModal() {
    this.setState({ modalIsVisible: false });
  }

  setShotType(shotTypeId, isNetMiss, side, position, n_sets) {
    this.props.dispatch(
      gameModules.setShotType(shotTypeId, isNetMiss, side, position, n_sets)
    );
  }

  setSoreDisplay(setScores) {
    let scoreCounts = scoreDisplay(this.props.sport.id, setScores);
    this.setState({ scoreCounts });
    if (scoreCounts[0] === "○" || scoreCounts[1] === "○") {
      if (!this.state.hideAlert)
        Alert.alert(
          "試合を分析する",
          "分析ページから保存ができます",
          [
            {
              text: "キャンセル",
              onPress: () => {
                this.setState({ hideAlert: true });
              },
              style: "cancel"
            },
            {
              text: "分析する",
              onPress: () => {
                this.setState({ hideAlert: true });
                this.navigationEvent(
                  this.props.game.gameUnits,
                  this.props.game.scores
                );
              }
            }
          ],
          { cancelable: false }
        );
    }
  }

  navigationEvent(users, scores) {
    if (this.props.game.scores.length == 0) {
      return Alert.alert(
        "エラー",
        "スコアを入力してください。",
        [{ text: "了解" }],
        { cancelable: false }
      );
    }

    let tempScores = JSON.stringify(this.props.game.scores);
    tempScores = JSON.parse(tempScores);
    for (key in tempScores) {
      tempScores[key] = {
        shot_type_id: Number(tempScores[key].shot_type),
        dropped_side: tempScores[key].side,
        position_id: tempScores[key].dropped_at,
        is_net_miss: tempScores[key].is_net_miss
      };
    }
    const body = {
      units: users,
      scores,
      game: {
        name: this.props.gameName
      },
      sport_id: this.props.sport.id
    };
    Actions.scoreView({
      tempScores: tempScores,
      body
    });
  }

  renderUnitUsersName(users) {
    const unitUserNameComponentList = [];
    for (let user of users) {
      unitUserNameComponentList.push(
        <Text
          style={styles.scoreInformationUserName}
          key={user.name}
          numberOfLines={1}
        >
          {user.name}
        </Text>
      );
    }
    return (
      <View style={styles.scoreInformationUserNameContainer}>
        {unitUserNameComponentList}
      </View>
    );
  }

  backButtonAlert() {
    Alert.alert(
      "記録を中止する",
      "記録したデータはリセットされます",
      [
        {
          text: "キャンセル",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "中止する",
          onPress: () => {
            this.props.dispatch(gameModules.resetState());
            Actions.popTo("gameCreate");
            Orientation.lockToPortrait();
          },
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View
        style={{
          /* eslint react-native/no-inline-styles: 0 */
          alignItems: "center",
          width: this.state.width,
          height: this.state.height
        }}
      >
        <ShotTypeModal
          shotTypes={this.props.sport.shotTypes}
          position={this.state.position}
          side={this.state.side}
          isVisible={this.state.modalIsVisible}
          hideModal={this.hideModal}
          n_sets={this.state.n_sets}
          callback={this.setShotType}
          height={this.state.height}
          width={this.state.width}
        />
        <LandScapeBackground />
        <TopContentBar>スコアシート</TopContentBar>
        <View style={styles.scoreInformationBar}>
          <View style={styles.scoreInformationContainer}>
            {this.renderUnitUsersName(this.props.game.gameUnits.left.users)}
            <View style={styles.scoreInformationPointContainer}>
              <Text style={styles.scoreInformationPoint}>
                {this.state.scoreCounts[0]}
              </Text>
            </View>
            <Text style={styles.scoreInformationGamePoint} />
          </View>
          <View style={styles.scoreInformationContainer}>
            <Text style={styles.scoreInformationGamePoint} />
            <View style={styles.scoreInformationPointContainer}>
              <Text style={styles.scoreInformationPoint}>
                {this.state.scoreCounts[1]}
              </Text>
            </View>
            {this.renderUnitUsersName(this.props.game.gameUnits.right.users)}
          </View>
        </View>
        <ScoreField
          horizontal={false}
          sport={this.props.sport.id}
          callback={this.showModal}
          margin={36}
          fieldHeight={137}
          fieldWidth={242}
          height={this.state.height}
          width={this.state.width}
        />
        <View style={styles.scoreInformationBackContainer}>
          <TouchableHighlight
            onPress={() => {
              this.props.dispatch(gameModules.removeScore());
            }}
            style={[styles.undo, { left: this.state.width / 2 - 39.5 }]}
          >
            <Image
              style={{ width: 79, height: 25 }}
              source={{ url: "score_create_back.png" }}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.backButtonAlert();
            }}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>戻る</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.navigationEvent(
                this.props.game.gameUnits,
                this.props.game.scores
              );
            }}
            style={styles.analysisNavigate}
          >
            <Text style={styles.analysisNavigateText}>分析</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(ScoreCreate);

const styles = StyleSheet.create({
  analysisNavigate: {
    position: "absolute",
    backgroundColor: "transparent",
    height: 40,
    right: 6,
    top: 6,
    alignSelf: "flex-end"
  },
  analysisNavigateText: {
    borderColor: "#00A0E9",
    backgroundColor: "#00A0E9",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  },
  backButton: {
    position: "absolute",
    backgroundColor: "transparent",
    height: 40,
    left: 6,
    top: 6,
    alignSelf: "flex-end"
  },
  backButtonText: {
    borderColor: "red",
    backgroundColor: "red",
    borderWidth: 1,
    padding: 12,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  },
  scoreInformationBar: {
    flexDirection: "row",
    position: "absolute",
    height: 48,
    width: "100%"
  },
  scoreInformationBackContainer: {
    position: "absolute",
    width: "100%"
  },
  undo: {
    position: "absolute",
    top: 38,
    backgroundColor: "transparent"
  },
  scoreInformationUserNameContainer: {
    flex: 2,
    justifyContent: "flex-end",
    borderBottomColor: "#28a8de",
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  scoreInformationUserName: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  scoreInformationPointContainer: {
    justifyContent: "flex-end"
  },
  scoreInformationPoint: {
    justifyContent: "center",
    width: 40,
    height: 40,
    fontSize: 30,
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#2EA7E0"
  },
  scoreInformationGamePoint: {
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "flex-end",
    height: 20,
    width: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0.5,
    borderRadius: 4
    // borderColor: "#2EA7E0"
  },
  scoreInformationContainer: {
    flexDirection: "row",
    flex: 1,
    paddingLeft: 55,
    paddingRight: 55
  }
});
