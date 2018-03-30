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
  constructor(props){
    super(props);
    this.state = {
      minPosition: 1,
      maxPosition: 7
    };
  }
  render() {
    return (
      <TouchableHighlight
        style={styles.horizontalYellowBarLeft}
        onPress={() => {
          this.setPositionEvent();
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
  horizontalYellowBarLeft: {
    borderColor: "#A29A67",
    backgroundColor: "#A29A67",
    borderWidth: 1.3,
    borderRadius: 3,
    width: 40,
    height: 10,
    alignSelf: "center"
  }
});
