import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";

export default class OutFieldLength extends React.Component {
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
    width: 20,
    height: 80,
    borderWidth: 1.3,
    borderRadius: 3
  }
});
