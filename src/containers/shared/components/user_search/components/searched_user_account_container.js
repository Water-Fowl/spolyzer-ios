import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";

import SearchedUserAccount from "./searched_user_account";

export default class SearchedUserAccountContainer extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps){
    this.forceUpdate();
  }
  render(){
    const { users, AccountPressEvent } = this.props;
    if( users == ""){
      return null;
    }
    const usersComponent = [];
    for (let i = 0; i < users.length; i++) {
      usersComponent.push(
        <TouchableOpacity onPress={() => {AccountPressEvent(this.props.selectedIndex, users[i].user.id);}}>
          <SearchedUserAccount key={i} userName={users[i].user.name} />
        </TouchableOpacity>
      );
    }
    return(
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          { usersComponent }
        </ScrollView>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    height: "60%",
    alignSelf: "center"
  },
  scrollContainer: {
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    padding: 5,
    width: "85%",
    borderWidth: 1,
    borderRadius: 2
  }
});
