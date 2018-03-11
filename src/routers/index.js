import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Image,
  StyleSheet,
  View
} from "react-native";
import { Provider, connect } from "react-redux";
import {
  Router,
  Scene,
  Drawer,
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
  UserSearch,
  DrawerContent
} from "../containers";

const RouterWithRedux = connect()(Router);
const { persistor, store } = configureStore();
const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/spolyzer_header.png")} />
    </View>
  );
};
const Route = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root" renderTitle={() => { return <AppLogo />; }}　navigationBarStyle={styles.navBarStyle}>
        <Scene key="login" type="reset" component={Login} initial hideNavBar />
        <Scene key="signUp" component={SignUp} hideNavBar />
        <Drawer
          key="drawer"
          drawerImage={require("../assets/img/hamburger.png")} // デフォルトのハンバーガーメニューを差し替える
          // drawerIcon={() => (<Icon/>)} // デフォルトのハンバーガーメニューを差し替える
          hideNavBar
          drawerWidth={ 280 }
          contentComponent={DrawerContent}
          drawerOpenRoute="DrawerOpen"
          drawerCloseRoute="DrawerClose"
          drawerToggleRoute="DrawerToggle"
        >
          <Tabs key="tab" labelStyle={styles.label} tabBarStyle={styles.tabBarStyle} tabStyle={styles.tabStyle} >
            <Scene key="Mypage" tabBarLabel="マイページ" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_home.png")} />)} >
              <Scene key="profileTop" initial component={ProfileTop} title="マイデータ"  />
              <Scene key="profileEdit" component={ProfileEdit} title="マイデータ編集"  />
            </Scene>
            <Scene key="Score" tabBarLabel="スコアシート" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_score.png")} />)} >
              <Scene key="gameCreate" initial component={GameCreate} title="単分析"  />
              <Scene key="scoreCreate" hideTabBar hideNavBar component={ScoreCreate} title="スコアシート" />
              <Scene key="scoreView" component={ScoreView} title="結果" />
            </Scene>
            <Scene key="Analysis" tabBarLabel="分析" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_analysis.png")} />)} >
              <Scene key="analysisCreate" initial component={AnalysisCreate} title="複合分析" />
              <Scene key="userSearch" component={UserSearch} title="ユーザー検索" />
              <Scene key="analysisView" component={AnalysisView} title="単分析" />
            </Scene>
          </Tabs>
        </Drawer>

      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default Route;

const styles = StyleSheet.create({
  icon: {
    margin: 10
  },
  tabStyle: {
    backgroundColor: "#134A65"
  },
  label: {
    color: "white"
  },
  tabBarStyle: {
    backgroundColor: "#00769E"
  },
  container: {

  },
  navBarStyle: {
    backgroundColor: "#134A65"
  }
});
