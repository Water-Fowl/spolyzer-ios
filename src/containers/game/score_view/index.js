import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory-native";
import { Actions, ActionConst } from "react-native-router-flux";
import {
  TopContentBar,
} from "components";
import {
  InFieldCircle,
  InFieldLength,
  InFieldSide,
  OutFieldSide,
  OutFieldLength,
} from "./components";

import baseEnhancer from "enhances";

const data = [
  /* TODO カタカナ崩れの対策 */
  { shot_type: "スマッシュ", counts: 1 },
  { shot_type: "ドロップ", counts: 2 },
  { shot_type: "ネットイン", counts: 3 },
  { shot_type: "クリアー", counts: 4 },
  { shot_type: "ヘアピン", counts: 5 },
  { shot_type: "ドライブ", counts: 6 },
];

class ScoreView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>単分析結果</TopContentBar>
        <ScrollView>
          <View style={styles.user_name_container}>
            <Text style={styles.user_name_text}>Name</Text>
            <Text style={styles.user_name_text}>Name</Text>
          </View>
          <View style={styles.game_informations_contaier}>
            <View style={styles.game_information_text_container}>
              <Text style={styles.win_loss_text}>Win</Text>
              <Text style={styles.score_text}>20</Text>
            </View>
            <View style={styles.game_information_text_container}>
              <Text style={styles.score_text}>15</Text>
              <Text style={styles.win_loss_text}>Lose</Text>
            </View>
          </View>
          <View style={styles.field}>
            <Image style={styles.field_line} source={require("../../../assets/img/field-line.png")} />
            <View style={styles.over_container}>
              <View style={styles.over_out_field_side_container}>
                <OutFieldSide position={1} side={1} />
                <OutFieldSide />

              </View>
              <View style={styles.over_out_field_side_container}>
                <OutFieldSide />
                <OutFieldSide />
              </View>
            </View>
            <View style={styles.middle_container}>
              <View style={styles.out_field_length_container}>
                <OutFieldLength />
                <OutFieldLength />
              </View>
              <View style={styles.in_field_container}>
                <View style={styles.in_field_length_container}>
                  <InFieldLength />
                  <InFieldLength />
                </View>
                <View style={styles.in_field_side_container}>
                  <InFieldSide />
                  <View style={styles.in_field_circle_container}>
                    <InFieldCircle />
                  </View>
                  <InFieldSide />
                </View>
                <View style={styles.in_field_length_container}>
                  <InFieldLength />
                  <InFieldLength />
                </View>
              </View>
              <View style={styles.in_field_container}>
                <View style={styles.in_field_length_container}>
                  <InFieldLength />
                  <InFieldLength />
                </View>
                <View style={styles.in_field_side_container}>
                  <InFieldSide />
                  <View style={styles.in_field_circle_container}>
                    <InFieldCircle />
                  </View>
                  <InFieldSide />
                </View>
                <View style={styles.in_field_length_container}>
                  <InFieldLength />
                  <InFieldLength />
                </View>
              </View>
              <View style={styles.out_field_length_container}>
                <OutFieldLength />
                <OutFieldLength />
              </View>
            </View>
            <View style={styles.under_container}>
              <View style={styles.under_out_field_side_container}>
                <OutFieldSide position={1} side={1} />
                <OutFieldSide />
              </View>
              <View style={styles.under_out_field_side_container}>
                <OutFieldSide />
                <OutFieldSide />
              </View>
            </View>
          </View>
          <View style={styles.graph_container}>
            <VictoryChart
              width={320}
              height={240}
              theme={VictoryTheme.material}
              padding={{
                left: 25, right: 30, top: 20, bottom: 40,
              }}
              domainPadding={{ x: [20, 0] }}
            >
              <VictoryAxis
                dependentAxis	/* Y軸 */
                style={{
                  grid: {
                    stroke: "#035f89",
                  },
                  axis: {
                    stroke: "transparent",
                  },
                  tickLabels: {
                    fontSize: 10,
                    fill: "white",
                  },
                }}
                tickFormat={(tick) => { /* 整数目盛のみ表示 */
                  if (tick === Math.round(tick)) return String(tick);
                  return "";
                }}
              />
              <VictoryAxis	/* X軸 */
                style={{
                  color: "white",
                  grid: { stroke: "transparent" },
                  axis: {
                    stroke: "#2EA7E0",
                  },
                  tickLabels: { fontSize: 10, fill: "white" },
                }}
              />
              <VictoryBar
                style={{
                  data: {
                    fill: "#2EA7E0",
                  },
                }}
                animate={{	/* 表示のアニメーション */
                  duration: 400,
                  onLoad: { duration: 300 },
                }}
                data={data}
                alignment="start"
                x="shot_type"
                y="counts"
              />
            </VictoryChart>
          </View>
          <View style={styles.back_button_container}>
            <TouchableOpacity onPress={() => { Actions.popTo("game_create"); }}>
              <Text style={styles.back_button_text}>
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
    flex: 1,
  },
  user_name_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  user_name_text: {
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
    borderWidth: 1,
  },
  game_information_text_container: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  game_informations_contaier: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  game_information_text_container: {
    flex: 0.4,
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: "row",
  },
  score_text: {
    color: "white",
    textAlign: "center",
    backgroundColor: "transparent",
    borderColor: "#28a8de",
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 30,
    padding: 3,
  },
  win_loss_text: {
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
    marginRight: 5,
  },
  field: {
    alignSelf: "center",
    width: 330,
    height: 170,
    marginTop: 26,
  },
  field_line: {
    position: "absolute",
    alignSelf: "center",
    height: 170,
    backfaceVisibility: "hidden",
    zIndex: 3,
    resizeMode: "contain",
  },
  in_field_area_container: {
    width: 330,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
  },
  in_field_area: {
    flex: 0.4,
    alignSelf: "center",
    backgroundColor: "black",
    height: 138,
    marginTop: 16,
    marginBottom: 16,
  },
  out_field_area_container: {
    width: 330,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  out_field_area: {
    alignSelf: "center",
    flex: 0.45,
    backgroundColor: "#FAEE00",
    opacity: 0.3,
    height: 170,
  },
  over_container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  over_out_field_side_container: {
    alignSelf: "flex-start",
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  middle_container: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-between",
  },
  under_container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  out_field_length_container: {
    marginLeft: 4,
    marginRight: 4,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  in_field_container: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  in_field_length_container: {
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  in_field_circle_container: {
    justifyContent: "space-between",
  },
  in_field_side_container: {
    marginLeft: 6,
    marginRight: 6,
    justifyContent: "space-between",
  },
  under_out_field_side_container: {
    alignSelf: "flex-end",
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  graph_container: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 240,
    width: 320,
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 20,
  },
  back_button_container: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 34,
    width: 154,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 190,
    marginTop: 8,
  },
  back_button_text: {
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
    textAlign: "center",
    paddingTop: 7,
    paddingLeft: 20,
  },
});
