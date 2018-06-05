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
      <View style={styles.topContentBarContainer}>
        <Image
          style={styles.topContentBarImg}
          source={{ url: "top_content_bar.png" }}
        />
        <Text style={styles.topContentBarText}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContentBarText: {
    color: "#ffffff",
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "transparent",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 7
  },
  topContentBarImg: {
    alignSelf: "center",
    position: "absolute",
    width:158,
    height:32
  },
  topContentBarContainer: {
    backgroundColor: "transparent"
  }
});
