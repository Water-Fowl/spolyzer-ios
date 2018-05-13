import React from "react";
import {
  StyleSheet, Text,
  TouchableHighlight, View
} from "react-native";
import { connect } from "react-redux";

import { ParametricButton } from "atoms";
import { mapStateToProps } from "../../modules/mapToProps";
import { setShotType } from "../../modules/analysis";

class ShotTypeButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.setShotType = this.setShotType.bind(this);
  }

  setShotType(shotTypeId) {
    this.props.dispatch(setShotType(shotTypeId));
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.sport.shotTypes){
      this.forceUpdate();
    }
  }

  render() {
    const shotTypesButtonsComponent = [];
    if(this.props.sport.shotTypes){
      for (shotTypeId in this.props.sport.shotTypes){
        shotTypesButtonsComponent.push(
          <ParametricButton
            width={90}
            selectedParams={this.props.analysis.shotTypeId}
            callback={this.setShotType}
            params={shotTypeId}
          >
            { this.props.sport.shotTypes[shotTypeId] }
          </ParametricButton>
        );
      }
    }
    return (
      <View style={styles.container}>
        { shotTypesButtonsComponent }
      </View>
    );
  }
}
export default connect(mapStateToProps)(ShotTypeButtonList);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    padding: 3,
    width: 220,
    borderWidth: 1.5,
    marginLeft: 58,
    borderRadius: 3,
    marginTop: 25,
    justifyContent: "center",
    alignContent: "center"
  }
});
