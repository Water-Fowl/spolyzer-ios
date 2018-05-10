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
  NavigateButton
} from "atoms";
import {DashboardCard} from "molecules";
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
        <View style={styles.mainContainer}>
          <DashboardCard date="4/18" vs="VS 池田吉来・吉川明成" title="シングルス の試合で エリア C.D のクリア の ミス を 4 回 以下 にしたい"/>
          <View style={styles.graghCard}>
          </View>
        </View>
        <View style={styles.gameScoreContainer}>
        </View>
        <View style={styles.navigateButtonContainer}>
          <NavigateButton style={styles.navigateButton} action={() => {Actions.popTo("DashboardTop");}} text="アーカイブ" />
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
    backgroundColor: "transparent",
    flex: 2
  },
  mainContainer: {
  },
  gameScoreContainer: {
    flex: 10
  },
  navigateButtonContainer: {
    flex: 4
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
  graghCard:{
    height: 110,
    backgroundColor: $spolyzerDarkBlue,
    borderTopColor: "rgba(46,167,224,0.3)",
    borderTopWidth: 1
  },
  navigateButton: {
    marginTop: "7%"
  }
});
