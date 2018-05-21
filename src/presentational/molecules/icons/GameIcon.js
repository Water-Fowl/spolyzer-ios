import React from "react";
import { AssetsImage } from "atoms";

export default class GameIcon extends React.Component {
  render() {
    return (
      <AssetsImage
        name="game_icon.png"
        width={this.props.size}
        height={this.props.size * 0.6}
      />
    );
  }
}
