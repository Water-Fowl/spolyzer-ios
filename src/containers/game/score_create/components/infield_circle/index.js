import React from "react";
import { connect } from "react-redux";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { fieldButtonEnhancer } from "../shared/hoc";


class InFieldCircle extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.blue_circle}
        onPress={() => {
          this.setModalEvent(this.props.position, this.props.side);
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
  blue_circle: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 100,
    opacity: 0.3,
    alignSelf: "center",
  },
});
