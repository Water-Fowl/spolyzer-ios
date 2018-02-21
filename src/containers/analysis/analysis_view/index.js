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
  VictoryTheme
} from "victory-native";

import {
  InArea,
  InFieldCircle,
  InFieldLength,
  InFieldSide,
  OutArea,
  OutFieldLength,
  OutFieldSide
} from "./components";

const data = [
  { position: "A", counts: 1 },
  { position: "B", counts: 2 },
  { position: "C", counts: 3 },
  { position: "D", counts: 4 },
  { position: "E", counts: 5 },
  { position: "F", counts: 6 }
];

class AnalysisView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>複合分析結果</TopContentBar>
        <ScrollView>
          <View style={styles.analysisInformationContiner}>
            <Text style={styles.vsText}>vs</Text>
            <View style={styles.nameOutsideContainer}>
              <View style={styles.nameInsideContainer}>
                <Image
                  source={require("../../../assets/img/score_create_person.png")}
                  style={styles.personImage}
                />
                <Text style={styles.opponentName}>
                  池田社長
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.optionContainer}>
            <View style={styles.option_textContainer}>
              <Text style={styles.optionText}>
                １日トータル
              </Text>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                球種
              </Text>
            </View>
            <View style={styles.option_textContainer}>
              <Text style={styles.optionText}>
                負け試合
              </Text>
            </View>
          </View>
          <View style={styles.field}>
            <Image style={styles.fieldLine} source={require("../../../assets/img/field-line.png")} />
            <InArea />
            <OutArea />
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
                dependentAxis
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
                /* 整数目盛りのみを表示 */
                tickFormat={(tick) => {
                  if (tick === Math.round(tick)) return String(tick);
                  return "";
                }}
              />
              <VictoryAxis
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
                animate={{
                  duration: 400,
                  onLoad: { duration: 300 }
                }}
                data={data}
                alignment="start"
                x="position"
                y="counts"
              />
            </VictoryChart>
          </View>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => {
              Actions.analysisCreate({ type: ActionConst.BACK_ACTION });
            }}
            >
              <Text style={styles.backButtonText}>
                検索条件に戻る
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default baseEnhancer(AnalysisView);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vsText: {
    fontWeight: "bold",
    color: "skyblue",
    fontSize: 26,
    alignSelf: "flex-start",
    marginTop: 16,
    marginLeft: 206,
    backgroundColor: "transparent"
  },
  analysisInformationContiner: {
    flexDirection: "row"
  },
  nameOutsideContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 30,
    width: 104,
    borderWidth: 1,
    marginLeft: 6,
    borderRadius: 4,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  nameInsideContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 26,
    width: 100,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row"
  },
  personImage: {
    marginTop: 2,
    marginLeft: 8,
    height: 20,
    width: 20,
    opacity: 0.5
  },
  opponentName: {
    backgroundColor: "transparent",
    color: "#ffffff",
    marginTop: 7,
    marginLeft: 7,
    fontWeight: "bold",
    fontSize: 12
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: 310,
    marginTop: 4
  },
  optionTextContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 32,
    width: 96,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  optionText: {
    backgroundColor: "#0a2444",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    height: 26,
    width: 90,
    borderRadius: 4,
    textAlign: "center",
    paddingTop: 5
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
