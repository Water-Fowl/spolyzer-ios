import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import baseEnhancer from "enhances";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";
import { NavigateButton } from "atoms";
import { DashboardList } from "organisms";
import { $spolyzerDarkBlue } from "../../const/color";

class DashboardTop extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.aimListTextContainer}>
            <Text style={styles.aimListText}>目標一覧</Text>
          </View>
          <View style={styles.compareTextContainer}>
            <Text style={styles.compareText}>前回{"\n"}比較</Text>
          </View>
          <View style={styles.achivementTextContainer}>
            <Text style={styles.achivementText}>目標{"\n"}達成度</Text>
          </View>
        </View>
        <DashboardList />
        <View style={styles.navigateButtonContainer}>
          <NavigateButton
            style={styles.navigateButton}
            action={() => {
              Actions.DashboardCreate();
            }}
            text="新規作成"
          />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(DashboardTop));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    height: 42,
    paddingTop: 10
  },
  aimListText: {
    flex: 8,
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
    paddingLeft: 15
  },
  compareText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    flex: 1
  },
  achivementText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1
  },
  navigateButton: {
    marginTop: "7%"
  },
  aimListTextContainer: {
    flex: 8,
    height: "100%",
    justifyContent: "center"
  },
  compareTextContainer: {
    flex: 1,
    alignItems: "center"
  },
  achivementTextContainer: {
    flex: 1,
    alignItems: "center"
  },
  navigateButtonContainer: {
    flex: 2
  }
});
