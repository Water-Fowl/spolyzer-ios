import React from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View } from "react-native";
import {
  Background,
  TopBar,
  TopContentBar,
  NavigateButton,
  NavBar,
} from "components";
import baseHigherOrderComponentEnhancer from "enhances";
import Orientation from "react-native-orientation";
import { Actions } from "react-native-router-flux";

class ScoreGameCreate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>試合設定</TopContentBar>
        <View style={styles.align_items_center} >
          <View style={styles.game_setting_border} >
            <View style={styles.game_setting_table}>
              <Text style={styles.score_game_create_opponents}>対戦者</Text>
              <View style={styles.game_setting_table_inner}>
                <View style={styles.game_setting_table_inner_left}>
                  <View style={styles.circle} />
                  <View style={styles.textbox} />
                  <View style={styles.circle} />
                  <View style={styles.textbox} />
                </View>
                <View style={styles.game_setting_table_inner_center}>
                  <Image
                    source={require("../../../assets/img/game_create_vs.png")}
                    style={styles.vs_position}
                  />
                </View>
                <View style={styles.game_setting_inner_right} >
                  <View style={styles.circle} />
                  <View style={styles.textbox} />
                  <View style={styles.circle} />
                  <View style={styles.textbox} />
                </View>
              </View>
            </View>
          </View>
          <NavigateButton action={Actions.score_create} style={styles.button_style} text="試合開始" />
        </View>
      </View>
    );
  }
}
export default baseHigherOrderComponentEnhancer(ScoreGameCreate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  align_items_center: {
    alignItems: "center",
  },
  game_setting_border: {
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 2.5,
    marginTop: 30,
    borderColor: "rgb(20, 35, 70)",
  },
  game_setting_table: {
    width: 320,
    height: 270,
    backgroundColor: "rgb(20, 35, 70)",
    justifyContent: "center",
    opacity: 0.7,
  },
  game_setting_table_inner: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 280,
    height: 240,
  },
  game_setting_table_inner_left: {
    flex: 1,
    width: 70,
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
  game_setting_table_inner_center: {
    flex: 1,
    width: 30,
    height: 220,
    alignItems: "center",
  },
  game_setting_table_inner_right: {
    flex: 1,
    width: 70,
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
  game_setting_under_table: {
    width: 300,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
  },
  column_bar_text: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  score_game_create_vs: {
    fontWeight: "bold",
    color: "skyblue",
    paddingTop: 70,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  score_game_create_opponents: {
    padding: 0,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 240,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  circle: {
    borderColor: "#2EA7E0",
    height: 75,
    width: 75,
    borderWidth: 2,
    borderRadius: 100,
    opacity: 0.5,
    alignSelf: "center",
    margin: 7,
  },
  button_style: {
    marginTop: 80,
  },
  textbox: {
    borderColor: "#2EA7E0",
    height: 20,
    width: 88,
    borderWidth: 1.5,
    borderRadius: 5,
    opacity: 0.5,
    alignSelf: "center",
  },
  vs_position: {
    height: 27,
    width: 35,
    marginTop: 100,
  },
});
