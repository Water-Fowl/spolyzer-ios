import React from "react";
import baseEnhancer from "enhances";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import { listToQueryParams } from "utils";

import { setUserIndex } from "../../modules/analysis";

import {
  GameTypeButtonList,
  TermButtonList,
  ShotTypeButtonList
} from "organisms";
import {
  SelectedUserName,
  NavigateButton,
  TopContentBar
} from "atoms";
import {
  getPositionsCountsRequest,
  getPositionsCountsReceived
} from "../../modules/analysis";
import {
  getApiRequest
} from "../../modules/request";
import {
  POSITIONS_COUNTS_ENDPOINT,
  analysisEndpointGenerator
} from "../../config/api";

import { mapStateToProps } from "utils";

class AnalysisCreate extends React.Component {
  constructor(props) {
    super(props);
    this.getPositionsCountsEvent.bind(this);
    this.setPicker.bind(this);
    this.hidePicker.bind(this);
    this.state = {
      isPickerVisible: false
    };
  }
  getPositionsCountsEvent() {
    let params = {
      ids: this.props.analysis.analysisUsersIds,
      shot_type_id: this.props.analysis.shotTypeId
    };

    let endpoint = analysisEndpointGenerator(params);
    this.props.dispatch(getApiRequest(
      endpoint=endpoint,
      params={game_user_count: this.props.analysis.gameUserCount},
      this.props.authentication.header,
      getPositionsCountsRequest,
      getPositionsCountsReceived
    )).then(()=> {
      Actions.analysisView();
    });
  }
  pushAnalysisSearchEvent(selectedUserIndex) {
    this.props.dispatch(setUserIndex(selectedUserIndex));
    Actions.analysisSearchUser();
  }
  setPicker(){
    this.setState({isPickerVisible: true});
  }
  hidePicker(){
    this.setState({isPickerVisible: false});
  }
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>検索条件</TopContentBar>
        <View style={styles.rowContainer}>
          <Text style={styles.gameStyleText}>
            試合形式
          </Text>
          <GameTypeButtonList />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.shotTypeText}>
            球種
          </Text>
          <ShotTypeButtonList />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.termText}>
            期間
          </Text>
          <TermButtonList />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.opponentText}>
            対戦相手
          </Text>
          <TouchableOpacity onPress={() => {this.pushAnalysisSearchEvent(0);}}>
            <SelectedUserName user={this.props.analysis.analysisUsers[0]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.pushAnalysisSearchEvent(1);}}>
            <SelectedUserName user={this.props.analysis.analysisUsers[1]}/>
          </TouchableOpacity>
        </View>
        <NavigateButton action={() => {this.getPositionsCountsEvent();}} style={styles.navigateButton} text="分析" />
      </View>
    );
  }
}
export default connect(mapStateToProps)(baseEnhancer(AnalysisCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "row"
  },
  gameStyleText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 45,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  shotTypeText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 68,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  termText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 30,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  opponentText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 32,
    marginLeft: 40,
    backgroundColor: "transparent",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginRight: 22
  },
  navigateButton: {
    marginTop: 50
  }
});
