import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { scoreCreateShotTypeButtonEnhancer } from "./hoc";

class ScoreCreateShotTypeButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={() => {
        this.setShotTypeEvent(this.props.shot_type_id);
        this.hideModalEvent();
      }}
      >
        <Text style={styles.shot_type}>{ this.props.children }</Text>
      </TouchableHighlight>
    );
  }
}
export default connect()(scoreCreateShotTypeButtonEnhancer(ScoreCreateShotTypeButton));
const styles = StyleSheet.create({
  shot_type: {
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
    padding: 5,
    margin: 5,
    color: "white",
    backgroundColor: "#2EA7E0"
  }
});

