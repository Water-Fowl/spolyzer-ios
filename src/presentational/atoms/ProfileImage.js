import React from "react";
import { Image, StyleSheet } from "react-native";

export default class ProfileImage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.imageSource) {
      this.forceUpdate();
    }
  }
  render() {
    if (this.props.imageSource != null) {
      return (
        <Image
          style={{
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.props.size / 2
          }}
          source={{
            uri: this.props.imageSource,
            cache: "reload"
          }}
        />
      );
    }
    return (
      <Image
        style={{
          opacity: 0.5,
          width: this.props.size,
          height: this.props.size,
          borderRadius: this.props.size / 2
        }}
        source={{ url: "score_create_person.png" }}
      />
    );
  }
}
