import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import {
  TopContentBar,
  NavigateButton,
} from "components";
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
        <View style={styles.users_container}>
          <View style={styles.user_account}>
            <View style={styles.user_image}>
              <Image
                source={require("../../../../assets/img/score_create_person.png")}
                style={styles.person}
              />
            </View>
            <View style={styles.user_name}>
              <Text style={styles.user_name_text}>
                Ikeda Syacho
              </Text>
            </View>
            <View style={styles.user_status}>
              <Text style={styles.user_status_text}>
                Status
              </Text>
            </View>
          </View>
        </View>
        <NavigateButton action={Actions.analysis_create} style={styles.chose} text="Chose" />
      </View>
    );
  }
}

export default connect()(baseHigherOrderComponentEnhancer(UserSearch));

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  users_container: {
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: "67%",
    width: "85%",
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: "center",
    alignItems: "center",
  },
  chose: {
    alignSelf: "center",
    marginTop: 11,
  },
  user_account: {
    height: 45,
    width: "95%",
    borderRadius: 3,
    backgroundColor: "rgba(23,82,155,0.3)",
    flexDirection: "row",
  },
  user_image: {
    width: "20%",
    backgroundColor: "transparent",
  },
  person: {
    marginTop: 5,
    marginLeft: 10,
    height: 36,
    width: 36,
  },
  user_name: {
    width: "50%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  user_name_text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  user_status: {
    width: "30%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  user_status_text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
