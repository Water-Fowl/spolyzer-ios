import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import {
  Scene,
  Router,
  Tabs,
} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import {
  ProfileTop,
  ScoreCreate,
  GameCreate,
  ScoreView,
  AnalysisView,
  AnalysisCreate,
  Login,
  SignUp,
} from '../containers';
import configureStore from '../stores';

const RouterWithRedux = connect()(Router);
const { persistor, store } = configureStore();
const Route = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root">
        <Scene key="login" component={Login} initial hideNavBar />
        <Scene key="sign_up" component={SignUp} hideNavBar />
        <Tabs key="tab" labelStyle={styles.label} tabBarStyle={styles.tab_bar_style} tabStyle={styles.tab_style}>
          <Scene key="Mypage" tabBarLabel='マイページ' icon={() => (<Image style={styles.icon} source={require('../assets/img/tabs_home.png')} />)} headerMode="none">
            <Scene key="mypage_top" initial component={ProfileTop} title="マイページ" hideNavBar />
          </Scene>
          <Scene key="Score" tabBarLabel="スコアシート" icon={() => (<Image style={styles.icon} source={require('../assets/img/tabs_score.png')} />)} headerMode="none">
            <Scene key="scre_game_create" initial component={GameCreate} title="単分析" hideNavBar />
            <Scene key="score_create" hideTabBar component={ScoreCreate} title="スコアシート" hideNavBar />
            <Scene key="score_view" component={ScoreView} title="結果" hideNavBar />
          </Scene>
          <Scene key="Analysis" tabBarLabel="分析" icon={() => (<Image style={styles.icon} source={require('../assets/img/tabs_analysis.png')} />)} headerMode="none">
            <Scene key="analysis_create" initial component={AnalysisCreate} title="複合分析" hideNavBar />
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
    margin: 10,
  },
  tab_style: {
    backgroundColor: 'rgba(58, 130, 169, 0.6)',
    color: 'rgb(58, 130, 169)',
  },
  label: {
    color: 'rgb(58, 130, 169)',
  },
  tab_bar_style: {
    backgroundColor: 'rgb(58, 130, 169)',
  },
});
