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

import getShotTypeCounts from "../game/actions/get_shot_type_counts";
import setShotTypeCounts from "../game/actions/set_shot_type_counts";
import { mapStateToProps } from "utils";
import resetState from "../game/actions/reset_state";
import {
  Field,
  Graph
} from "organisms";


class ScoreView extends React.Component {
  constructor(props) {
    super(props);
    this.setShotTypeCounts = this.setShotTypeCounts.bind(this);
  }
  setShotTypeCounts(position, side, missType=0) {
    this.props.dispatch(setShotTypeCounts(position, side));
  }
  renderUnitUsersName(users){
    const unitUserNameComponentList = [];
    for (let user of users){
      unitUserNameComponentList.push(
        <Text style={styles.userNameText}> {user.user.name} </Text>
      );
    }
    return (
      <View style={styles.gameInformationTextContainer}>
        { unitUserNameComponentList }
      </View>
    );
  }

  renderWinLossText(side){
    if( this.props.game.scoreCounts[side] > this.props.game.scoreCounts[Number(!side)]){
      return(
        <Text style={styles.winLossText}>Win</Text>
      );
    }
    else if( this.props.game.scoreCounts[side] < this.props.game.scoreCounts[Number(!side)]){
      return(
        <Text style={styles.winLossText}>Loss</Text>
      );
    }
    else {
      return(
        <Text style={styles.winLossText}>Draw</Text>
      );
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TopContentBar>単分析結果</TopContentBar>
        <View>
          <View style={styles.userNameContainer}>
            { this.renderUnitUsersName(this.props.game.gameUnits[0].users) }
            { this.renderUnitUsersName(this.props.game.gameUnits[1].users) }
          </View>
          <View style={styles.gameInformationsContaier}>
            <View style={styles.gameInformationTextContainer}>
              { this.renderWinLossText(side=0) }
              <Text style={styles.scoreText}>{this.props.game.scoreCounts[0]}</Text>
            </View>
            <View style={styles.gameInformationTextContainer}>
              <Text style={styles.scoreText}>{this.props.game.scoreCounts[1]}</Text>
              { this.renderWinLossText(side=1) }
            </View>
          </View>
          <Field horizontal callback={this.setShotTypeCounts} />
          <Graph />
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => {
              this.props.dispatch(resetState());
              Actions.popTo("gameCreate");
            }}>
              <Text style={styles.backButtonText}>
                保存して終了
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(ScoreView));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  userNameText: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 15,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: "transparent",
    borderColor: "#28a8de",
    borderRadius: 3,
    borderWidth: 1
  },
  gameInformationsContaier: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8
  },
  gameInformationTextContainer: {
    flex: 1,
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
