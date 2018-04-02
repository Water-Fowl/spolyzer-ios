import Orientation from "react-native-orientation";
import React from "react";
import { Actions } from "react-native-router-flux";
import {
  BackgroundImage,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TriangleCorner,
  View
} from "react-native";
import {
  LandScapeBackground,
  TopContentBar
} from "components";
import {
  connect
} from "react-redux";

import { ShotTypeModal } from "molecules";
import { postGame } from "../actions/post_game";
import { mapStateToProps } from "utils";

class ScoreCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: Dimensions.get("window").width,
      width: Dimensions.get("window").height,
      scores: ""
    };
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
  navigationEvent(users, scores){
    const body = {
      units:  users,
      scores,
      game: {
        name: "トレーニングマッチ",
        sport_name: "バドミントン"
      }
    };
    this.props.dispatch(postGame(body, this.props.authentication.header));
  }

  renderInFieldCircle(){
    return (
      <TouchableHighlight
        style={styles.blueCircle}
        onPress={() => {
          this.setModalEvent(this.props.position, this.props.side);
        }}
      >
        <View/>
      </TouchableHighlight>
    );
  }

  renderInFieldLength(){
    return (
      <TouchableHighlight
        style={styles.varticalBlueBar}
        onPress={() => {
          this.setModalEvent(this.props.position, this.props.side);
        }}
      >
        <View/>
      </TouchableHighlight>
    );
  }

  renderInFieldSide() {
    return (
      <TouchableHighlight
        style={styles.horizontalBlueBar}
        onPress={() => {
          this.setModalEvent(this.props.position, this.props.side);
        }}
      >
        <View/>
      </TouchableHighlight>
    );
  }

  renderUnitUsersName(users){
    const unitUserNameComponentList = [];
    for (let user of users){
      console.log(user);
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
        <ShotTypeModal visible={this.props.game.scoreCreateModal} />
        <LandScapeBackground />
        <TopContentBar>スコアシート</TopContentBar>
        <View style={styles.scoreInformationBar}>
          <View style={styles.scoreInformationContainer}>
            { this.renderUnitUsersName(this.props.game.gameUnits[0].users) }
            <View style={styles.scoreInformationPointContainer}>
              <Text style={styles.scoreInformationPoint}>{this.props.game.scoreCounts[0]}</Text>
            </View>
            <Text style={styles.scoreInformationGamePoint}>0</Text>
          </View>
          <Image style={styles.scoreInformationBack} source={require("../../../assets/img/score_create_back.png")} />
          <View style={styles.scoreInformationContainer}>
            <Text style={styles.scoreInformationGamePoint}>0</Text>
            <View style={styles.scoreInformationPointContainer}>
              <Text style={styles.scoreInformationPoint}>{this.props.game.scoreCounts[1]}</Text>
            </View>
            { this.renderUnitUsersName(this.props.game.gameUnits[1].users) }
          </View>
        </View>
        <TouchableHighlight onPress={() => {this.navigationEvent(this.props.game.gameUnits, this.props.game.scores);}} style={styles.analysisNavigate}>
          <Text style={styles.analysisNavigateText}>分析</Text>
        </TouchableHighlight>
        <View style={styles.scoreFieldContainer}>
          <Image
            source={require("../../../assets/img/field-line.png")}
            style={styles.scoreFieldLine}
          />
          <View style={styles.scoreFieldButtonContainer}>
            <View style={styles.scoreOverContainer}>
              <View style={styles.scoreOutFieldSideContainer}>
                <OutFieldSide position={5} side={0} />
                <OutFieldSide position={6} side={0}/>
              </View>
              <View style={styles.scoreOutFieldSideContainer}>
                <OutFieldSide position={0} side={1}/>
                <OutFieldSide position={1} side={1}/>
              </View>
            </View>
            <View style={styles.scoreMiddleContainer}>
              <View style={styles.scoreOutFieldLengthContainer}>
                <OutFieldLength position={4} side={0}/>
                <OutFieldLength position={3} side={0}/>
              </View>
              <View style={styles.scoreInFieldContainer}>
                <View style={styles.scoreInFieldLengthContainer}>
                  <InFieldLength position={11} side={0}/>
                  <InFieldLength position={10} side={0}/>
                </View>
                <View style={styles.scoreInFieldSideContainer}>
                  <InFieldSide position={12} side={0}/>
                  <View style={styles.scoreInFieldCircleContainer}>
                    <InFieldCircle position={7} side={0}/>
                  </View>
                  <InFieldSide position={9} side={0}/>
                </View>
                <View style={styles.scoreInFieldLengthContainer}>
                  <InFieldLength position={13} side={0}/>
                  <InFieldLength position={8} side={0}/>
                </View>
              </View>
              <View style={styles.scoreInFieldContainer}>
                <View style={styles.scoreInFieldLengthContainer}>
                  <InFieldLength position={8} side={1}/>
                  <InFieldLength position={13} side={1}/>
                </View>
                <View style={styles.scoreInFieldSideContainer}>
                  <InFieldSide position={9} side={1}/>
                  <View style={styles.scoreInFieldCircleContainer}>
                    <InFieldCircle position={7} side={1}/>
                  </View>
                  <InFieldSide position={12} side={1}/>
                </View>
                <View style={styles.scoreInFieldLengthContainer}>
                  <InFieldLength position={10} side={1}/>
                  <InFieldLength position={11} side={1}/>
                </View>
              </View>
              <View style={styles.scoreOutFieldLengthContainer}>
                <OutFieldLength position={3} side={1}/>
                <OutFieldLength position={4} side={1}/>
              </View>
            </View>
            <View style={styles.scoreUnderContainer}>
              <View style={styles.scoreOutFieldSideContainer}>
                <OutFieldSide position={2} side={0} />
                <OutFieldSide position={1} side={0}/>
              </View>
              <View style={styles.scoreOutFieldSideContainer}>
                <OutFieldSide position={6} side={1}/>
                <OutFieldSide position={5} side={1}/>
              </View>
            </View>
          </View>
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
  },
  scoreFieldContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  scoreFieldButtonContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  scoreFieldLine: {
    position: "absolute"
  },
  scoreOverContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  scoreMiddleContainer: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between"
  },
  scoreUnderContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  scoreOutFieldLengthContainer: {
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  scoreOutFieldSideContainer:{
    flexDirection: "row",
    flex: 0.36,
    justifyContent: "space-around"
  },
  scoreInFieldContainer: {
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30
  },
  scoreInFieldLengthContainer: {
    marginLeft: 12,
    marginRight: 12,
    justifyContent: "space-between",
    alignItems: "center"
  },
  scoreInFieldCircleContainer: {
    justifyContent: "space-between"
  },
  scoreInFieldSideContainer: {
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "space-between"
  },
  blueCircle: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 100,
    opacity: 0.3,
    alignSelf: "center"
  },
  horizontalBlueBar: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 20,
    width: 80,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3,
    alignSelf: "center"
  }
});
