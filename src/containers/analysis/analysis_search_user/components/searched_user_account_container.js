import React from "react";
import { Actions } from "react-native-router-flux";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";

import SearchedUserAccount from "./searched_user_account";
import setUser from "../../actions/set_user";

class SearchedUserAccountContainer extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps){
    this.forceUpdate();
  }
  AccountPressEvent(selectedIndex, user){
    const { dispatch } = this.props;
    dispatch(setUser(selectedIndex, user));
    Actions.analysisCreate();
  }
  render(){
    const { users, AccountPressEvent } = this.props;
    if( users == ""){
      return null;
    }
    const usersComponent = [];
    for (let i = 0; i < users.length; i++) {
      usersComponent.push(
        <TouchableOpacity onPress={() => {this.AccountPressEvent(this.props.selectedUserIndex, users[i].user);}}>
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

export default connect(mapStateToProps)(SearchedUserAccountContainer);

function mapStateToProps(state, props){
  const { analysis } = state;
  const{
    selectedUserIndex
  } = analysis || {
    selectedUserIndex: ""
  };
  return {
    selectedUserIndex
  };
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
