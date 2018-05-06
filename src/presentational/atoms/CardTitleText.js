import React from "react";
import {
  View,
  StyleSheet,
  Text
} from "react-native";

export default class CardTitleText extends React.Component{
  render(){
    return(
      <View style={this.props.style}>
        <Text style={styles.cardTitleText}>
          { this.props.children }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardTitleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});
