import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import SearchedUserAccount from "./searched_user_account";


export default class SearchedUserAccountContainer extends React.Component{
  render(){
    const users = [{id: 1, name: "yoshiki", status: "Active"}, {id: 2, name: "yusuke", status: "Active"}]; 
    const users_component = [];
    for (let i = 0; i < users.length; i++) {
      users_component.push(
        <SearchedUserAccount user_name={users[i]["name"]} user_status={users[i]["status"]} />
      );
    }
    return(
      <View style={styles.container}>
        <ScrollView style={styles.scroll_container}>
          { users_component }
        </ScrollView>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container: {
    height: "60%"
  },
  scroll_container: {
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    padding: 5,
    width: "85%",
    borderWidth: 1,
    borderRadius: 2,
  },
});
