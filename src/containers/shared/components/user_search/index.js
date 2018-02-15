import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { 
  Actions,
  ActionConst,
} from "react-native-router-flux";
import {
  TopContentBar,
  NavigateButton,
} from "components";
import { SearchedUserAccountContainer } from "./components";
import baseHigherOrderComponentEnhancer from "enhances";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_user_name: "",
    };
  }
  render() {
    return (
    	<View style={styles.container}>
        <TopContentBar>
          名前検索
        </TopContentBar>
        <View style={styles.form}>
          <TextInput
            onChangeText={search_user_name => this.setState({ search_user_name })}
            placeholder="名前入力"
            placeholderTextColor="#666677"
            style={styles.text_field}
            keyboardType="email-address"
            returnKeyType="done"
          />
        </View>
        <SearchedUserAccountContainer />
        <NavigateButton action={() =>{Actions.popTo('analysis_create') }} style={styles.navigate_button} text="選択" />
      </View>
    );
  }
}

export default connect()(baseHigherOrderComponentEnhancer(UserSearch));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginBottom: 12,
  },
  text_field: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    paddingLeft: 20,
    letterSpacing: 0,
  },
  navigate_button: {
    alignSelf: "center",
    marginTop: 11,
  },
});