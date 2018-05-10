import React from "react";
import templateEnhancer from "./hoc";
import { Actions } from "react-native-router-flux";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";

import { GameTypeButtonList, TermButtonList, ShotTypeButtonList, OpponentUsersButtonList } from "organisms";
import { SelectedUserName, NavigateButton, TopContentBar } from "atoms";

import { mapStateToProps, listToQueryParams } from "utils";
import * as analysisModules from "../../modules/analysis";
import * as requestModules from "../../modules/request";
import { POSITIONS_COUNTS_ENDPOINT, analysisEndpointGenerator } from "../../config/api";

class AnalysisCreate extends React.Component {
  constructor(props) {
    super(props);
    this.getPositionsCountsEvent.bind(this);
    this.pushAnalysisSearchEvent = this.pushAnalysisSearchEvent.bind(this);
    this.state = {
      isPickerVisible: false
    };
  }

  getPositionsCountsEvent() {
    let params = {
      shot_type_id: this.props.analysis.shotTypeId
    };

    let endpoint = analysisEndpointGenerator(params);
    this.props.dispatch(requestModules.getApiRequest(
      endpoint=endpoint,
      params={
        outcome: "all",
        created_after: "2018/04/25",
        created_before: "2018/05/10",
        opponent_users_ids: this.props.analysis.analysisUsersIds,
        game_user_count: this.props.analysis.gameUserCount
      },
      this.props.authentication.header,
      analysisModules.getPositionsCountsRequest,
      analysisModules.getPositionsCountsReceived
    )).then(()=> {
      Actions.analysisView();
    });
  }

  pushAnalysisSearchEvent(selectedUserIndex) {
    this.props.dispatch(analysisModules.setUserIndex(selectedUserIndex));
    Actions.analysisSearchUser();
  }

  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>検索条件</TopContentBar>
        <GameTypeButtonList />
        <ShotTypeButtonList />
        <TermButtonList />
        <OpponentUsersButtonList callback={this.pushAnalysisSearchEvent}/>
        <NavigateButton
          action={() => {this.getPositionsCountsEvent();}}
          style={styles.navigateButton}
          text="分析"
        />
      </View>
    );
  }
}
export default connect(mapStateToProps)(templateEnhancer(AnalysisCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigateButton: {
    marginTop: 50
  }
});
