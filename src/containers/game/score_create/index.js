import Orientation from "react-native-orientation";
import React from "react";
import { Actions } from "react-native-router-flux";
import {
  BackgroundImage,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TriangleCorner,
  View
} from "react-native";
import {
  LandScapeBackground,
  TopContentBar
} from "components";
import {
  connect
} from "react-redux";

import enhancer from "./hoc";
import {
  InFieldCircle,
  InFieldLength,
  InFieldSide,
  Modal,
  OutFieldLength,
  OutFieldSide
} from "./components";

class ScoreCreate extends React.Component {
  render() {
    return (
      <View style={{
        /* eslint react-native/no-inline-styles: 0 */
        alignItems: "center",
        width: this.state.width,
        height: this.state.height
      }}
      >
        <Modal visible={this.props.score_create_modal} />
        <LandScapeBackground />
        <TopContentBar>スコアシート</TopContentBar>
        <View style={styles.score_information_bar}>
          <View style={styles.score_information_container}>
            <View style={styles.score_information_user_name_container}>
              <Text style={styles.score_information_user_name}>Name</Text>
            </View>
            <View style={styles.score_information_point_container}>
              <Text style={styles.score_information_point}>{this.props.scores[0]}</Text>
            </View>
            <Text style={styles.score_information_game_point}>0</Text>
          </View>
          <Image style={styles.score_information_back} source={require("../../../assets/img/score_create_back.png")} />
          <View style={styles.score_information_container}>
            <Text style={styles.score_information_game_point}>0</Text>
            <View style={styles.score_information_point_container}>
              <Text style={styles.score_information_point}>{this.props.scores[1]}</Text>
            </View>
            <View style={styles.score_information_user_name_container}>
              <Text style={styles.score_information_user_name}>Name</Text>
            </View>
          </View>
        </View>
        <TouchableHighlight onPress={Actions.score_view} style={styles.analysis_navigate}>
          <Text style={styles.analysis_navigate_text}>分析</Text>
        </TouchableHighlight>
        <View style={styles.score_field_container}>
          <Image
            source={require("../../../assets/img/field-line.png")}
            style={styles.score_field_line}
          />
          <View style={styles.score_field_button_container}>
            <View style={styles.score_over_container}>
              <View style={styles.score_out_field_side_container}>
                <OutFieldSide position={5} side={0} />
                <OutFieldSide position={6} side={0}/>
              </View>
              <View style={styles.score_out_field_side_container}>
                <OutFieldSide position={0} side={1}/>
                <OutFieldSide position={1} side={1}/>
              </View>
            </View>
            <View style={styles.score_middle_container}>
              <View style={styles.score_out_field_length_container}>
                <OutFieldLength position={4} side={0}/>
                <OutFieldLength position={3} side={0}/>
              </View>
              <View style={styles.score_in_field_container}>
                <View style={styles.score_in_field_length_container}>
                  <InFieldLength position={11} side={0}/>
                  <InFieldLength position={10} side={0}/>
                </View>
                <View style={styles.score_in_field_side_container}>
                  <InFieldSide position={12} side={0}/>
                  <View style={styles.score_in_field_circle_container}>
                    <InFieldCircle position={7} side={0}/>
                  </View>
                  <InFieldSide position={9} side={0}/>
                </View>
                <View style={styles.score_in_field_length_container}>
                  <InFieldLength position={13} side={0}/>
                  <InFieldLength position={8} side={0}/>
                </View>
              </View>
              <View style={styles.score_in_field_container}>
                <View style={styles.score_in_field_length_container}>
                  <InFieldLength position={8} side={1}/>
                  <InFieldLength position={13} side={1}/>
                </View>
                <View style={styles.score_in_field_side_container}>
                  <InFieldSide position={9} side={1}/>
                  <View style={styles.score_in_field_circle_container}>
                    <InFieldCircle position={7} side={1}/>
                  </View>
                  <InFieldSide position={12} side={1}/>
                </View>
                <View style={styles.score_in_field_length_container}>
                  <InFieldLength position={10} side={1}/>
                  <InFieldLength position={11} side={1}/>
                </View>
              </View>
              <View style={styles.score_out_field_length_container}>
                <OutFieldLength position={3} side={1}/>
                <OutFieldLength position={4} side={1}/>
              </View>
            </View>
            <View style={styles.score_under_container}>
              <View style={styles.score_out_field_side_container}>
                <OutFieldSide position={2} side={0} />
                <OutFieldSide position={1} side={0}/>
              </View>
              <View style={styles.score_out_field_side_container}>
                <OutFieldSide position={6} side={1}/>
                <OutFieldSide position={5} side={1}/>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const { game, view } = state;
  const {
    score_create_modal
  } = view || {
    score_create_modal: false
  };
  const { scores } = game;
  return {
    score_create_modal, scores
  };
}
export default connect(mapStateToProps)(enhancer(ScoreCreate));

const styles = StyleSheet.create({
  analysis_navigate: {
    position: "absolute",
    backgroundColor: "transparent",
    height: 40,
    right: 10,
    top: 8,
    alignSelf: "flex-end"
  },
  analysis_navigate_text: {
    borderColor: "#00A0E9",
    backgroundColor: "#00A0E9",
    borderWidth: 1.0,
    borderRadius: 4,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    color: "white"
  },
  score_information_bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    marginTop: -20
  },
  score_information_back: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20
  },
  score_information_user_name_container: {
    flex: 2,
    justifyContent: "flex-end"
  },
  score_information_user_name: {
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    fontSize: 23,
    height: 40,
    width: 130,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#2EA7E0"
  },
  score_information_point_container: {
    justifyContent: "flex-end"
  },
  score_information_point: {
    justifyContent: "center",
    width: 40,
    height: 40,
    fontSize: 30,
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#2EA7E0"
  },
  score_information_game_point: {
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "flex-end",
    height: 20,
    width: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#2EA7E0"
  },
  score_information_container: {
    flexDirection: "row",
    flex: 0.4
  },
  score_field_container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  score_field_button_container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  score_field_line: {
    position: "absolute"
  },
  score_over_container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  score_middle_container: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between"
  },
  score_under_container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  score_out_field_length_container: {
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  score_out_field_side_container:{
    flexDirection: "row",
    flex: 0.36,
    justifyContent: "space-around"
  },
  score_in_field_container: {
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30
  },
  score_in_field_length_container: {
    marginLeft: 12,
    marginRight: 12,
    justifyContent: "space-between",
    alignItems: "center"
  },
  score_in_field_circle_container: {
    justifyContent: "space-between"
  },
  score_in_field_side_container: {
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "space-between"
  }
});
