import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { connect } from "react-redux";

import Button from "./components/Button";
import { mapStateToProps } from "../../modules/mapToProps";

class ShotTypeButton extends React.Component {

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
          <Button currentShotTypeId={shotTypeId}>{ this.props.sport.shotTypes[shotTypeId] }</Button>
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

export default connect(mapStateToProps)(ShotTypeButton);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 150,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 58,
    borderRadius: 3,
    marginTop: 25,
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center"
  }
});
