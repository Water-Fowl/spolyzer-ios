import React from "react";
import { Image } from "react-native";

export default class GameIcon extends React.Component {
  render() {
    return (
      <Image
        source={require("../../assets/img/game_icon.png")}
        style={{
          width: this.props.size,
          height: this.props.size * 0.6
        }}
      />
    );
  }
}
