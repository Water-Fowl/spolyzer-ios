import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";

export default class OutFieldLength extends React.Component {
  render() {
    const sizeMagnification = this.props.horizontal? 1 : 2
    return (
      <TouchableHighlight
        style={{
          borderColor: "#A29A67",
          backgroundColor: "#A29A67",
          width: 10 * sizeMagnification,
          height: 40 * sizeMagnification,
          borderWidth: 1.3,
          borderRadius: 3
        }}
        onPress={() => {
          this.props.callback(this.props.position, this.props.side)
        }}
      >
        {this.props.renderInButton(this.props.position, this.props.side)}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#A29A67",
    backgroundColor: "#A29A67",
    width: 20,
    height: 80,
    borderWidth: 1.3,
    borderRadius: 3
  }
});
