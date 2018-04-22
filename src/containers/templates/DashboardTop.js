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
              <View style={styles.cardMainConteiner}>
                <View style={styles.cardInformationView}>
                  <Text style={styles.cardDateText}>
                    4/18
                  </Text>
                  <Text style={styles.cardVsText}>
                    VS 池田吉来・吉川明成
                  </Text>
                </View>
                <View style={styles.cardTitleView}>
                  <Text style={styles.cardTitleText}>
                    シングルス の試合で エリア C.D の{"\n"} クリア の ミス を 4 回 以下 にしたい
                  </Text>
                </View>
              </View>
              <View style={styles.cardCompareContainer}>
                <Image source={require("../../assets/img/compare_up.png")} />
              </View>
              <View style={styles.cardAchivementContainer}>
                <Text style={styles.achivementScoreText}>
                    30
                </Text>
                <Text style={styles.percentText}>
                    %
                </Text>
              </View>
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
    marginLeft: "44%"
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
    backgroundColor: "#0a2444",
    flexDirection: "row"
  },
  cardMainConteiner: {
    width: "69%",
    borderRightColor: "rgba(46,167,224,0.4)",
    borderRightWidth: 1
  },
  cardCompareContainer: {
    width: "13%",
    borderRightColor: "rgba(46,167,224,0.4)",
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardAchivementContainer: {
    width: "18%",
    flexDirection: "row"
  },
  cardInformationView: {
    height: "36%",
    flexDirection: "row",
    alignItems: "center"
  },
  cardTitleView: {
    height: "64%",
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
  achivementScoreText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 8,
    alignSelf: "center"
  },
  percentText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 2,
    marginTop: 30
  },
  navigateButton: {
    marginTop: "7%"
  }
});
