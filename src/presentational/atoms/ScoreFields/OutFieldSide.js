import React from "react";
import { TouchableHighlight, View } from "react-native";

export default class OutFieldSide extends React.Component {
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
          borderWidth: 1.3,
          borderRadius: 3,
          width: this.props.width * 0.08 * sizeMagnification,
          height: this.props.height * 0.03 * sizeMagnification,
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
