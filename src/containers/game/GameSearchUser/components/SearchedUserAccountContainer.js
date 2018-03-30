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
import { mapStateToProps } from "utils";

class SearchedUserAccountContainer extends React.Component{
  constructor(props){
    super(props);
    this.AccountPressEvent.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.users){
      this.forceUpdate();
    }
  }
  AccountPressEvent(selectedUnitIndex, selectedUserIndex, user){
    const { dispatch } = this.props;
    dispatch(setUser(selectedUnitIndex, selectedUserIndex, user));
    Actions.gameCreate();
  }

  render(){
    const { users } = this.props;
    if(!users){
      return null;
    }
    const usersComponent = [];
    for (let i = 0; i < users.length; i++) {
      usersComponent.push(
        <TouchableOpacity onPress={() => {this.AccountPressEvent(this.props.game.selectedUnitIndex, this.props.game.selectedUserIndex, users[i].user);}}>
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
