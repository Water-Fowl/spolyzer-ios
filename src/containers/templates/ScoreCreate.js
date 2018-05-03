import Orientation from "react-native-orientation";
import React from "react";
import { Actions } from "react-native-router-flux";
import { Alert, BackgroundImage, Dimensions, Image, StyleSheet,
  Text, TouchableHighlight, TriangleCorner, View
} from "react-native";
import { LandScapeBackground, TopContentBar } from "atoms";
import { ShotTypeModal } from "molecules";
import { Field } from "organisms";
import { connect } from "react-redux";
import * as gameModules from "../../modules/game";
import * as requestModules from "../../modules/request";

import { GAMES_ENDPOINT, SHOT_TYPE_COUNTS_ENDPOINT, gameCountEndpointGenerator } from "../../config/api";
import { mapStateToProps } from "utils";

class ScoreCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: Dimensions.get("window").width,
      width: Dimensions.get("window").height,
      scores: "",
      modalIsVisible: false
    };
    this.hideModal = this.hideModal.bind(this);
    this.setShotType = this.setShotType.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount() {
    Orientation.lockToLandscape();
  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.scores){
      this.setState({ scores:nextProps.scores });
    }
  }

  showModal(position, side) {
    this.setState({ modalIsVisible: true });
    this.props.dispatch(gameModules.setPositionAndSide(position, side));
  }

  hideModal() {
    this.setState({ modalIsVisible: false });
  }

  setShotType(shotTypeId, isNetMiss) {
    this.props.dispatch(gameModules.setShotType(shotTypeId, isNetMiss));
  }

  navigationEvent(users, scores){
    if (this.props.game.scores.length == 0){
      return Alert.alert("エラー", "スコアを入力してください。", [{ text: "了解"}], { cancelable: false });
    }
    const body = {
      units:  users,
      scores,
      game: {
        name: "トレーニングマッチ"
      },
      sport_id: this.props.sport.id
    };
    this.props.dispatch(requestModules.postApiRequest(
      GAMES_ENDPOINT,
      body,
      this.props.authentication.header,
      gameModules.postGameRequest,
      gameModules.postGameReceived
    )).then((json) => {
      let endpoint = gameCountEndpointGenerator({game_id: json.game.id});
      this.props.dispatch(requestModules.getApiRequest(
        endpoint=endpoint,
        params={},
        this.props.authentication.header,
        gameModules.getShotTypeCountsRequest,
        gameModules.getShotTypeCountsReceived
      ));
      Actions.scoreView();
    });
  }

  renderUnitUsersName(users){
    const unitUserNameComponentList = [];
    for (let user of users){
      unitUserNameComponentList.push(
        <Text style={styles.scoreInformationUserName}>{user.name}</Text>
      );
    }
    return (
      <View style={styles.scoreInformationUserNameContainer}>
        { unitUserNameComponentList }
      </View>
    );
  }

  render() {
    return (
      <View style={{
        /* eslint react-native/no-inline-styles: 0 */
        alignItems: "center",
        width: this.state.width,
        height: this.state.height
      }}
      >
        <ShotTypeModal
          shotTypes={this.props.sport.shotTypes}
          position={this.props.game.position}
          isVisible={this.state.modalIsVisible}
          hideModal={this.hideModal}
          callback={this.setShotType}
        />
        <LandScapeBackground />
        <TopContentBar>スコアシート</TopContentBar>
        <View style={styles.scoreInformationBar}>
          <View style={styles.scoreInformationContainer}>
            { this.renderUnitUsersName(this.props.game.gameUnits.left.users) }
            <View style={styles.scoreInformationPointContainer}>
              <Text style={styles.scoreInformationPoint}>{this.props.game.scoreCounts[0]}</Text>
            </View>
            <Text style={styles.scoreInformationGamePoint}>0</Text>
          </View>
          <TouchableHighlight onPress={()=> {this.props.dispatch(gameModules.removeScore());}}>
            <Image style={styles.scoreInformationBack} source={require("../../assets/img/score_create_back.png")} />
          </TouchableHighlight>
          <View style={styles.scoreInformationContainer}>
            <Text style={styles.scoreInformationGamePoint}>0</Text>
            <View style={styles.scoreInformationPointContainer}>
              <Text style={styles.scoreInformationPoint}>{this.props.game.scoreCounts[1]}</Text>
            </View>
            { this.renderUnitUsersName(this.props.game.gameUnits.right.users) }
          </View>
        </View>
        <TouchableHighlight onPress={() => {this.navigationEvent(this.props.game.gameUnits, this.props.game.scores);}} style={styles.analysisNavigate}>
          <Text style={styles.analysisNavigateText}>分析</Text>
        </TouchableHighlight>
        <Field horizontal={false} callback={this.showModal} />
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
    right: 10,
    top: 8,
    alignSelf: "flex-end"
  },
  analysisNavigateText: {
    borderColor: "#00A0E9",
    backgroundColor: "#00A0E9",
    borderWidth: 1.0,
    borderRadius: 4,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    color: "white"
  },
  scoreInformationBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    marginTop: -20
  },
  scoreInformationBack: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20
  },
  scoreInformationUserNameContainer: {
    flex: 2,
    justifyContent: "flex-end"
  },
  scoreInformationUserName: {
    paddingTop: 4,
    paddingBottom: 4,
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    fontSize: 15,
    width: 130,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#2EA7E0"
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
    borderRadius: 4,
    borderColor: "#2EA7E0"
  },
  scoreInformationContainer: {
    flexDirection: "row",
    flex: 0.4
  }
});
