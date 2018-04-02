import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";
import { connect } from "react-redux";

export default class OutFieldSide extends React.Component {
  renderInButton(position, side){
    if(this.props.renderInButton) {
      return (
         this.props.renderInButton(position, side)
      )
    }
    else {
      return (
        <View />
      );
    }
  }
  render() {
    const sizeMagnification = this.props.horizontal? 1 : 2
    return (
      <TouchableHighlight
        style={{
          borderColor: "#A29A67",
          backgroundColor: "#A29A67",
          borderWidth: 1.3,
          borderRadius: 3,
          width: 45 * sizeMagnification,
          height: 10 * sizeMagnification,
          alignSelf: "center"
        }}
        onPress={() => {
          this.props.callback(this.props.position, this.props.side)
        }}
      >
        {this.renderInButton(this.props.position, this.props.side)}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#A29A67",
    backgroundColor: "#A29A67",
    borderWidth: 1.3,
    borderRadius: 3,
    width: 90,
    height: 20,
    alignSelf: "center"
  }
});
