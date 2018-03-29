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
const NET_MIN_POSITION = 8
const NET_MAX_POSITION = 13


class ScoreCreateShotTypeButton extends React.Component {
  setShotTypeEvent(shotTypeId, missType=0) {
    console.log(shotTypeId)
    this.props.dispatch(setShotType(shotTypeId, missType));
  }
  hideModalEvent() {
    this.props.dispatch(hideScoreCreateModal());
  }
  renderLeftButtons(){
    const shotTypesLeftComponent = [];
    for (let shotTypeId in this.props.sport.shotTypes){
      shotTypesLeftComponent.push(
        <TouchableHighlight
          onPress={() => {
            this.setShotTypeEvent(shotTypeId);
            this.hideModalEvent();
          }}
        >
          <Text style={styles.shotType}>{this.props.sport.shotTypes[shotTypeId]}</Text>
        </TouchableHighlight>
      );
    }
    return (
      <View>
        { shotTypesLeftComponent }
      </View>
    )
  }
  renderRightButtons(){
    if (this.props.game.position == NET_MAX_POSITION || this.props.game.position == NET_MIN_POSITION ){
      const shotTypesRightComponent = [];
      for (let shotTypeId in this.props.sport.shotTypes){
        shotTypesRightComponent.push(
          <TouchableHighlight
            onPress={() => {
              this.setShotTypeEvent(shotTypeId, 1);
              this.hideModalEvent();
            }}
          >
            <Text style={styles.missShotType}>{this.props.sport.shotTypes[shotTypeId]}</Text>
          </TouchableHighlight>
        );
      }
      return (
        <View>
          { shotTypesRightComponent }
        </View>
      )
    }
    return (
      null
    )
  }
  render() {
    return (
      <View style={styles.shotTypeContainer}>
        { this.renderLeftButtons() }
        { this.renderRightButtons() }
      </View>
    );
  }
}
export default connect(mapStateToProps)(ScoreCreateShotTypeButton);

const styles = StyleSheet.create({
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
