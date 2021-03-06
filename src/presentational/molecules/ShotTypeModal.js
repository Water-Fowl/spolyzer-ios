import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from "react-native";
import { NavigateButton } from "components";

import { connect } from "react-redux";
import { mapStateToProps } from "../../modules/mapToProps";
const NET_MIN_POSITION = 8;
const NET_MAX_POSITION = 13;
const OUT_MIN_POSITION = 1;
const OUT_MAX_POSITION = 6;

const { height, width } = Dimensions.get("window");

export default class ShotTypeModal extends React.Component {
  renderButtons(textStyles, isNetMiss) {
    buttonsComponentsList = [];
    if (
      isNetMiss &&
      NET_MIN_POSITION != this.props.position &&
      NET_MAX_POSITION != this.props.position
    ) {
      return null;
    }

    var buttonsComponentsList = [];
    for (let shotTypeId in this.props.shotTypes) {
      buttonsComponentsList.push(
        <TouchableHighlight
          delayPressOut={1}
          onPress={() => {
            this.props.callback(
              shotTypeId,
              isNetMiss,
              this.props.side,
              this.props.position,
              this.props.n_sets
            );
            this.props.hideModal();
          }}
          key={shotTypeId}
          style={{ alignSelf: "center" }}
        >
          <Text style={textStyles}>{this.props.shotTypes[shotTypeId]}</Text>
        </TouchableHighlight>
      );
    }

    return <ScrollView>{buttonsComponentsList}</ScrollView>;
  }

  render() {
    if (this.props.isVisible) {
      return (
        <View style={styles.container}>
          <View style={styles.shotTypeContainer}>
            {this.renderButtons(styles.shotType, (isNetMiss = false))}
            {this.renderButtons(styles.missShotType, (isNetMiss = true))}
          </View>
          <TouchableHighlight
            style={styles.touchableContainer}
            onPress={() => {
              this.props.hideModal();
            }}
          >
            <Text style={styles.close}>戻る</Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return null;
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
  close: {
    color: "white"
  },
  shotType: {
    fontSize: 17,
    width: 220,
    alignSelf: "center",
    textAlign: "center",
    padding: 3,
    margin: 3,
    color: "white",
    backgroundColor: "#2EA7E0"
  },
  missShotType: {
    fontSize: 17,
    width: 220,
    alignSelf: "center",
    textAlign: "center",
    padding: 3,
    margin: 3,
    color: "white",
    backgroundColor: "#EE0000"
  },
  shotTypeContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 5,
    borderColor: "#2EA7E0",
    borderWidth: 1,
    width: "100%",
    maxHeight: height - 40
  }
});
