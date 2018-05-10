import React from "react";
import { $spolyzerDarkBlue, $transparent } from "const";
import {
  StyleSheet, Text, TouchableHighlight, View
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
    );
  }
}

export default connect(mapStateToProps)(GameTypeButtonList);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: $spolyzerDarkBlue,
    borderTopColor: $spolyzerDarkBlue,
    borderLeftColor: $spolyzerDarkBlue,
    borderBottomColor: $spolyzerDarkBlue,
    height: 34,
    width: 220,
    borderWidth: 1.5,
    marginLeft: 30,
    borderRadius: 3,
    marginTop: 37,
    justifyContent: "center"
  }
});
