import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import baseEnhancer from "enhances";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";
import { NavigateButton } from "atoms";
import { Field } from "organisms";
import {
  $transparent
} from "../../const/color";

class DashboardCreateAreaSelect extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            エリアをタップして選択してください。
          </Text>
          <Text style={styles.subText}>
            (複数選択可能)
          </Text>
        </View>
        <View style={styles.fieldContainer}>
          <Field horizontal/>
        </View>
        <View style={styles.navigateButtonContainer}>
          <NavigateButton style={styles.navigateButton} action={() => {Actions.popTo("DashboardCreate");}} text="決定" />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(DashboardCreateAreaSelect));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 3
  },
  fieldContainer: {
    flex: 4
  },
  navigateButtonContainer: {
    flex: 5
  },
  mainText: {
    backgroundColor: $transparent,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 60
  },
  subText: {
    backgroundColor: $transparent,
    color: "white",
    fontSize: 18,
    textAlign: "right",
    marginRight: 70
  },
  navigateButton: {
    marginTop: "20%"
  }
});
