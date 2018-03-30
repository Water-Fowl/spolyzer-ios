import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";
import { connect } from "react-redux";

export default class OutFieldSide extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={() => {
          this.props.callback()
        }}
      >
        <View />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#A29A67",
    backgroundColor: "#A29A67",
    borderWidth: 1.3,
    borderRadius: 3,
    width: 90,
    height: 20,
    alignSelf: "center"
  }
});
