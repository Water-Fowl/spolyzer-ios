import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import baseEnhancer from "enhances";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";
import {
  NavigateButton
} from "atoms";
import {
  $spolyzerDarkBlue
} from "../../const/color";

class DashboardCreate extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(DashboardCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
