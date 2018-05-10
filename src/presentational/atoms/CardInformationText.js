import React from "react";
import {
  View,
  StyleSheet,
  Text
} from "react-native";

export default class CardInformationText extends React.Component{
  render(){
    return(
      <View style={this.props.style}>
        <Text style={styles.cardInformationText}>
          { this.props.children }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardInformationText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13
  }
});
