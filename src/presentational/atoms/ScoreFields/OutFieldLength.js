import React from "react";
import { StyleSheet, TouchableHighlight, View, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export default class OutFieldLength extends React.Component {
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
          borderColor: "#A29A67",
          backgroundColor: "#A29A67",
          width: width * 0.019 * sizeMagnification,
          height: height * 0.13 * sizeMagnification,
          borderWidth: 1.3,
          borderRadius: 3
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
