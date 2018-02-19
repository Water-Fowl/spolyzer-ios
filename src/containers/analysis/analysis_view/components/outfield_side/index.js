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

class OutFieldSide extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.horizontal_yellow_bar_left}
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

export default connect()(fieldButtonEnhancer(OutFieldSide));

const styles = StyleSheet.create({
  horizontal_yellow_bar_left: {
    borderColor: "#A29A67",
    backgroundColor: "#A29A67",
    borderWidth: 1.3,
    borderRadius: 3,
    width: 40,
    height: 10,
    alignSelf: "center"
  }
});
