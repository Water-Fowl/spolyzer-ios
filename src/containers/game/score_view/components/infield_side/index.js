import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { connect } from "react-redux";

import { fieldButtonEnhancer } from "../shared/hoc";

export class InFieldSide extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.horizontalBlueBar}
        onPress={() => {
          this.setShotTypeCountsEvent();
        }
        }
      >
        <View />
      </TouchableHighlight>

    );
  }
}
export default connect()(fieldButtonEnhancer(InFieldSide));

const styles = StyleSheet.create({
  horizontalBlueBar: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 10,
    width: 40,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3,
    alignSelf: "center"
  }
});
