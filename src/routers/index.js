import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import {
    Scene,
    Router,
    Tabs,
} from 'react-native-router-flux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Actions } from 'react-native-router-flux';
import { persistStore, autoRehydrate } from 'redux-persist';
import localforage from 'localforage';

import {
    Mypage,
    ScoreCreate,
    ScoreGameCreate,
    ScoreView,
    AnalysisView,
    AnalysisCreate,
    Login,
    SignUp,
} from '../scenes';
import reducers from '../reducers';

const RouterWithRedux = connect()(Router);

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const store = compose(
    applyMiddleware(...middleware),
    autoRehydrate()
)(createStore)(reducers);

persistStore(store, {storage: localforage}, () => {
    console.log('autoRehydrate completed');
});

const Route = () => (
    <Provider store={store}>
        <RouterWithRedux>
            <Scene key='root'>
                <Scene key="login" component={Login} initial hideNavBar={true} />
                <Scene key="sign_up" component={SignUp} />
                <Tabs key="tab">
                    <Scene key="Mypage" headerMode="none">
                        <Scene key="mypage_top" initial component={Mypage} title="マイページ"/>
                    </Scene>
                    <Scene key='Score' headerMode="none">
                        <Scene key="scre_game_create" initial component={ScoreGameCreate} title="単分析"/>
                        <Scene key="score_create" hideTabBar={true} component={ScoreCreate} title="スコアシート" />
                        <Scene key="score_view" component={ScoreView} title="結果" />
                    </Scene>
                    <Scene key='Analysis' headerMode="none">
                        <Scene key="analysis_create" initial component={AnalysisCreate} title="複合分析"/>
                        <Scene key="analysis_view" component={AnalysisView} title="単分析"/>
                    </Scene>
                </Tabs>
            </Scene>
        </RouterWithRedux>
    </Provider>
);

export default Route;
