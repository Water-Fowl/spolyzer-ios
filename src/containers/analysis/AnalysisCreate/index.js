import React from "react";
import baseEnhancer from "enhances";
import { Actions } from "react-native-router-flux";
import {
  NavigateButton,
  TopContentBar
} from "components";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import { listToQueryParams } from "utils";

import enhancer from "./hoc";
import setUserIndex from "../actions/set_user_index";
import {
  GameTypeButton,
  OpponentUserName,
  RecentlyGame,
  RecentlyGamesPicker,
  ShotTypeButton,
  TermButton
} from "./components";
import { getPositionsCounts } from "../actions/get_positions_counts";
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
    var userIds = [];
    for (key in this.props.analysis.analysisUsers){
      let user = this.props.analysis.analysisUsers[key];
      if(user.id){
        userIds.push(user.id);
      }
    }
    const params = {
      user_ids: userIds,
      shot_type_id: this.props.analysis.shotTypeId,
      game_user_count: this.props.analysis.gameUserCount,
      term: this.props.analysis.term
    };
    this.props.dispatch(getPositionsCounts(listToQueryParams(params), this.props.authentication.header));
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
          <GameTypeButton />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.shotTypeText}>
            球種
          </Text>
          <ShotTypeButton />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.termText}>
            期間
          </Text>
          <TermButton />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.opponentText}>
            対戦相手
          </Text>
          <TouchableOpacity onPress={() => {this.pushAnalysisSearchEvent(0);}}>
            <OpponentUserName index={0}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.pushAnalysisSearchEvent(1);}}>
            <OpponentUserName index={1}/>
          </TouchableOpacity>
        </View>
        <NavigateButton action={() => {this.getPositionsCountsEvent();}} style={styles.navigateButton} text="分析" />
        <RecentlyGamesPicker isVisible={this.state.isPickerVisible} hidePicker={()=> {this.hidePicker();}}/>
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
