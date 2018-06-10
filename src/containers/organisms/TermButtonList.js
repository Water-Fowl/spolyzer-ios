import React from "react";
import {
  StyleSheet, Text, TouchableHighlight, View
} from "react-native";

import { ParametricButton } from "atoms";
import { setTerm } from "../../modules/analysis";
import { mapStateToProps } from "../../modules/mapToProps";
import { connect } from "react-redux";

class TermButtonList extends React.Component {
  constructor(props){
    super(props);
    this.setTerm = this.setTerm.bind(this);
  }

  setTerm(term) {
    this.props.dispatch(setTerm(term));
  }
  render() {
    return (
      <View style={styles.container}>
        <ParametricButton width={60} selectedParams={this.props.analysis.term} callback={this.setTerm} params={0}>Day</ParametricButton>
        <ParametricButton width={60} selectedParams={this.props.analysis.term} callback={this.setTerm} params={1}>Week</ParametricButton>
        <ParametricButton width={60} selectedParams={this.props.analysis.term} callback={this.setTerm} params={2}>Month</ParametricButton>
      </View>
    );
  }
}

export default connect(mapStateToProps)(TermButtonList);

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
    justifyContent: "center"
  }
});
