import React from "react";
import baseEnhancer from "./hoc";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { TopContentBar } from "atoms";
import { PlayersDisplay } from "molecules";
import { connect } from "react-redux";
import * as utils from "utils";
import { mapStateToProps } from "../../modules/mapToProps";
import { Field, Graph } from "organisms";

class GameAnalysisView extends React.Component {
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
      this.props.game.scores,
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
    let scoreCounts = [
      this.props.games.score_count.left,
      this.props.games.score_count.right
    ];
    if (scoreCounts[side] > scoreCounts[Number(!side)]) {
      return <Text style={styles.winLossText}>Win</Text>;
    } else if (scoreCounts[side] < scoreCounts[Number(!side)]) {
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
            leftUsers={this.props.games.left_users}
            rightUsers={this.props.games.right_users}
            padding={5}
          >
            VS
          </PlayersDisplay>
          <View style={styles.gameInformationsContaier}>
            <View style={styles.gameInformationTextContainer}>
              {this.renderWinLossText((side = 0))}
              <Text style={styles.scoreText}>
                {this.props.games.score_count.left}
              </Text>
            </View>
            <View style={styles.gameInformationTextContainer}>
              <Text style={styles.scoreText}>
                {this.props.games.score_count.right}
              </Text>
              {this.renderWinLossText((side = 1))}
            </View>
          </View>
          <Field
            horizontal
            sport={this.props.sport.id}
            callback={this.setShotTypeCounts}
            margin={20}
          />
          <Graph
            data={this.state.data}
            missData={this.state.missData}
            shotTypeList={this.state.shotTypeList}
          />
        </View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(GameAnalysisView));

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
  }
});
