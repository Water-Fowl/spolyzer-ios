import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";

class RecentlyGame extends React.Component{
  render(){
    return(
      <View style={styles.container} />
    );
  }
}

export default connect()(RecentlyGame);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 34,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 28,
    borderRadius: 3,
    marginTop: 25
  }
});
