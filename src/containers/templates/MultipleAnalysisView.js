import React from "react";
import templateEnhancer from "./hoc";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme
} from "victory-native";
import { connect } from "react-redux";

import { Graph, Field } from "organisms";
import { ProfileImage, TopContentBar } from "atoms";

import { mapStateToProps, reshapePositionsCount } from "utils";

const IN_MIN_POSITION = 7;
const IN_MAX_POSITION = 13;
const OUT_MIN_POSITION = 1;
const OUT_MAX_POSITION = 6;
const OUT = 0;
const IN = 1;
const LEFT = 0;
const RIGHT = 1;
const TERM_LIST = ["Day", "Week", "Month"];

class AnalysisView extends React.Component {
  constructor(props) {
    super(props);
    let selectedPositionsCount = reshapePositionsCount(
      this.props.analysis.positionCounts,
      0,
      1,
      6
    );
    this.state = {
      /* Out = 0, In = 1 */
      /* Left = 0, Right = 1 */
      onPressOut: OUT,
      onPressSide: LEFT,
      selectedPositionsCount
    };
    this.setPositionEvent = this.setPositionEvent.bind(this);
    this._renderFieldButtonText = this._renderFieldButtonText.bind(this);
  }

  setPositionEvent(position, side) {
    if (position < 7) {
      min = OUT_MIN_POSITION;
      max = OUT_MAX_POSITION;
      field = OUT;
    } else {
      min = IN_MIN_POSITION;
      max = IN_MAX_POSITION;
      field = IN;
    }
    let selectedPositionsCount = reshapePositionsCount(
      this.props.analysis.positionCounts,
      side,
      min,
      max
    );
    this.setState({
      selectedPositionsCount,
      onPressOut: field,
      onPressSide: side
    });
  }
  _renderFieldButtonText(position, side) {
    /* positionは1から始まるが、indexは0からなので、1を引く */
    if (position < 7) {
      positionString = alphabet[position - 1];
      field = OUT;
    } else {
      positionString = alphabet[position - 6 - 1];
      field = IN;
    }

    if (this.state.onPressSide == side && this.state.onPressOut == field) {
      return <Text style={styles.droppedIdText}>{positionString}</Text>;
    } else {
      return <View />;
    }
  }
  renderInField() {
    return (
      <View>
        <View style={styles.outAreaContainer}>
          <TouchableOpacity style={styles.outFieldArea} />
          <TouchableOpacity style={styles.outFieldArea} />
        </View>
        <View style={styles.blankContainer}>
          <View style={styles.blankArea} />
          <View style={styles.blankArea} />
        </View>
        <View style={styles.inAreaContainer}>
          <TouchableOpacity style={styles.inArea} />
          <TouchableOpacity style={styles.inArea} />
        </View>
      </View>
    );
  }

  _renderOpponentUserNames(users) {
    const opponentUserNameComponentList = [];
    for (let userIdx in users) {
      if (
        users[userIdx] &&
        opponentUserNameComponentList.length != this.props.date.game_user_count
      ) {
        opponentUserNameComponentList.push(
          <View style={styles.flexDirectionRow}>
            <ProfileImage imageSource={users[userIdx].image.url} size={20} />
            <Text style={styles.opponentName}>{users[userIdx].name}</Text>
          </View>
        );
      }
    }
    return (
      <View style={styles.opponentUserNameContainer}>
        {opponentUserNameComponentList}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>複合分析結果</TopContentBar>
        <ScrollView>
          <View style={styles.analysisInformationContiner}>
            <Text style={styles.vsText}>vs</Text>
            <View style={styles.nameOutsideContainer}>
              <View style={styles.nameInsideContainer}>
                {this._renderOpponentUserNames(
                  this.props.analysis.analysisUsers
                )}
              </View>
            </View>
          </View>
          <View style={styles.optionContainer}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                {this.props.date.created_after}~{this.props.date.created_before}
              </Text>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                {this.props.sport.shotTypes[this.props.analysis.shotTypeId]}
              </Text>
            </View>
          </View>

          <Field
            horizontal
            sport={this.props.sport.id}
            callback={this.setPositionEvent}
            renderInField={this.renderInField}
            renderInButton={this._renderFieldButtonText}
          />
          <Graph data={this.state.selectedPositionsCount} />
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(templateEnhancer(AnalysisView));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vsText: {
    fontWeight: "bold",
    color: "skyblue",
    fontSize: 26,
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "transparent"
  },
  droppedIdText: {
    fontSize: 15,
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center"
  },
  analysisInformationContiner: {
    flexDirection: "row",
    alignSelf: "center"
  },
  nameOutsideContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    width: 104,
    borderWidth: 1,
    marginLeft: 6,
    borderRadius: 4,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  nameInsideContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    width: 100,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row"
  },
  opponentName: {
    backgroundColor: "transparent",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
    alignSelf: "center",
    paddingLeft: 4,
    paddingRight: 4
  },
  flexDirectionRow: {
    flexDirection: "row"
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: 310,
    marginTop: 4
  },
  optionTextContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 32,
    width: 96,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  optionText: {
    backgroundColor: "#0a2444",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    height: 26,
    width: 90,
    borderRadius: 4,
    textAlign: "center",
    paddingTop: 5
  },
  outAreaContainer: {
    width: 300,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  outFieldArea: {
    alignSelf: "center",
    flex: 0.45,
    backgroundColor: "#FAEE00",
    opacity: 0.3,
    height: 170
  },
  blankContainer: {
    width: 320,
    alignSelf: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10
  },
  blankArea: {
    flex: 0.4,
    alignSelf: "center",
    backgroundColor: "black",
    height: 138,
    marginTop: 16,
    marginBottom: 16
  },
  inAreaContainer: {
    width: 300,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10
  },
  inArea: {
    flex: 0.35,
    alignSelf: "center",
    backgroundColor: "rgba(46, 167, 224, 0.8)",
    height: 120,
    marginTop: 25,
    marginBottom: 25
  }
});
