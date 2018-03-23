import React from "react";
import {
  Image,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import {
  Router,
  Scene,
  Tabs
} from "react-native-router-flux";
import {
  AnalysisCreate,
  AnalysisSearchUser,
  AnalysisView,
  GameCreate,
  GameSearchUser,
  Login,
  ProfileEdit,
  ProfileTop,
  ScoreCreate,
  ScoreView,
  SignUp
} from "../containers";
import { validateToken } from "../containers/authentication/actions/validate_token";
const RouterWithRedux = connect()(Router)

class Route extends React.Component{
  constructor(props){
    super(props);
  }
  async componentWillMount(){
    await this.props.dispatch(validateToken(this.props.header))
  }
  render(){
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="login" component={Login} initial={!this.props.isValidToken}  hideNavBar />
          <Scene key="signUp" component={SignUp} hideNavBar />
          <Tabs key="tab" initial={this.props.isValidToken} labelStyle={styles.label} tabBarStyle={styles.tabBarStyle} tabStyle={styles.tabStyle}>
            <Scene key="Mypage" tabBarLabel="マイページ" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_home.png")} />)} headerMode="none">
              <Scene key="profileTop" initial component={ProfileTop} title="マイページ" hideNavBar />
              <Scene key="profileEdit" component={ProfileEdit} title="マイデータ編集" hideNavBar />
            </Scene>
            <Scene key="Score" tabBarLabel="スコアシート" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_score.png")} />)} headerMode="none">
              <Scene key="gameCreate" initial component={GameCreate} title="単分析" hideNavBar />
              <Scene key="gameSearchUser" component={GameSearchUser} title="ユーザー検索" hideNavBar />
              <Scene key="scoreCreate" hideTabBar component={ScoreCreate} title="スコアシート" hideNavBar />
              <Scene key="scoreView" component={ScoreView} title="結果" hideNavBar />
            </Scene>
            <Scene key="Analysis" tabBarLabel="分析" icon={() => (<Image style={styles.icon} source={require("../assets/img/tabs_analysis.png")} />)} headerMode="none">
              <Scene key="analysisCreate" initial component={AnalysisCreate} title="複合分析" hideNavBar />
              <Scene key="analysisSearchUser" component={AnalysisSearchUser} title="ユーザー検索" hideNavBar />
              <Scene key="analysisView" component={AnalysisView} title="単分析" hideNavBar />
            </Scene>
          </Tabs>
        </Scene>
      </RouterWithRedux>
    );
  }
}
function mapStateToProps(state, props){
  return {
    header: state.authentication.header,
    isValidToken: state.authentication.isValidToken
  }
}

export default connect(mapStateToProps)(Route)


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
  }
});

