import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Image,
  StyleSheet
} from "react-native";
import { Provider, connect } from "react-redux";
import {
  Router,
  Scene,
  Tabs
} from "react-native-router-flux";
import { applyMiddleware, compose, createStore } from "redux";

import configureStore from "../stores";
import {
  AnalysisCreate,
  AnalysisView,
  GameCreate,
  Login,
  ProfileEdit,
  ProfileTop,
  ScoreCreate,
  ScoreView,
  SignUp,
  UserSearch
} from "../containers";

const RouterWithRedux = connect()(Router);
const { persistor, store } = configureStore();
const Route = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root">
        <Scene key="login" component={Login} initial hideNavBar />
        <Scene key="sign_up" component={SignUp} hideNavBar />
        <Tabs key="tab" labelStyle={styles.label} tabBarStyle={styles.tab_bar_style} tabStyle={styles.tab_style}>
          <Scene key="Mypage" tabBarLabel="マイページ" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_home.png")} />)} headerMode="none">
            <Scene key="profile_top" initial component={ProfileTop} title="マイページ" hideNavBar />
            <Scene key="profile_edit" component={ProfileEdit} title="マイデータ編集" hideNavBar />
          </Scene>
          <Scene key="Score" tabBarLabel="スコアシート" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_score.png")} />)} headerMode="none">
            <Scene key="game_create" initial component={GameCreate} title="単分析" hideNavBar />
            <Scene key="score_create" hideTabBar component={ScoreCreate} title="スコアシート" hideNavBar />
            <Scene key="score_view" component={ScoreView} title="結果" hideNavBar />
          </Scene>
          <Scene key="Analysis" tabBarLabel="分析" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_analysis.png")} />)} headerMode="none">
            <Scene key="analysis_create" initial component={AnalysisCreate} title="複合分析" hideNavBar />
            <Scene key="user_search" component={UserSearch} title="ユーザー検索" hideNavBar />
            <Scene key="analysis_view" component={AnalysisView} title="単分析" hideNavBar />
          </Scene>
        </Tabs>
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default Route;

const styles = StyleSheet.create({
  icon: {
    margin: 10
  },
  tab_style: {
    backgroundColor: "#134A65"
  },
  label: {
    color: "white"
  },
  tab_bar_style: {
    backgroundColor: "#00769E"
  }
});
