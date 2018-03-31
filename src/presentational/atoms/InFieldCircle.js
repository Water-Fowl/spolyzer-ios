import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";

export default class InFieldCircle extends React.Component {
  render() {
    const sizeMagnification = this.props.horizontal? 1 : 2
    return (
      <TouchableHighlight
        style={{
          borderColor: "#2EA7E0",
          backgroundColor: "#2EA7E0",
          height: 30 * sizeMagnification,
          width: 30 * sizeMagnification,
          borderWidth: 1,
          borderRadius: 100,
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
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 100,
    opacity: 0.3,
    alignSelf: "center"
  }
});
