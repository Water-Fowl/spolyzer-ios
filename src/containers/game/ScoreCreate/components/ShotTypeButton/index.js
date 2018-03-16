import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { connect } from "react-redux";
import { listToQueryParams } from "utils";

import { mapStateToProps } from "utils";

import {
  setShotType
} from "../../../actions/set_score";
import {
  hideScoreCreateModal
} from "../../../actions/set_modal";


class ScoreCreateShotTypeButton extends React.Component {
  setShotTypeEvent(shotTypeId, missType=0) {
    this.props.dispatch(setShotType(shotTypeId, missType));
  }
  hideModalEvent() {
    this.props.dispatch(hideScoreCreateModal());
  }
  render() {
    const shotTypesLeftComponent = [];
    const shotTypesRightComponent = [];
    const shotTypesLength = this.props.game.shotTypes.length;

    for (let i = 0; i < shotTypesLength; i++){
      shotTypesLeftComponent.push(
        <TouchableHighlight
          onPress={() => {
            this.setShotTypeEvent(i);
            this.hideModalEvent();
          }}
        >
          <Text style={styles.shotType}>{this.props.game.shotTypes[i].name_ja}</Text>
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
          <Text style={styles.missShotType}>{this.props.game.shotTypes[i].name_ja}</Text>
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
export default connect(mapStateToProps)(ScoreCreateShotTypeButton);

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
