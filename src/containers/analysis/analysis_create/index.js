import React from "react";
import { Actions } from "react-native-router-flux";
import {
  NavigateButton,
  TopContentBar
} from "components";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";

import enhancer from "./hoc";
import {
  GameTypeButton,
  ShotTypeButton,
  TermButton
} from "./components";
import { getGames } from "../actions/get_games";

class AnalysisCreate extends React.Component {
  constructor(props) {
    super(props);
    this.getGameEvent.bind(this);
  }
  getGameEvent() {
    const { dispatch } = this.props;
    const sampleParams = "1";
    dispatch(getGames(sampleParams));
  }
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>検索条件</TopContentBar>
        <View style={styles.rowContainer}>
          <Text style={styles.gameStyleText}>
            試合形式
          </Text>
          <GameTypeButton />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.shotTypeText}>
            球種
          </Text>
          <ShotTypeButton />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.termText}>
            期間
          </Text>
          <TermButton />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.opponentText}>
            対戦相手
          </Text>
          <TouchableOpacity onPress={Actions.userSearch}>
            <View style={styles.opponentFrame} />
          </TouchableOpacity>
          <View style={styles.opponentFrame} />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.gameSelectText}>
            試合選択
          </Text>
          <View style={styles.gameSelectFrame} />
        </View>
        <NavigateButton action={() => {this.getGameEvent();}} style={styles.analyze} text="分析" />
      </View>
    );
  }
}
export default connect()(enhancer(AnalysisCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "row"
  },
  gameStyleText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 45,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  shotTypeText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 68,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  termText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 30,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  opponentText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 32,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginRight: 22
  },
  opponentFrame: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 34,
    width: 108,
    borderWidth: 1.5,
    marginLeft: 6,
    borderRadius: 3,
    marginTop: 25
  },
  gameSelectText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 36,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  gameSelectFrame: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 34,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 28,
    borderRadius: 3,
    marginTop: 25
  },
  analyze: {
    alignSelf: "center",
    marginTop: 48
  }
});
