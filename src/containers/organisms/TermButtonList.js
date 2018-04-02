import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import { ParametricButton } from "atoms";
import { setTerm } from "../analysis/actions/set_query";
import { mapStateToProps } from "utils";
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
        <ParametricButton width={60} selectedParams={this.props.analysis.term} callback={this.setTerm} params={1}>Day</ParametricButton>
        <ParametricButton width={60} selectedParams={this.props.analysis.term} callback={this.setTerm} params={2}>Week</ParametricButton>
        <ParametricButton width={60} selectedParams={this.props.analysis.term} callback={this.setTerm} params={3}>Month</ParametricButton>
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
    marginTop: 25,
    justifyContent: "center"
  }
});
