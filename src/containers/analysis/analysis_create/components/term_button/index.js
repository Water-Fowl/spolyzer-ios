import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import Button from "./components/button";

export default class TermButton extends React.Component {
  render() {
    return (
      <View style={styles.termFrame}>
        <Button currentTermId={0}>Day</Button>
        <Button currentTermId={1}>Week</Button>
        <Button currentTermId={2}>Month</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  termFrame: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 34,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 57,
    borderRadius: 3,
    marginTop: 25,
    justifyContent: "center"
  }
});
