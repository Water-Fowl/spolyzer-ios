import React from 'react';
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
} from '../containers'
import { configureStore } from '../stores';

const RouterWithRedux = connect()(Router);
const { persistor, store } = configureStore()
const Route = () => (
    <Provider store={store}>
        <RouterWithRedux>
            <Scene key='root'>
                <Scene key="login" component={Login} initial hideNavBar={true} />
                <Scene key="sign_up" component={SignUp} hideNavBar={true} />
                <Tabs key="tab">
                    <Scene key="Mypage" headerMode="none">
                        <Scene key="mypage_top" initial component={ProfileTop} title="マイページ" hideNavBar={true} />
                    </Scene>
                    <Scene key='Score' headerMode="none">
                        <Scene key="scre_game_create" initial component={GameCreate} title="単分析" hideNavBar={true} />
                        <Scene key="score_create" hideTabBar={true} component={ScoreCreate} title="スコアシート" hideNavBar={true} />
                        <Scene key="score_view" component={ScoreView} title="結果" hideNavBar={true} />
                    </Scene>
                    <Scene key='Analysis' headerMode="none">
                        <Scene key="analysis_create" initial component={AnalysisCreate} title="複合分析" hideNavBar={true} />
                        <Scene key="analysis_view" component={AnalysisView} title="単分析" hideNavBar={true}/>
                    </Scene>
                </Tabs>
            </Scene>
        </RouterWithRedux>
    </Provider>
);

export default Route;
