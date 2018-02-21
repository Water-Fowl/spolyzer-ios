import React from "react";
import baseEnhancer from "enhances";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  TopContentBar
} from "components";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme
} from "victory-native";

import {
  InFieldCircle,
  InFieldLength,
  InFieldSide,
  OutFieldLength,
  OutFieldSide
} from "./components";

const data = [
  /* TODO カタカナ崩れの対策 */
  { shotType: "スマッシュ", counts: 1 },
  { shotType: "ドロップ", counts: 2 },
  { shotType: "ネットイン", counts: 3 },
  { shotType: "クリアー", counts: 4 },
  { shotType: "ヘアピン", counts: 5 },
  { shotType: "ドライブ", counts: 6 }
];

class ScoreView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>単分析結果</TopContentBar>
        <ScrollView>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>Name</Text>
            <Text style={styles.userNameText}>Name</Text>
          </View>
          <View style={styles.gameInformationsContaier}>
            <View style={styles.gameInformationTextContainer}>
              <Text style={styles.winLossText}>Win</Text>
              <Text style={styles.scoreText}>20</Text>
            </View>
            <View style={styles.gameInformationTextContainer}>
              <Text style={styles.scoreText}>15</Text>
              <Text style={styles.winLossText}>Lose</Text>
            </View>
          </View>
          <View style={styles.field}>
            <Image style={styles.fieldLine} source={require("../../../assets/img/field-line.png")} />
            <View style={styles.overContainer}>
              <View style={styles.overOutFieldSideContainer}>
                <OutFieldSide position={1} side={1} />
                <OutFieldSide />

              </View>
              <View style={styles.overOutFieldSideContainer}>
                <OutFieldSide />
                <OutFieldSide />
              </View>
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.outFieldLengthContainer}>
                <OutFieldLength />
                <OutFieldLength />
              </View>
              <View style={styles.inFieldContainer}>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength />
                  <InFieldLength />
                </View>
                <View style={styles.inFieldSideContainer}>
                  <InFieldSide />
                  <View style={styles.inFieldCircleContainer}>
                    <InFieldCircle />
                  </View>
                  <InFieldSide />
                </View>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength />
                  <InFieldLength />
                </View>
              </View>
              <View style={styles.inFieldContainer}>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength />
                  <InFieldLength />
                </View>
                <View style={styles.inFieldSideContainer}>
                  <InFieldSide />
                  <View style={styles.inFieldCircleContainer}>
                    <InFieldCircle />
                  </View>
                  <InFieldSide />
                </View>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength />
                  <InFieldLength />
                </View>
              </View>
              <View style={styles.outFieldLengthContainer}>
                <OutFieldLength />
                <OutFieldLength />
              </View>
            </View>
            <View style={styles.underContainer}>
              <View style={styles.underOutFieldSideContainer}>
                <OutFieldSide position={1} side={1} />
                <OutFieldSide />
              </View>
              <View style={styles.underOutFieldSideContainer}>
                <OutFieldSide />
                <OutFieldSide />
              </View>
            </View>
          </View>
          <View style={styles.graphContainer}>
            <VictoryChart
              width={320}
              height={240}
              theme={VictoryTheme.material}
              padding={{
                left: 25, right: 30, top: 20, bottom: 40
              }}
              domainPadding={{ x: [20, 0] }}
            >
              <VictoryAxis
                dependentAxis	/* Y軸 */
                style={{
                  grid: {
                    stroke: "#035f89"
                  },
                  axis: {
                    stroke: "transparent"
                  },
                  tickLabels: {
                    fontSize: 10,
                    fill: "white"
                  }
                }}
                tickFormat={(tick) => { /* 整数目盛のみ表示 */
                  if (tick === Math.round(tick)) return String(tick);
                  return "";
                }}
              />
              <VictoryAxis	/* X軸 */
                style={{
                  grid: { stroke: "transparent" },
                  axis: {
                    stroke: "#2EA7E0"
                  },
                  tickLabels: { fontSize: 10, fill: "white" }
                }}
              />
              <VictoryBar
                style={{
                  data: {
                    fill: "#2EA7E0"
                  }
                }}
                animate={{	/* 表示のアニメーション */
                  duration: 400,
                  onLoad: { duration: 300 }
                }}
                data={data}
                alignment="start"
                x="shotType"
                y="counts"
              />
            </VictoryChart>
          </View>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => { Actions.popTo("gameCreate"); }}>
              <Text style={styles.backButtonText}>
                保存して終了
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default baseEnhancer(ScoreView);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
  userNameText: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    flex: 0.4,
    fontSize: 20,
    backgroundColor: "transparent",
    borderColor: "#28a8de",
    borderRadius: 3,
    borderWidth: 1
  },
  gameInformationTextContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20
  },
  gameInformationsContaier: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8
  },
  gameInformationTextContainer: {
    flex: 0.4,
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: "row"
  },
  scoreText: {
    color: "white",
    textAlign: "center",
    backgroundColor: "transparent",
    borderColor: "#28a8de",
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 30,
    padding: 3
  },
  winLossText: {
    alignSelf: "flex-end",
    color: "white",
    textAlign: "center",
    backgroundColor: "transparent",
    borderRadius: 3,
    borderColor: "#28a8de",
    borderWidth: 1,
    fontSize: 10,
    padding: 3,
    marginLeft: 5,
    marginRight: 5
  },
  field: {
    alignSelf: "center",
    width: 330,
    height: 170,
    marginTop: 26
  },
  fieldLine: {
    position: "absolute",
    alignSelf: "center",
    height: 170,
    backfaceVisibility: "hidden",
    zIndex: 3,
    resizeMode: "contain"
  },
  overContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  overOutFieldSideContainer: {
    alignSelf: "flex-start",
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  middleContainer: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-between"
  },
  underContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  outFieldLengthContainer: {
    marginLeft: 4,
    marginRight: 4,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  inFieldContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  inFieldLengthContainer: {
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  inFieldCircleContainer: {
    justifyContent: "space-between"
  },
  inFieldSideContainer: {
    marginLeft: 6,
    marginRight: 6,
    justifyContent: "space-between"
  },
  underOutFieldSideContainer: {
    alignSelf: "flex-end",
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  graphContainer: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 240,
    width: 320,
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 20
  },
  backButtonContainer: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 34,
    width: 154,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 190,
    marginTop: 8
  },
  backButtonText: {
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
    textAlign: "center",
    paddingTop: 7,
    paddingLeft: 20
  }
});
