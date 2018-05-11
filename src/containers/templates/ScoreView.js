import React from "react";
import templateEnhancer from "./hoc";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";

import { TopContentBar } from "atoms";
import { PlayersDisplay } from "molecules";
import { Field, Graph } from "organisms";

import { reshapeShotTypeCounts, mapStateToProps } from "utils";
import * as gameModules from "../../modules/game";

class ScoreView extends React.Component {
  constructor(props) {
    super(props);
    this.setShotTypeCounts = this.setShotTypeCounts.bind(this);
    this.state = {
      data: [],
      missData: [],
      shotTypeList: []
    };
  }
  setShotTypeCounts(position, side, isNetMiss) {
    let selectedShotTypeCounts = this.props.game.shotTypeCounts[side] || {};
    const {
      shotTypeCountsList,
      missShotTypeCountsList,
      shotTypesList
    } = reshapeShotTypeCounts(
      selectedShotTypeCounts[position],
      this.props.sport.shotTypes
    );
    this.setState({
      data: shotTypeCountsList,
      missData: missShotTypeCountsList
    });
  }

  renderWinLossText(side) {
    if (
      this.props.game.scoreCounts[side] >
      this.props.game.scoreCounts[Number(!side)]
    ) {
      return <Text style={styles.winLossText}>Win</Text>;
    } else if (
      this.props.game.scoreCounts[side] <
      this.props.game.scoreCounts[Number(!side)]
    ) {
      return <Text style={styles.winLossText}>Loss</Text>;
    } else {
      return <Text style={styles.winLossText}>Draw</Text>;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TopContentBar>単分析結果</TopContentBar>
        <View>
          <PlayersDisplay
            leftUsers={this.props.game.gameUnits.left.users}
            rightUsers={this.props.game.gameUnits.right.users}
          >VS</PlayersDisplay>
          <View style={styles.gameInformationsContaier}>
            <View style={styles.gameInformationTextContainer}>
              {this.renderWinLossText((side = 0))}
              <Text style={styles.scoreText}>
                {this.props.game.scoreCounts[0]}
              </Text>
            </View>
            <View style={styles.gameInformationTextContainer}>
              <Text style={styles.scoreText}>
                {this.props.game.scoreCounts[1]}
              </Text>
              {this.renderWinLossText((side = 1))}
            </View>
          </View>
          <Field
            horizontal
            sport={this.props.sport.id}
            callback={this.setShotTypeCounts}
          />
          <Graph
            data={this.state.data}
            missData={this.state.missData}
            shotTypeList={this.state.shotTypeList}
          />
          <View style={styles.backButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.dispatch(gameModules.resetState());
                Actions.popTo("gameCreate");
              }}
            >
              <Text style={styles.backButtonText}>保存して終了</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(templateEnhancer(ScoreView));

const styles = StyleSheet.create({
  container: {
    flex: 1
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
