import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";

export default class InFieldCircle extends React.Component {
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
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 100,
    opacity: 0.3,
    alignSelf: "center"
  }
});
