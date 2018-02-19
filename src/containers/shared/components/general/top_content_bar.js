import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class TopContentBar extends React.Component {
  render() {
    return (
      <View style={styles.top_content_bar_container}>
        <Image
          style={styles.top_content_bar_img}
          source={require("../../../../assets/img/top_content_bar.png")}
        />
        <Text style={styles.top_content_bar_text}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top_content_bar_text: {
    color: "#ffffff",
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "transparent",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 7
  },
  top_content_bar_img: {
    alignSelf: "center",
    position: "absolute"
  },
  top_content_bar_container: {
    backgroundColor: "transparent"
  }
});
