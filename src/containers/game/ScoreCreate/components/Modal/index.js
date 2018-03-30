import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import {
  NavigateButton
} from "components";


import ScoreCreateShotTypeButton from "../ShotTypeButton";
import {
  scoreCreateModalEnhancer
} from "./hoc";
import {
  hideScoreCreateModal
} from "../../../actions/set_modal";
import { connect } from "react-redux";
import {
  mapStateToProps
} from "utils";

class Modal extends React.Component {
  constructor(props){
    super(props);
  }
  hideModalEvent() {
    this.props.dispatch(hideScoreCreateModal());
  }
  render() {
    return (
      <View style={styles.container}>
        <ScoreCreateShotTypeButton/>
        <TouchableHighlight style={styles.touchableContainer} onPress={() => {this.hideModalEvent();}} >
          <Text style={styles.close}>戻る</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default connect(mapStateToProps)(scoreCreateModalEnhancer(Modal));

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  touchableContainer: {
    marginTop: 10
  },
  close: {
    color: "white"
  }
});
