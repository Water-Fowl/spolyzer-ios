import React from "react";
import templateEnhancer from "./hoc";
import { ActionConst, Actions, TouchableOpacity } from "react-native-router-flux";
import { Background, NavBar, NavigateButton, TopContentBar, TextBox } from "atoms";
import { UserList } from "organisms";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { SEARCH_USER_ENDPOINT } from "../../config/api";
import * as gameModules from "../../modules/game";
import { getApiRequest } from "../../modules/request";
import { mapStateToProps } from "utils";

class GameSearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      users: this.props.game.users
    };
    this.searchUserEvent.bind(this);
    this.setUser = this.setUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.game.users) {
      this.setState({ users: nextProps.game.users });
    }
  }
  searchUserEvent(name) {
    const params = {
      name
    };
    if (name != "") {
      this.props.dispatch(
        getApiRequest(
          SEARCH_USER_ENDPOINT,
          params,
          this.props.authentication.header,
          gameModules.getSearchUserRequest,
          gameModules.getSearchUserReceived
        )
      );
      this.setState({ users: this.props.game.users });
    } else {
      this.setState({ users: [] });
    }
  }
  setUser(selectedSearchUserIndex) {
    this.props.dispatch(
      gameModules.setUser(this.props.game.users[selectedSearchUserIndex].user)
    );
    Actions.gameCreate();
  }
  removeUser() {
    this.props.dispatch(gameModules.removeUser());
    Actions.popTo("gameCreate");
  }
  render() {
    return (
      <View style={styles.container}>
        <Background />
        <TopContentBar>名前検索</TopContentBar>
        <View style={styles.form}>
          <TextInput
            onChangeText={name => {
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
        <TextBox
          callback={() => {
            this.removeUser();
          }}
        >
          選択なし
        </TextBox>
        <UserList
          callback={this.setUser}
          users={this.state.users}
          selectedIds={this.props.game.gameUnits.ids}
        />
        <NavigateButton
          action={() => {
            Actions.popTo("gameCreate");
          }}
          style={styles.navigateButton}
          text="選択"
        />
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
