import React from "react";
import {
  Image,
  StyleSheet,
  View
} from "react-native";

export default class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image  style={{width:117,height:36}} source={{ url: "spolyzer_header.png" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "rgba(46, 167, 224, 0.1)",
    height: 70,
    justifyContent: "flex-end",
    paddingLeft: 20,
    paddingBottom: 5
  }
});
