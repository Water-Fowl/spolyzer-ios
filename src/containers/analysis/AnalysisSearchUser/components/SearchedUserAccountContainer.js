import React from "react";
import { Actions } from "react-native-router-flux";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";

import SearchedUserAccount from "./SearchedUserAccount";
import setUser from "../../actions/set_user";
import removeUser from "../../actions/remove_user";
import {
  mapStateToProps
} from "utils";

class SearchedUserAccountContainer extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.users){
      this.forceUpdate();
    }
  }
  AccountPressEvent(selectedIndex, user){
    this.props.dispatch(setUser(selectedIndex, user));
    Actions.popTo("analysisCreate");
  }
  NoSelectPressEvent(selectedIndex){
    this.props.dispatch(removeUser(selectedIndex));
  }
  render(){
    console.log(this.props.users);
    if(!this.props.users){
      return null;
    }
    const usersComponent = [];
    for (let i = 0; i < this.props.users.length; i++) {
      usersComponent.push(
        <TouchableOpacity onPress={() => {this.AccountPressEvent(this.props.analysis.selectedUserIndex, this.props.users[i].user);}}>
          <SearchedUserAccount key={i} userName={this.props.users[i].user.name} />
        </TouchableOpacity>
      );
    }
    return(
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <TouchableOpacity onPress={() => {this.AccountPressEvent(this.props.analysis.selectedUserIndex);}}>
            <SearchedUserAccount userName="選択なし" />
          </TouchableOpacity>
          { usersComponent }
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(SearchedUserAccountContainer);


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
