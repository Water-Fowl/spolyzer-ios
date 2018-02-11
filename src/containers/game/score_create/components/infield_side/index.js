import React from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { fieldButtonEnhancer } from "../shared/hoc";
import { connect } from "react-redux";

export class InFieldSide extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.horizontal_blue_bar}
        onPress={() => {
          this.setModalEvent();
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
  horizontal_blue_bar: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 20,
    width: 80,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3,
    alignSelf: "center",
  },
});
