import React from "react";
import baseEnhancer from "enhances";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  TopContentBar
} from "components";
import { connect } from "react-redux";

import getShotTypeCounts from "../actions/get_shot_type_counts";
import {
  Graph,
  InFieldCircle,
  InFieldLength,
  InFieldSide,
  OutFieldLength,
  OutFieldSide
} from "./components";

class ScoreView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>単分析結果</TopContentBar>
        <View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>Name</Text>
            <Text style={styles.userNameText}>Name</Text>
          </View>
          <View style={styles.gameInformationsContaier}>
            <View style={styles.gameInformationTextContainer}>
              <Text style={styles.winLossText}>Win</Text>
              <Text style={styles.scoreText}>20</Text>
            </View>
            <View style={styles.gameInformationTextContainer}>
              <Text style={styles.scoreText}>15</Text>
              <Text style={styles.winLossText}>Lose</Text>
            </View>
          </View>
          <View style={styles.field}>
            <Image style={styles.fieldLine} source={require("../../../assets/img/field-line.png")} />
            <View style={styles.overContainer}>
              <View style={styles.overOutFieldSideContainer}>
                <OutFieldSide position={5} side={6} />
                <OutFieldSide position={6} side={0}/>
              </View>
              <View style={styles.overOutFieldSideContainer}>
                <OutFieldSide position={0} side={1}/>
                <OutFieldSide position={1} side={1}/>
              </View>
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.outFieldLengthContainer}>
                <OutFieldLength position={4} side={0}/>
                <OutFieldLength position={3} side={0}/>
              </View>
              <View style={styles.inFieldContainer}>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength position={11} side={0}/>
                  <InFieldLength position={10} side={0}/>
                </View>
                <View style={styles.inFieldSideContainer}>
                  <InFieldSide position={12} side={0}/>
                  <View style={styles.inFieldCircleContainer}>
                    <InFieldCircle position={7} side={0}/>
                  </View>
                  <InFieldSide position={9} side={0}/>
                </View>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength position={13} side={0}/>
                  <InFieldLength position={8} side={0}/>
                </View>
              </View>
              <View style={styles.inFieldContainer}>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength position={8} side={1} />
                  <InFieldLength position={13} side={1}/>
                </View>
                <View style={styles.inFieldSideContainer}>
                  <InFieldSide position={9} side={1}/>
                  <View style={styles.inFieldCircleContainer}>
                    <InFieldCircle position={7} side={1}/>
                  </View>
                  <InFieldSide position={12} side={1}/>
                </View>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength position={10} side={1}/>
                  <InFieldLength position={11} side={1}/>
                </View>
              </View>
              <View style={styles.outFieldLengthContainer}>
                <OutFieldLength position={3} side={1}/>
                <OutFieldLength position={4} side={1}/>
              </View>
            </View>
            <View style={styles.underContainer}>
              <View style={styles.underOutFieldSideContainer}>
                <OutFieldSide position={2} side={0} />
                <OutFieldSide position={1} side={0}/>
              </View>
              <View style={styles.underOutFieldSideContainer}>
                <OutFieldSide position={6} side={1}/>
                <OutFieldSide position={5} side={1}/>
              </View>
            </View>
          </View>
          <Graph/>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => { Actions.popTo("gameCreate"); }}>
              <Text style={styles.backButtonText}>
                保存して終了
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(baseEnhancer(ScoreView));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
  userNameText: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    flex: 0.4,
    fontSize: 20,
    backgroundColor: "transparent",
    borderColor: "#28a8de",
    borderRadius: 3,
    borderWidth: 1
  },
  gameInformationTextContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20
  },
  gameInformationsContaier: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8
  },
  gameInformationTextContainer: {
    flex: 0.4,
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: "row"
  },
  scoreText: {
    color: "white",
    textAlign: "center",
    backgroundColor: "transparent",
    borderColor: "#28a8de",
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 30,
    padding: 3
  },
  winLossText: {
    alignSelf: "flex-end",
    color: "white",
    textAlign: "center",
    backgroundColor: "transparent",
    borderRadius: 3,
    borderColor: "#28a8de",
    borderWidth: 1,
    fontSize: 10,
    padding: 3,
    marginLeft: 5,
    marginRight: 5
  },
  field: {
    alignSelf: "center",
    width: 330,
    height: 170,
    marginTop: 26
  },
  fieldLine: {
    position: "absolute",
    alignSelf: "center",
    height: 170,
    backfaceVisibility: "hidden",
    resizeMode: "contain"
  },
  overContainer: {
    flexDirection: "row",
    flex: 1,
    zIndex: 2,
    justifyContent: "space-between"
  },
  overOutFieldSideContainer: {
    alignSelf: "flex-start",
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  middleContainer: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-between"
  },
  underContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  outFieldLengthContainer: {
    marginLeft: 4,
    marginRight: 4,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  inFieldContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  inFieldLengthContainer: {
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  inFieldCircleContainer: {
    justifyContent: "space-between"
  },
  inFieldSideContainer: {
    marginLeft: 6,
    marginRight: 6,
    justifyContent: "space-between"
  },
  underOutFieldSideContainer: {
    alignSelf: "flex-end",
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  backButtonContainer: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 34,
    width: 154,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 190,
    marginTop: 15
  },
  backButtonText: {
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
    textAlign: "center",
    paddingTop: 7,
    paddingLeft: 20
  }
});