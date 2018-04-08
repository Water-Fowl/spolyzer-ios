import React from "react";
import { Actions } from "react-native-router-flux";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import { UserListItem } from "molecules";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";

class UserList extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.users){
      this.forceUpdate();
    }
  }
  render(){
    const { users } = this.props;
    if(!users){
      return null;
    }
    const usersComponent = [];
    for (let i = 0; i < users.length; i++) {
      if(this.props.game.gameUnits.ids.indexOf(users[i].user.id) == -1){
        usersComponent.push(
          <TouchableOpacity onPress={() => {this.props.callback(i);}}>
            <UserListItem key={i} userName={users[i].user.name} />
          </TouchableOpacity>
        );
      }
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

export default connect(mapStateToProps)(UserList)

const styles=StyleSheet.create({
  container: {
    height: "60%",
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444"
  },
  scrollContainer: {
    width: 300,
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    padding: 5,
    borderWidth: 1,
    borderRadius: 2
  }
});
