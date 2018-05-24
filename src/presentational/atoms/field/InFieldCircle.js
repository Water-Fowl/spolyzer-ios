import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";

export default class InFieldCircle extends React.Component {
  renderInButton(position, side) {
    if (this.props.renderInButton) {
      return this.props.renderInButton(position, side);
    } else {
      return <View />;
    }
  }

  render() {
    const sizeMagnification = this.props.horizontal ? 1 : 2;
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
        delayPressOut={1}
        onPressOut={() => {
          this.props.callback(this.props.position, this.props.side);
        }}
      >
        {this.renderInButton(this.props.position, this.props.side)}
      </TouchableHighlight>
    );
  }
}
