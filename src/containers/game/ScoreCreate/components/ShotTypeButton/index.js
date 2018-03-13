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

    for (let i = 0; i < shotTypesLength; i++){
      shotTypesLeftComponent.push(
        <TouchableHighlight
          onPress={() => {
            this.setShotTypeEvent(i);
            this.hideModalEvent();
          }}
        >
          <Text style={styles.shotType}>{shotTypes[i].name_ja}</Text>
        </TouchableHighlight>
      );
    }

    for (let i = 0; i < shotTypesLength; i ++){
      shotTypesRightComponent.push(
        <TouchableHighlight
          onPress={() => {
            this.setShotTypeEvent(i, missType=1);
            this.hideModalEvent();
          }}
        >
          <Text style={styles.missShotType}>{shotTypes[i].name_ja}</Text>
        </TouchableHighlight>
      );
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
  missShotType: {
    fontSize: 25,
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
