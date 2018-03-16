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
  Graph,
  InArea,
  InFieldCircle,
  InFieldLength,
  InFieldSide,
  OutArea,
  OutFieldLength,
  OutFieldSide
} from "./components";

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
            <InArea minPosition={7} maxPosition={12}/>
            <OutArea minPosition={1} maxPosition={6}/>
            <Image style={styles.fieldLine} source={require("../../../assets/img/field-line.png")} />
            <View style={styles.overContainer}>
              <View style={styles.overOutFieldSideContainer}>
                <OutFieldSide side={0}/>
                <OutFieldSide side={0}/>
              </View>
              <View style={styles.overOutFieldSideContainer}>
                <OutFieldSide side={1}/>
                <OutFieldSide side={1}/>
              </View>
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.outFieldLengthContainer}>
                <OutFieldLength side={0}/>
                <OutFieldLength side={0}/>
              </View>
              <View style={styles.inFieldContainer}>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength side={0}/>
                  <InFieldLength side={0}/>
                </View>
                <View style={styles.inFieldSideContainer}>
                  <InFieldSide side={0}/>
                  <View style={styles.inFieldCircleContainer}>
                    <InFieldCircle side={0}/>
                  </View>
                  <InFieldSide side={0}/>
                </View>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength side={0}/>
                  <InFieldLength side={0}/>
                </View>
              </View>
              <View style={styles.inFieldContainer}>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength side={1}/>
                  <InFieldLength side={1}/>
                </View>
                <View style={styles.inFieldSideContainer}>
                  <InFieldSide side={1}/>
                  <View style={styles.inFieldCircleContainer}>
                    <InFieldCircle side={1}  />
                  </View>
                  <InFieldSide side={1} />
                </View>
                <View style={styles.inFieldLengthContainer}>
                  <InFieldLength side={1} />
                  <InFieldLength side={1} />
                </View>
              </View>
              <View style={styles.outFieldLengthContainer}>
                <OutFieldLength side={1} />
                <OutFieldLength side={1} />
              </View>
            </View>
            <View style={styles.underContainer}>
              <View style={styles.underOutFieldSideContainer}>
                <OutFieldSide side={0} />
                <OutFieldSide side={0}/>
              </View>
              <View style={styles.underOutFieldSideContainer}>
                <OutFieldSide side={1}/>
                <OutFieldSide side={1}/>
              </View>
            </View>
          </View>
          <Graph />
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
