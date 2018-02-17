import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default class SearchedUserAccount extends React.Component{
  render(){
    return(
      <View style={styles.user_account}>
        <View style={styles.user_image}>
          <Image
            source={require("../../../../../assets/img/score_create_person.png")}
            style={styles.person}
          />
        </View>
        <View style={styles.user_name}>
          <Text style={styles.user_name_text}>{ this.props.user_name }</Text>
        </View>
        <View style={styles.user_status}>
          <Text style={styles.user_status_text}>{ this.props.user_status }</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  user_account: {
    height: 45,
    borderRadius: 3,
    backgroundColor: "rgba(23,82,155,0.3)",
    flexDirection: "row",
    alignSelf: "center",
  },
  user_image: {
    width: "20%",
    backgroundColor: "transparent",
  },
  person: {
    marginTop: 5,
    marginLeft: 10,
    height: 36,
    width: 36,
  },
  user_name: {
    width: "50%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  user_name_text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  user_status: {
    width: "30%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  user_status_text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
