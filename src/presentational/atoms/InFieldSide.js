import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";
export default class InFieldSide extends React.Component {
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
    height: 20,
    width: 80,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3,
    alignSelf: "center"
  }
});
