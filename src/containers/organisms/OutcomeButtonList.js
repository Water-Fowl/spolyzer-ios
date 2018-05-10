import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

import { ParametricButton } from "atoms";
import { mapStateToProps } from "utils";
import { connect } from "react-redux";
import { setGameOutcome } from "../../modules/analysis";

class OutcomeButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.setGameOutcome = this.setGameOutcome.bind(this);
  }

  setGameOutcome(outcome) {
    this.props.dispatch(setGameOutcome(outcome));
  }
  render() {
    return (
      <View style={styles.container}>
        <ParametricButton
          width={60}
          selectedParams={this.props.analysis.outcome}
          callback={this.setGameOutcome}
          params={"all"}
        >
          全て
        </ParametricButton>
        <ParametricButton
          width={60}
          selectedParams={this.props.analysis.outcome}
          callback={this.setGameOutcome}
          params={"win"}
        >
          勝ち
        </ParametricButton>
        <ParametricButton
          width={60}
          selectedParams={this.props.analysis.outcome}
          callback={this.setGameOutcome}
          params={"lose"}
        >
          負け
        </ParametricButton>
      </View>
    );
  }
}

export default connect(mapStateToProps)(OutcomeButtonList);

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
    borderRadius: 3,
    marginTop: 25,
    justifyContent: "center"
  }
});
