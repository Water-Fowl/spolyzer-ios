import React from "react";
import { Image } from "react-native";

export default class AssetsImage extends React.Component {
  render() {
    let width, height;
    Image.getSize({ url: this.props.name }, (width, height) => {
      this.width = width;
      this.height = height;
    });
    return (
      <Image
        source={{ url: this.props.name }}
        style={{
          width: this.props.width || this.width,
          height: this.props.height || this.height
        }}
      />
    );
  }
}
