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
import { AnalysisField, Graph } from "organisms";

import * as utils from "../../utils";
import { mapStateToProps } from "../../modules/mapToProps";
import * as gameModules from "../../modules/game";
import * as requestModules from "../../modules/request";
import { GAMES_ENDPOINT } from "../../config/api";

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

  setShotTypeCounts(position_id, dropped_side, is_net_miss) {
    const {
      shotTypeCountsList,
      missShotTypeCountsList
    } = utils.aggregatedGameCounts(
      this.props.tempScores,
      this.props.sport.shotTypes,
      position_id,
      dropped_side
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
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <TopContentBar>単分析結果</TopContentBar>
          <PlayersDisplay
            leftUsers={this.props.game.gameUnits.left.users}
            rightUsers={this.props.game.gameUnits.right.users}
            padding={5}
          >
            VS
          </PlayersDisplay>
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
          <AnalysisField
            horizontal
            sport={this.props.sport.id}
            callback={this.setShotTypeCounts}
          />
          <Graph
            data={this.state.data}
            missData={this.state.missData}
            shotTypeList={this.state.shotTypeList}
          />
        </ScrollView>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props
                .dispatch(
                  requestModules.postApiRequest(
                    GAMES_ENDPOINT,
                    this.props.body,
                    this.props.authentication.header,
                    gameModules.postGameRequest,
                    gameModules.postGameReceived
                  )
                )
                .then(() => {
                  this.props.dispatch(gameModules.resetState());
                  utils.toastPresent("保存しました");
                  Actions.popTo("gameCreate");
                });
            }}
          >
            <Text style={styles.backButtonText}>保存して終了</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(templateEnhancer(ScoreView));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 12
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
    justifyContent: "center",
    alignItems: "center"
  },
  backButtonText: {
    bottom: 6,
    borderColor: "#28a8de",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});
