import React from "react";
import { Actions } from "react-native-router-flux";
import {
  AsyncStorage,
  ImageBackground,
  View,
  StatusBar,
  StyleSheet
} from "react-native";
import { Container, Button, Text, Form, Item, Input, Label } from "native-base";

import { connect } from "react-redux";
import * as authenticationModules from "../../modules/authentication";
import * as profileModules from "../../modules/profile";
import * as requestModules from "../../modules/request";
import { SIGN_IN_ENDPOINT, USERS_ENDPOINT } from "../../config/api";
import { mapStateToProps } from "../../modules/mapToProps";
import { errorAlertCallback } from "utils";

function errorInstanceCallback(json) {
  return new Error(json.errors);
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.postLoginEvent.bind(this);
    this.state = {
      email: "",
      password: "",
      loginError: false
    };
  }

  postLoginEvent() {
    var body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props
      .dispatch(
        requestModules.postApiRequest(
          SIGN_IN_ENDPOINT,
          body,
          (headers = {}),
          authenticationModules.postLoginRequest,
          authenticationModules.postLoginReceived,
          (errorInstanceCallback = errorInstanceCallback),
          (errorCallback = errorAlertCallback),
          (returnHeader = true)
        )
      )
      .then(async header => {
        if (header) {
          await AsyncStorage.setItem("header", JSON.stringify(header));
          this.props
            .dispatch(
              requestModules.getApiRequest(
                (endpoint = USERS_ENDPOINT),
                (params = {}),
                (headers = header),
                (requestCallback = profileModules.getUserRequest),
                (receivedCallback = profileModules.getUserReceived)
              )
            )
            .then(user => {
              user.sport_id === null ? Actions.sportSelect() : Actions.tab();
            });
        }
      });
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={{ url: "background" }}
          style={styles.imageContainer}
        >
          <View style={styles.logoContainer}>
            <ImageBackground
              source={{
                url: "spolyzer_top.png"
              }}
              style={styles.logo}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 25,
              backgroundColor: "transparent"
            }}
          >
            <Form
              style={{
                width: "70%",
                maxWidth: 320,
                alignSelf: "center"
              }}
            >
              <Item stackedLabel last>
                <Label>メールアドレス</Label>
                <Input
                  onChangeText={email => this.setState({ email })}
                  style={{ color: "white" }}
                  keyboardType="email-address"
                  returnKeyType="done"
                />
              </Item>
              <Item stackedLabel last>
                <Label>パスワード</Label>
                <Input
                  onChangeText={password => this.setState({ password })}
                  style={{ color: "white" }}
                  keyboardType="email-address"
                  returnKeyType="done"
                  secureTextEntry
                />
              </Item>
            </Form>
          </View>
          <View>
            <Button
              bordered
              block
              large
              style={{
                width: "70%",
                maxWidth: 320,
                alignSelf: "center",
                marginBottom: 10
              }}
              onPress={() => this.postLoginEvent()}
            >
              <Text>ログイン</Text>
            </Button>
            <Button transparent style={{ alignSelf: "center" }} onPress={""}>
              <Text>パスワードをお忘れの方</Text>
            </Button>
            <Button
              transparent
              style={{ alignSelf: "center" }}
              onPress={Actions.signUp}
            >
              <Text>新規登録はこちら</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: "column",
    justifyContent: "center"
  },
  logoContainer: {
    alignSelf: "center"
  },
  logo: {
    width: 261.25,
    height: 80
  }
});
