import React from "react";
import baseEnhancer from "enhances";
import {
  ActionConst,
  Actions
} from "react-native-router-flux";
import {
  Background,
  NavBar,
  NavigateButton,
  TopContentBar
} from "atoms";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { connect } from "react-redux";
import {
  SEARCH_USER_ENDPOINT
} from "../../config/api";
import {
  getSearchUserReceived,
  getSearchUserRequest,
  setUser
} from "../../modules/game";
import {
  getApiRequest
} from "../../modules/request";
import { UserList } from "organisms";
import { mapStateToProps } from "utils";

class GameSearchUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      users: this.props.game.users
    };
    this.searchUserEvent.bind(this);
    this.setUser = this.setUser.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.game.users){
      this.setState({ users: nextProps.game.users });
    }
  }
  searchUserEvent(name){
    const params = {
      name
    };
    this.props.dispatch(getApiRequest(SEARCH_USER_ENDPOINT, params, this.props.authentication.header, getSearchUserRequest, getSearchUserReceived));
    this.setState({ users: this.props.users });
  }
  setUser(selectedSearchUserIndex){
    this.props.dispatch(setUser(this.props.game.selectedUnitIndex, this.props.selectedUserIndex, this.props.game.users[selectedSearchUserIndex].user));
    Actions.gameCreate();
  }
  render() {
    return (
    	<View style={styles.container}>
        <Background />
        <TopContentBar>
          名前検索
        </TopContentBar>
        <View style={styles.form}>
          <TextInput
            onChangeText={(name) => {
              this.setState({ name });
              this.searchUserEvent(name);
            }}
            value={this.state.name}
            placeholder="名前入力"
            placeholderTextColor="#666677"
            style={styles.textField}
            keyboardType="email-address"
            returnKeyType="done"
          />
        </View>
        <UserList callback={this.setUser} users={this.state.users}/>
        <NavigateButton action={() =>{Actions.popTo("gameCreate"); }} style={styles.navigateButton} text="選択" />
      </View>
    );
  }
}

export default connect(mapStateToProps)(GameSearchUser);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 42,
    width: "85%",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 12,
    marginBottom: 12
  },
  textField: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    paddingLeft: 20,
    letterSpacing: 0
  },
  navigateButton: {
    alignSelf: "center",
    marginTop: 11
  }
});
