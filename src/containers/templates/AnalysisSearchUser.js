import React from "react";
import baseEnhancer from "enhances";
import {
  ActionConst,
  Actions
} from "react-native-router-flux";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { connect } from "react-redux";

import {
  getSearchUserRequest,
  getSearchUserReceived,
  setUser,
  removeUser
} from "../../modules/analysis";
import {
  getApiRequest
} from "../../modules/request";
import {
  SEARCH_USER_ENDPOINT
} from "../../config/api";
import {
  Background,
  NavBar,
  NavigateButton,
  TopContentBar,
  TextBox
} from "atoms";
import { UserList } from "organisms";
import {
  mapStateToProps
} from "utils";

class AnalysisSearchUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      users: this.props.analysis.users
    };
    this.getUser = this.getUser.bind(this);
    this.setUser = this.setUser.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({ users: nextProps.analysis.users });
  }
  getUser(name){
    const params = {
      name: name
    };
    if (name != ""){
      this.props.dispatch(getApiRequest(SEARCH_USER_ENDPOINT, params, this.props.authentication.header, getSearchUserRequest, getSearchUserReceived));
      this.setState({ users: this.props.analysis.users });
    }
    this.setState({ users: [] });
  }
  setUser(selectedIndex){
    this.props.dispatch(setUser(this.props.analysis.selectedUserIndex, this.props.analysis.users[selectedIndex].user));
    Actions.popTo("analysisCreate");
  }
  removeUser(){
    this.props.dispatch(removeUser());
    Actions.popTo("analysisCreate");
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
              this.getUser(name);
            }}
            value={this.state.name}
            placeholder="名前入力"
            placeholderTextColor="#666677"
            style={styles.textField}
            keyboardType="email-address"
            returnKeyType="done"
          />
        </View>
        <TextBox callback={() => {this.removeUser();}}>選択なし</TextBox>
        <UserList callback={this.setUser} users={this.state.users} selectedIds={this.props.analysis.analysisUsersIds}/>
        <NavigateButton action={() =>{Actions.popTo("analysisCreate"); }} style={styles.navigateButton} text="戻る" />
      </View>
    );
  }
}

export default connect(mapStateToProps)(AnalysisSearchUser);

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
