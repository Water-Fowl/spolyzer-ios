import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import {
    Scene,
    Router,
} from 'react-native-router-flux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {
    Mypage,
    ScoreCreate,
    ScoreGameCreate,
    ScoreView,
    AnalysisView,
    AnalysisCreate,
} from '../scenes';
import reducers from '../reducers';

const RouterWithRedux = connect()(Router);

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

const Route = () => (
    <Provider store={store}>
        <RouterWithRedux>
            <Scene key='root'>
                <Scene key="tab" tabs={true} >
                    <Scene key="Mypage" headerMode="none">
                        <Scene key="mypage_top" component={Mypage} title="マイページ"/>
                    </Scene>
                    <Scene key='Score' headerMode="none">
                        <Scene key="scre_game_create" initial tabs={false} component={ScoreGameCreate} title="単分析"/>
                        <Scene key="score_create" component={ScoreCreate} title="スコアシート" />
                        <Scene key="score_view" component={ScoreView} title="結果" />
                    </Scene>
                    <Scene key='Analysis' headerMode="none">
                        <Scene key="analysis_create" initial component={AnalysisCreate} title="複合分析"/>
                        <Scene key="analysis_view" component={AnalysisView} title="単分析"/>
                    </Scene>
                </Scene>
            </Scene>
        </RouterWithRedux>
    </Provider>
);

export default Route;
