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
import {
  RowItem
} from "react-native-ios-kit";
import {
  $spolyzerBlue,
  $spolyzerDarkBlue,
  $transparent
} from "../../const/color";

class DashboardView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.aimListTextContainer}>
          </View>
          <View style={styles.compareTextContainer}>
            <Text style={styles.compareText}>
              前回{"\n"}比較
            </Text>
          </View>
          <View style={styles.achivementTextContainer}>
            <Text style={styles.achivementText}>
              目標{"\n"}達成度
            </Text>
          </View>
        </View>
        <View style={styles.dashboardCard}>
          <View style={styles.cardMainConteiner}>
            <View style={styles.cardInformationContainer}>
              <Text style={styles.cardDateText}>
                4/18
              </Text>
              <Text style={styles.cardVsText}>
                VS 池田吉来・吉川明成
              </Text>
            </View>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitleText}>
                シングルス の試合で エリア C.D の{"\n"} クリア の ミス を 4 回 以下 にしたい
              </Text>
            </View>
          </View>
          <View style={styles.cardCompareContainer}>
            <Image source={require("../../assets/img/compare_up.png")} />
          </View>
          <View style={styles.cardAchivementContainer}>
            <Text style={styles.percentText}>
              %
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(DashboardView));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flexDirection: "row",
    backgroundColor: "transparent"
  },
  compareText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold"
  },
  achivementText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center"
  },
  aimListTextContainer: {
    flex: 8
  },
  compareTextContainer: {
    flex: 1,
    marginTop: 24,
    alignItems: "center"
  },
  achivementTextContainer: {
    flex: 1,
    marginTop: 24,
    alignItems: "center"
  },
  dashboardCard:{
    height: 76,
    backgroundColor: $spolyzerDarkBlue,
    flexDirection: "row"
  },
  cardMainConteiner: {
    flex: 8,
    borderRightColor: "rgba(46,167,224,0.3)",
    borderRightWidth: 1
  },
  cardCompareContainer: {
    flex: 1,
    borderRightColor: "rgba(46,167,224,0.3)",
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardAchivementContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardInformationContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  cardTitleContainer: {
    flex: 2,
    justifyContent: "center"
  },
  cardDateText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 20
  },
  cardVsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 16
  },
  cardTitleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
  percentText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});
