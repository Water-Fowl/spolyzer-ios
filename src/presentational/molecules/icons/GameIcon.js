import React from "react";
import { AssetsImage } from "atoms";

export default class GameIcon extends React.Component {
  render() {
    return (
      <AssetsImage
        name="game_icon.png"
        width={this.props.size * 50 || 50}
        height={this.props.size * 30 || 30}
      />
    );
  }
}
