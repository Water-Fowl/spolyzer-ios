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
} from "components";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { connect } from "react-redux";

import { SearchedUserAccountContainer } from "./components";

export default class UserSearch extends React.Component {
  render() {
    return (
    	<View style={styles.container}>
        <Background />
        <NavBar />
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
        <SearchedUserAccountContainer AccountPressEvent={this.AccountPressEvent} users={this.state.users}/>
        <NavigateButton action={() =>{Actions.popTo("analysisCreate"); }} style={styles.navigateButton} text="選択" />
      </View>
    );
  }
}

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
