import React from "react";
import templateEnhancer from "./hoc";
import { Actions } from "react-native-router-flux";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { TopContentBar } from "atoms";
import { Icon, SegmentedControl } from "react-native-ios-kit";
import * as analysisModules from "../../modules/analysis";
import * as requestModules from "../../modules/request";
import { mapStateToProps } from "../../modules/mapToProps";
import {
  GAMES_ENDPOINT,
  gameCountEndpointGenerator
} from "../../config/api";
import { timeEncode } from "utils";

class GameAnalysisCreate extends React.Component {
  constructor(props) {
    super(props);
    this.getUsersGamesEvent.bind(this);
    this.state = {
      isPickerVisible: false,
      selectedIndex: 0,
      games: [],
      listLength: 0
    };
    this.getUsersGamesEvent();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scores) {
      this.setState({ scores: nextProps.scores });
    }
  }

  getUsersGamesEvent() {
    this.props
      .dispatch(
        requestModules.getApiRequest(
          (endpoint = GAMES_ENDPOINT),
          (params = {}),
          this.props.authentication.header,
          analysisModules.getGamesRequest,
          analysisModules.getGamesReceived
        )
      )
      .then(games => {
        this.setState({ games: games });
      });
  }

  navigationEvent(item) {
    let endpoint = gameCountEndpointGenerator({
      game_id: item.id
    });
    this.props.dispatch(
      requestModules.getApiRequest(
        (endpoint = endpoint),
        (params = {}),
        this.props.authentication.header,
        analysisModules.getPositionsCountsRequest,
        analysisModules.getPositionsCountsReceived
      )
    );
    Actions.GameAnalysisView({ games: item });
  }

  setListData() {
    let setAggregatedScores = [];
    let gameType = this.state.selectedIndex + 1;
    if (!this.state.games) return setAggregatedScores;
    for (let gameData of this.state.games.slice().reverse()) {
      if (
        gameData.left_users.length === gameType &&
        gameData.sport_id === this.props.sport.id
      )
        setAggregatedScores.push(gameData);
    }
    if (setAggregatedScores.length !== this.state.listLength)
      this.setState({ listLength: setAggregatedScores.length });
    return setAggregatedScores;
  }

  setOpponentUsers(left_users, right_users) {
    let opponentUsers = { left: [], right: [], side: null };

    for (let index = 0; index < left_users.length; index++) {
      opponentUsers.left.push(left_users[index].name);
      opponentUsers.right.push(right_users[index].name);

      if (left_users[index].name === this.props.profile.user.name)
        opponentUsers.side = 0;

      if (right_users[index].name === this.props.profile.user.name)
        opponentUsers.side = 1;
    }
    return opponentUsers.side
      ? opponentUsers.left.join(" / ")
      : opponentUsers.right.join(" / ");
  }

  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>試合一覧</TopContentBar>
        <View style={styles.segmentContainer}>
          <SegmentedControl
            values={["シングルス", "ダブルス"]}
            selectedIndex={0}
            onValueChange={(value, index) =>
              this.setState({
                selectedValue: value,
                selectedIndex: index
              })
            }
            tintColor={"#2ea7e0"}
            style={{ width: 222, alignSelf: "center" }}
          />
        </View>
        {(() => {
          if (!this.state.listLength)
            return (
              <View style={styles.listConteiner}>
                <Text style={styles.noDataText}>データがありません</Text>
              </View>
            );
        })()}
        <FlatList
          data={this.setListData()}
          renderItem={({ item, index }) => (
            <View style={styles.listConteiner}>
              <TouchableOpacity
                onPress={() => {
                  this.navigationEvent(item);
                }}
                style={styles.gameAnalysisViewButton}
              >
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.opponentText}>
                  VS {this.setOpponentUsers(item.left_users, item.right_users)}
                </Text>
                <Text style={styles.gameCreateTime}>
                  {timeEncode(item.created_at)}
                </Text>
                <Icon
                  name={"ios-arrow-forward"}
                  size={40}
                  color={"#28a8de"}
                  style={styles.iconArrow}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index}
          style={styles.flatListConteiner}
        />
      </View>
    );
  }
}
export default connect(mapStateToProps)(templateEnhancer(GameAnalysisCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(6, 6, 25, 1)"
  },
  segmentContainer: {
    marginTop: 15,
    marginBottom: 15
  },
  flatListConteiner: {
    width: "100%"
  },
  listConteiner: {
    paddingLeft: 30,
    paddingBottom: 4,
    paddingTop: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderTopColor: "#2ea7e0"
  },
  gameAnalysisViewButton: {
    justifyContent: "center"
  },
  noDataText: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    paddingTop: 10,
    paddingRight: 30
  },
  titleText: {
    color: "white",
    fontSize: 14
  },
  opponentText: {
    color: "white",
    fontSize: 18,
    paddingTop: 4,
    paddingBottom: 4
  },
  gameCreateTime: {
    color: "white",
    fontSize: 12
  },
  iconArrow: {
    position: "absolute",
    paddingRight: 20,
    alignSelf: "flex-end"
  }
});
