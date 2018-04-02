import React from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Text
} from "react-native";
import {
  $spolyzerDarkBlue,
  $transparent,
  $white
} from "const";

export default class ParametricButton extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="transparent"
        style={ this.props.selectedParams == this.props.params ?
            {
              backgroundColor: "#0a2444",
              margin: 3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              padding: 5,
              width: this.props.width
            }:
            {
              padding: 5,
              backgroundColor: "transparent",
              margin: 3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              width: this.props.width
            }
        }
        width={90}
        onPress={() => {
          this.props.callback(this.props.params)
        }}
      >
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  buttonPressed: {
    backgroundColor: "#0a2444",
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    padding: 5,
  },
  button: {
    padding: 5,
    backgroundColor: "transparent",
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  text: {
    color: $white,
    fontSize: 15,
    backgroundColor: $transparent,
    fontWeight: "bold"
  },
});
