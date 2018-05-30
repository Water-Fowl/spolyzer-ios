import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

import { ParametricButton } from "atoms";
import { mapStateToProps } from "../../modules/mapToProps";
import { connect } from "react-redux";
import { setGameResult } from "../../modules/analysis";

class GameResultButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.setGameResult = this.setGameResult.bind(this);
  }

  setGameResult(result) {
    this.props.dispatch(setGameResult(result));
  }
  render() {
    return (
      <View style={styles.container}>
        <ParametricButton
          width={60}
          selectedParams={this.props.analysis.result}
          callback={this.setGameResult}
          params={0}
        >
          全て
        </ParametricButton>
        <ParametricButton
          width={60}
          selectedParams={this.props.analysis.result}
          callback={this.setGameResult}
          params={1}
        >
          勝ち
        </ParametricButton>
        <ParametricButton
          width={60}
          selectedParams={this.props.analysis.result}
          callback={this.setGameResult}
          params={2}
        >
          負け
        </ParametricButton>
      </View>
    );
  }
}

export default connect(mapStateToProps)(GameResultButtonList);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 34,
    width: 200,
    borderWidth: 1.5,
    marginLeft: 57,
    borderRadius: 3,
    marginTop: 25,
    justifyContent: "center"
  }
});
