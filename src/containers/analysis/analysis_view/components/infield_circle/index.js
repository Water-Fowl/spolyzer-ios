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

class InFieldCircle extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.blueCircle}
        onPress={() => {
          this.postPositionEvent();
        }
        }
      >
        <View />
      </TouchableHighlight>
    );
  }
}

export default connect()(fieldButtonEnhancer(InFieldCircle));

const styles = StyleSheet.create({
  blueCircle: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 100,
    opacity: 0.3,
    alignSelf: "center"
  }
});
