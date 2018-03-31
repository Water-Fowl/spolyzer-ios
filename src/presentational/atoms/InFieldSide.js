import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";
export default class InFieldSide extends React.Component {
  render() {
    const sizeMagnification = this.props.horizontal? 1 : 2
    return (
      <TouchableHighlight
        style={{
          borderColor: "#2EA7E0",
          backgroundColor: "#2EA7E0",
          height: 10 * sizeMagnification,
          width: 40 * sizeMagnification,
          borderWidth: 1.3,
          borderRadius: 3,
          opacity: 0.3,
          alignSelf: "center"
        }}
        onPress={() => {
          this.props.callback(this.props.position, this.props.side)
        }}
      >
        {this.props.renderInButton(this.props.position, this.props.side)}
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 10,
    width: 40,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3,
    alignSelf: "center"
  }
});
