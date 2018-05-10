import React from "react";
import {
  $spolyzerDarkBlue,
  $transparent
} from "const";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { connect } from "react-redux";

import { ParametricButton } from "atoms";
import { mapStateToProps } from "utils";
import { setGameType } from "../../modules/analysis";

class GameTypeButtonList extends React.Component {
  constructor(props){
    super(props);
    this.setGameType = this.setGameType.bind(this);
  }
  setGameType(gameUserCount) {
    this.props.dispatch(setGameType(gameUserCount));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.gameStyleText}>
          試合形式
        </Text>
        <View style={styles.gameTypeButtonListContainer}>
          <ParametricButton
            width={90}
            selectedParams={this.props.analysis.gameUserCount}
            callback={this.setGameType}
            params={1}
          >
            シングルス
          </ParametricButton>
          <ParametricButton
            width={90}
            selectedParams={this.props.analysis.gameUserCount}
            callback={this.setGameType}
            params={2}
          >
            ダブルス
          </ParametricButton>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(GameTypeButtonList);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  gameTypeButtonListContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderColor: $spolyzerDarkBlue,
    height: 34,
    width: 220,
    borderWidth: 1.5,
    marginLeft: 30,
    borderRadius: 3,
    marginTop: 37,
    justifyContent: "center"
  },
  gameStyleText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 45,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start"
  }
});
