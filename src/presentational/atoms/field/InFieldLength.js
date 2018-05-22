import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";

export default class InFieldLength extends React.Component {
  constructor(props) {
    super(props);
  }
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
          flex: 0.4,
          width: 10 * sizeMagnification,
          borderWidth: 1.3,
          borderRadius: 3,
          opacity: 0.3
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
