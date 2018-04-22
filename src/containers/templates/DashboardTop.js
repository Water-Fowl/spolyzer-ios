import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import baseEnhancer from "enhances";
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";
import {
  NavigateButton
} from "atoms";

class DashboardTop extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.goalListText}>
            目標一覧
          </Text>
          <Text style={styles.compareText}>
            前回{"\n"}比較
          </Text>
          <Text style={styles.achivementText}>
            目標{"\n"}達成度
          </Text>
        </View>
        <View style={styles.listContainer}>
          <ScrollView style={styles.list}>
            <View style={styles.dashboardCard}>
            </View>
          </ScrollView>
        </View>
        <NavigateButton style={styles.navigateButton} text="作成" />
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
    height: "12%"
  },
  goalListText: {
    marginTop: "11%",
    marginLeft: "6%",
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  compareText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: "9%",
    marginLeft: "46%"
  },
  achivementText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: "9%",
    marginLeft: "8%",
    textAlign: "center"
  },
  listContainer: {
    height: "71%",
    borderTopColor: "#0a2444",
    borderBottomColor: "#0a2444",
    borderWidth: 1
  },
  list:{
  },
  dashboardCard:{
    height: 76,
    backgroundColor: "#0a2444"
  },
  navigateButton: {
    marginTop: "7%"
  }
});
