import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { SelectedUserName } from "atoms";
import { mapStateToProps } from "utils";

class OpponentUsersButtonList extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.opponentText}>
          対戦相手
        </Text>
        <TouchableOpacity onPress={() => {this.props.callback(0);}}>
          <SelectedUserName user={this.props.analysis.analysisUsers[0]}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.props.callback(1);}}>
          <SelectedUserName user={this.props.analysis.analysisUsers[1]}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps)(OpponentUsersButtonList);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  opponentText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 32,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginRight: 22
  }
});
