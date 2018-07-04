import React from "react";
import { Image } from "react-native";

export default class AssetsImage extends React.Component {
  constructor(props) {
    super(props);
    Image.getSize({ url: this.props.name }, (width, height) => {
      this.width = width;
      this.height = height;
    });
  }
  render() {
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
