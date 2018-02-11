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


export class OutFieldLength extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.vartical_yellow_bar_left}
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
export default connect()(fieldButtonEnhancer(OutFieldLength));

const styles = StyleSheet.create({
  vartical_yellow_bar_left: {
    borderColor: "#A29A67",
    backgroundColor: "#A29A67",
    width: 10,
    height: 40,
    borderWidth: 1.3,
    borderRadius: 3,
  },
});
