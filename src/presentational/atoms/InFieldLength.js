import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";

export default class InFieldLength extends React.Component {
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
  contaier: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    flex: 0.4,
    width: 20,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3
  }
});
