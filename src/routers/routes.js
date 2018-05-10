import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Alert,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { Router, Scene, Tabs, Drawer } from "react-native-router-flux";
import {
  AnalysisCreate,
  GameAnalysisCreate,
  GameAnalysisView,
  MultipleAnalysisCreate,
  MultipleAnalysisView,
  MultipleAnalysisSearchUser,
  GameCreate,
  GameSearchUser,
  Login,
  ProfileEdit,
  ProfileTop,
  ScoreCreate,
  ScoreView,
  SignUp,
  Confirmation
} from "../containers";
import { DrawerContent } from "organisms";
import { GameIcon, AnalysisIcon } from "atoms";
import {
  getShotTypesReceived,
  getShotTypesRequest,
  setSport
} from "../modules/sport";
import {
  getValidTokenRequest,
  getValidTokenReceived,
  setToken
} from "../modules/authentication";
import { getUserRequest, getUserReceived } from "../modules/profile";
import { getApiRequest } from "../modules/request";
import {
  USERS_ENDPOINT,
  SHOT_TYPES_ENDPOINT,
  VALIDATE_TOKEN_ENDPOINT
} from "../config/api";
const RouterWithRedux = connect()(Router);
const AppLogo = () => {
  return (
    <View>
      <Image source={require("../assets/img/spolyzer_header.png")} />
    </View>
  );
};

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidToken: false,
      loading: true
    };
    this.componentWillMountValidToken.bind(this);
    this.networkError.bind(this);
  }
  networkError() {
    return new Promise(resolve => {
      Alert.alert(
        "ネットワークエラー",
        "インターネットの接続を確認して下さい",
        [
          {
            text: "再接続",
            onPress: () => {
              this.componentWillMountValidToken();
            }
          }
        ]
      );
    });
  }
  async componentWillMountValidToken() {
    try {
      const rowHeader = await AsyncStorage.getItem("header");
      if (!rowHeader) {
        this.setState({
          isValidToken: false,
          loading: false
        });
        return false;
      }
      const header = await JSON.parse(rowHeader);
      let isSuccess = await this.props.dispatch(
        getApiRequest(
          VALIDATE_TOKEN_ENDPOINT,
          (params = {}),
          header,
          getValidTokenRequest,
          getValidTokenReceived
        )
      );
      if (!isSuccess) {
        throw new Error("Network request faild");
      }

      if (this.props.isValidToken) {
        await this.props.dispatch(setToken(header));
        await this.props.dispatch(
          getApiRequest(
            (endpoint = USERS_ENDPOINT),
            (params = {}),
            (headers = header),
            (requestCallback = getUserRequest),
            (receivedCallback = getUserReceived)
          )
        );
        await this.props.dispatch(setSport(1));

        await this.props.dispatch(
          getApiRequest(
            (endpoint = SHOT_TYPES_ENDPOINT),
            (params = { sport_id: 1 }),
            (headers = header),
            (requestCallback = getShotTypesRequest),
            (receivedCallback = getShotTypesReceived)
          )
        );
      }

      this.setState({
        isValidToken: this.props.isValidToken,
        loading: false
      });
    } catch (error) {
      this.networkError();
    }
  }
  async componentWillMount() {
    await this.componentWillMountValidToken();
  }
  render() {
    if (this.state.loading) {
      return <View />;
    }
    return (
      <RouterWithRedux>
        <Scene
          key="root"
          renderTitle={() => {
            return <AppLogo />;
          }}
          navigationBarStyle={styles.navBarStyle}
          backButtonImage={require("../assets/img/left_arrow.png")}
          gesturesEnabled={false}
        >
          <Scene
            key="login"
            component={Login}
            initial={!this.state.isValidToken}
            hideNavBar
          />
          <Scene key="signUp" component={SignUp} hideNavBar />
          <Scene key="confirmation" component={Confirmation} hideNavBar />
          <Drawer
            key="drawer"
            drawerImage={require("../assets/img/hamburger.png")} // デフォルトのハンバーガーメニューを差し替える
            // drawerIcon={() => (<Icon/>)} // デフォルトのハンバーガーメニューを差し替える
            hideNavBar
            drawerWidth={280}
            contentComponent={DrawerContent}
            drawerOpenRoute="DrawerOpen"
            drawerCloseRoute="DrawerClose"
            drawerToggleRoute="DrawerToggle"
            initial={this.state.isValidToken}
            name={this.props.userName}
            imageSource={this.props.userImageSource}
            gesturesEnabled={false}
          >
            <Scene
              key="profileEdit"
              component={ProfileEdit}
              title="マイデータ編集"
              hideDrawerButton
            />
            <Tabs
              initial
              key="tab"
              labelStyle={styles.label}
              tabBarStyle={styles.tabBarStyle}
              tabStyle={styles.tabStyle}
              gesturesEnabled={false}
            >
              <Scene
                key="Score"
                initial
                tabBarLabel="スコアシート"
                icon={() => <GameIcon size={50} />}
              >
                <Scene
                  key="gameCreate"
                  initial
                  component={GameCreate}
                  title="単分析"
                />
                <Scene
                  key="gameSearchUser"
                  component={GameSearchUser}
                  title="ユーザー検索"
                  hideDrawerButton
                  back
                />
                <Scene
                  key="scoreCreate"
                  hideTabBar
                  component={ScoreCreate}
                  title="スコアシート"
                  hideNavBar
                />
                <Scene
                  key="scoreView"
                  hideTabBar
                  component={ScoreView}
                  title="結果"
                  hideDrawerButton
                />
              </Scene>
              <Scene
                key="Analysis"
                tabBarLabel="分析"
                icon={() => <AnalysisIcon size={50} />}
              >
                <Scene
                  key="analysisCreate"
                  initial
                  component={AnalysisCreate}
                  title="分析"
                />
                <Scene
                  key="GameAnalysisCreate"
                  component={GameAnalysisCreate}
                  title="試合一覧"
                  hideDrawerButton
                  back
                />
                <Scene
                  key="GameAnalysisView"
                  component={GameAnalysisView}
                  title="単分析結果"
                  hideDrawerButton
                  back
                />
                <Scene
                  key="MultipleAnalysisCreate"
                  component={MultipleAnalysisCreate}
                  title="検索条件"
                  hideDrawerButton
                  back
                />
                <Scene
                  key="multipleAnalysisSearchUser"
                  component={MultipleAnalysisSearchUser}
                  title="ユーザー検索"
                  hideDrawerButton
                  back
                />
                <Scene
                  key="MultipleAnalysisView"
                  component={MultipleAnalysisView}
                  title="複合分析結果"
                  hideDrawerButton
                  back
                />
              </Scene>
            </Tabs>
          </Drawer>
        </Scene>
      </RouterWithRedux>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    header: state.authentication.header || {},
    isValidToken: state.authentication.isValidToken,
    errorMsg: state.authentication.errorMsg,
    userName: state.profile.userName,
    userImageSource: state.profile.userImageSource
  };
}

export default connect(mapStateToProps)(Route);

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "#134A65"
  },
  label: {
    color: "white"
  },
  tabBarStyle: {
    backgroundColor: "#00769E"
  },
  navBarStyle: {
    backgroundColor: "#134A65"
  }
});
