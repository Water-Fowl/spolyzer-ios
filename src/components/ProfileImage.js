import React from "react";
import {
  Image,
  StyleSheet
} from "react-native";

export default class ProfileImage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.imageSource){
      this.forceUpdate();
    }
  }
  render() {
    if (this.props.imageSource != null) {
      return (
        <Image
          style={{
            opacity: 0.5,
            width: this.props.size,
            height: this.props.size,
            borderRadius: 50,
          }}
          source={{ uri: this.props.imageSource }} />
      );
    }
    return (
      <Image
        style={{
          opacity: 0.5,
          width: this.props.size,
          height: this.props.size,
          borderRadius: 50,
        }}
        source={require("../assets/img/score_create_person.png")}
        />
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    marginLeft: 10,
    opacity: 0.5,
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

