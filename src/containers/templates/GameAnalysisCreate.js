import React from "react";
import baseEnhancer from "enhances";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { TopContentBar, TextBox } from "atoms";
import { Icon, SegmentedControl } from "react-native-ios-kit";
import {
  getUsersGamesRequest,
  getUsersGamesReceived
} from "../../modules/analysis";
import {
  getShotTypeCountsReceived,
  getShotTypeCountsRequest
} from "../../modules/game";
import { getApiRequest } from "../../modules/request";
import {
  USERS_GAMES_ENDPOINT,
  usersGamesEndpointGenerator,
  gameCountEndpointGenerator
} from "../../config/api";
import { mapStateToProps } from "utils";

class GameAnalysisCreate extends React.Component {
  constructor(props) {
    super(props);
    this.getUsersGamesEvent.bind(this);
    this.setPicker.bind(this);
    this.hidePicker.bind(this);
    this.state = {
      isPickerVisible: false,
      selectedIndex: 0,
      analysis: { gameId: { games: [] } }
    };
    this.getUsersGamesEvent();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.scores) {
      this.setState({ scores: nextProps.scores });
    }
  }
  getUsersGamesEvent() {
    let endpoint = usersGamesEndpointGenerator();
    this.props
      .dispatch(
        getApiRequest(
          (endpoint = endpoint),
          (params = {}),
          this.props.authentication.header,
          getUsersGamesRequest,
          getUsersGamesReceived
        )
      )
      .then(json => {
        this.setState({ analysis: { gameId: json } });
      });
  }
  setPicker() {
    this.setState({ isPickerVisible: true });
  }
  hidePicker() {
    this.setState({ isPickerVisible: false });
  }
  navigationEvent(item) {
    let endpoint = gameCountEndpointGenerator({
      game_id: item.id
    });
    this.props.dispatch(
      getApiRequest(
        endpoint = endpoint,
        params = {},
        this.props.authentication.header,
        getShotTypeCountsRequest,
        getShotTypeCountsReceived
      )
    );
    Actions.GameAnalysisView();
  }
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>試合一覧</TopContentBar>
        <View style={styles.segmentContainer}>
          {/* <SegmentedControl
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
          /> */}
        </View>
        <FlatList
          data={this.state.analysis.gameId.games}
          renderItem={({ item }) => (
            <View style={styles.listConteiner}>
              <TouchableOpacity
                onPress={() => {
                  this.navigationEvent(item);
                }}
                style={styles.gameAnalysisViewButton}
              >
                <Text style={styles.opponentText}>{item.name}</Text>
                <Text style={styles.gameCreateTime}>{item.created_at}</Text>
                <Icon
                  name={"ios-arrow-forward"}
                  size={40}
                  color={"#28a8de"}
                  style={styles.iconArrow}
                />
              </TouchableOpacity>
            </View>
          )}
          style={styles.flatListConteiner}
        />
      </View>
    );
  }
}
export default connect(mapStateToProps)(baseEnhancer(GameAnalysisCreate));

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
    paddingBottom: 10,
    paddingTop: 10,
    // borderBottomColor: "#2ea7e0",
    borderRadius: 4,
    borderWidth: 1,
    borderTopColor: "#2ea7e0"
  },
  opponentText: {
    color: "white",
    fontSize: 22
  },
  gameCreateTime: {
    color: "white",
    fontSize: 14
  },
  iconArrow: {
    position: "absolute",
    paddingRight: 20,
    alignSelf: "flex-end"
  }
});
