import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { connect } from "react-redux";
import { listToQueryParams } from "utils";

import { scoreCreateShotTypeButtonEnhancer } from "./hoc";

class ScoreCreateShotTypeButton extends React.Component {
  render() {
    const { shotTypes } = this.props;

    const shotTypesLeftComponent = [];
    const shotTypesRightComponent = [];
    const shotTypesLength = shotTypes.length;
    const shotTypesLeftLength = Math.round(shotTypesLength / 2);
    const shotTypesRightLength = shotTypesLength - shotTypesRightLength;

    for (let i = 0; i < shotTypesLeftLength; i++){
      shotTypesLeftComponent.push(
        <TouchableHighlight
          onPress={() => {
            this.setShotTypeEvent(shotTypes[i].id);
            this.hideModalEvent();
          }}
        >
          <Text style={styles.shotType}>{shotTypes[i].name_ja}</Text>
        </TouchableHighlight>
      )
    }

    for (let i = shotTypesLeftLength; i < shotTypesLength; i ++){
      shotTypesRightComponent.push(
        <TouchableHighlight
          onPress={() => {
            this.setShotTypeEvent(shotTypes[i].id);
            this.hideModalEvent();
          }}
        >
          <Text style={styles.shotType}>{shotTypes[i].name_ja}</Text>
        </TouchableHighlight>
      )
    }

    return (
      <View style={styles.shotTypeContainer}>
        <View>
          { shotTypesLeftComponent }
        </View>
        <View>
          { shotTypesRightComponent }
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(scoreCreateShotTypeButtonEnhancer(ScoreCreateShotTypeButton));

function mapStateToProps(state, props) {
  const { game } = state;
  const {
    shotTypes
  } = game;
  return {
    shotTypes
  };
}
const styles = StyleSheet.create({
  shotType: {
    fontSize: 25,
    width: 220,
    alignSelf: "center",
    textAlign: "center",
    padding: 5,
    margin: 5,
    color: "white",
    backgroundColor: "#2EA7E0"
  },
  shotTypeContainer: {
    padding: 10,
    borderColor: "#2EA7E0",
    borderWidth: 1,
    flexDirection: "row"
  }
});
