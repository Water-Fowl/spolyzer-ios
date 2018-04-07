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

import { connect } from "react-redux";
import {
  mapStateToProps
} from "utils";
const NET_MIN_POSITION = 8;
const NET_MAX_POSITION = 13;
const OUT_MIN_POSITION = 1;
const OUT_MAX_POSITION = 6;

export default class ShotTypeModal extends React.Component {
  renderButtons(textStyles, isMiss){
    if (
      isMiss &&
      this.props.position != NET_MAX_POSITION &&
      this.props.position != NET_MIN_POSITION
    ){
      return (
        null
      );
    }
    const buttonsComponentsList = [];
    /* 外に出ているかどうかを判別する */
    if (
      this.props.position > OUT_MAX_POSITION &&
      this.props.position < OUT_MAX_POSITION
    ){
      var missType = 2;
    }
    else {
      var missType = isMiss? 1:0;
    }

    for (let shotTypeId in this.props.shotTypes){
      buttonsComponentsList.push(
        <TouchableHighlight
          onPress={() => {
            this.props.callback(shotTypeId, missType);
            this.props.hideModal();
          }}
        >
          <Text style={textStyles}>{this.props.shotTypes[shotTypeId]}</Text>
        </TouchableHighlight>
      );
    }

    return (
      <View>
        { buttonsComponentsList }
      </View>
    );
  }

  render() {
    if(this.props.isVisible){
      return (
        <View style={styles.container}>
          <View style={styles.shotTypeContainer}>
            { this.renderButtons(styles.shotType, isMiss=false) }
            { this.renderButtons(styles.missShotType, isMiss=true) }
          </View>
          <TouchableHighlight style={styles.touchableContainer} onPress={() => {this.props.hideModal();}} >
            <Text style={styles.close}>戻る</Text>
          </TouchableHighlight>
        </View>
      );
    }
    else {
      return (
        null
      );
    }
  }
}

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
  },
  shotType: {
    fontSize: 17,
    width: 220,
    alignSelf: "center",
    textAlign: "center",
    padding: 5,
    margin: 5,
    color: "white",
    backgroundColor: "#2EA7E0"
  },
  missShotType: {
    fontSize: 17,
    width: 220,
    alignSelf: "center",
    textAlign: "center",
    padding: 5,
    margin: 5,
    color: "white",
    backgroundColor: "#EE0000"
  },
  shotTypeContainer: {
    padding: 10,
    borderColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row"
  }
});

