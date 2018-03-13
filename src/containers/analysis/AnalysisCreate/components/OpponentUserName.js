import React from "react";
import {
  StyleSheet,
  Text
} from "react-native";
import { connect } from "react-redux";

class OpponentUserName extends React.Component{
  render(){
    if (this.props.index in this.props.analysisUsers) {
      return(
        <Text style={styles.container}>{this.props.analysisUsers[this.props.index].name}</Text>
      );
    }
    else {
      return(
        <Text style={styles.container}>ユーザーを選択</Text>
      );
    }
  }
}

export default connect(mapStateToProps)(OpponentUserName);

function mapStateToProps(state, props){
  const { analysis } = state;
  const{
    analysisUsers
  } = analysis || {
    analysisUsers: {}
  };
  return {
    analysisUsers
  };
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    flexDirection: "row",
    backgroundColor: "transparent",
    borderColor: "#0a2444",
    paddingTop: 10,
    paddingBottom: 10,
    width: 108,
    borderWidth: 1.5,
    marginLeft: 6,
    borderRadius: 3,
    marginTop: 25,
    textAlign: "center"
  }

});
