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
import { mapStateToProps } from "../../modules/mapToProps";
import * as utils from "../../utils";

const IN_MIN_POSITION = 7;
const IN_MAX_POSITION = 13;
const OUT_MIN_POSITION = 1;
const OUT_MAX_POSITION = 6;
const OUT = 0;
const IN = 1;
const LEFT = 0;
const RIGHT = 1;

class AnalysisView extends React.Component {
  constructor(props) {
    super(props);
    let selectedPositionsCount = utils.aggregatedMultipleCounts(
      this.props.analysis.scores,
      LEFT,
      IN_MIN_POSITION,
      IN_MAX_POSITION
    );
    this.state = {
      onPressOut: IN,
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
    let selectedPositionsCount = utils.aggregatedMultipleCounts(
      this.props.analysis.scores,
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
    if (!users.length) {
      let isDoubles = this.props.game_user_count - 1;
      let text = isDoubles ? "ダブルス" : "シングルス";
      return (
        <View style={styles.userNameContainer}>
          <View style={styles.userNameBox}>
            <Text style={styles.userNameText}>{text}</Text>
          </View>
        </View>
      );
    }
    const opponentUserNameComponentList = [];
    for (let userIdx in users) {
      if (
        users[userIdx] &&
        opponentUserNameComponentList.length != this.props.game_user_count
      ) {
        opponentUserNameComponentList.push(
          <View style={styles.userNameBox}>
            <Text style={styles.userNameText}>{users[userIdx].name}</Text>
          </View>
        );
      }
    }
    return (
      <View style={styles.userNameContainer}>
        {opponentUserNameComponentList}
      </View>
    );
  }

  setOutcome() {
    if (this.props.analysis.outcome == "all") return "全て";
    if (this.props.analysis.outcome == "win") return "勝ち";
    if (this.props.analysis.outcome == "lose") return "負け";
    return "-";
  }

  setCreatedAfter() {
    return this.props.created_after === "2018/1/1"
      ? ""
      : this.props.created_after;
  }
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>複合分析結果</TopContentBar>
        <ScrollView>
          <Text style={styles.termText}>
            {this.setCreatedAfter()}~{this.props.created_before}
          </Text>
          <View>
            {this._renderOpponentUserNames(this.props.analysis.analysisUsers)}
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionLabel}>勝敗</Text>
            <Text style={styles.optionText}>{this.setOutcome()}</Text>
            <Text style={styles.optionLabel}>球種</Text>
            <Text style={styles.optionText}>
              {this.props.sport.shotTypes[this.props.analysis.shotTypeId]}
            </Text>
          </View>
          <Field
            horizontal
            sport={this.props.profile.user.sport_id}
            callback={this.setPositionEvent}
            renderInField={this.renderInField}
            renderInButton={this._renderFieldButtonText}
            margin={10}
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
  termText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    margin: 8,
    backgroundColor: "transparent"
  },
  droppedIdText: {
    fontSize: 15,
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center"
  },
  userNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  userNameBox: {
    flex: 1,
    borderBottomColor: "#28a8de",
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  userNameText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 15,
    backgroundColor: "transparent"
  },
  optionContainer: {
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: 10,
    flex: 1
  },
  optionLabel: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    margin: 8,
    backgroundColor: "transparent"
  },
  optionText: {
    backgroundColor: "#0a2444",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 4,
    textAlign: "center",
    padding: 8
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
    opacity: 0.4,
    height: 170,
    zIndex: 999
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
    backgroundColor: "rgba(46, 167, 224, 0.5)",
    height: 120,
    marginTop: 25,
    marginBottom: 25
  }
});
