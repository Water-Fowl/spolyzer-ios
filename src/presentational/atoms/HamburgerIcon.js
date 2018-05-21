import React from "react";
import { Image } from "react-native";

export default class HamburgerIcon extends React.Component {
  render() {
    return (
      <Image
        source={{ url: "hamburger.png" }}
        style={{
          width: 32,
          height: 27
        }}
      />
    );
  }
}
