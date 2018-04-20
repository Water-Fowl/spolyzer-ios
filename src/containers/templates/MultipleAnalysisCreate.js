import React from "react";
import baseEnhancer from "enhances";
import { Actions, ActionConst } from "react-native-router-flux";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { listToQueryParams } from "utils";
import { SegmentedControl } from "react-native-ios-kit";

import { setUserIndex } from "../../modules/analysis";

import {
  GameTypeButtonList,
  TermButtonList,
  ShotTypeButtonList,
  GameResultButtonList
} from "organisms";
import {
  SelectedUserName,
  NavigateButton,
  TopContentBar,
  TextBox
} from "atoms";
import {
  getPositionsCountsRequest,
  getPositionsCountsReceived
} from "../../modules/analysis";
import { getApiRequest } from "../../modules/request";
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
    var userIds = [];
    for (key in this.props.analysis.analysisUsers) {
      let user = this.props.analysis.analysisUsers[key];
      if (user) {
        userIds.push(user.id);
      }
    }
    let params = {
      ids: userIds,
      shot_type_id: this.props.analysis.shotTypeId
    };

    let endpoint = analysisEndpointGenerator(params);
    this.props
      .dispatch(
        getApiRequest(
          (endpoint = endpoint),
          (params = { game_user_count: this.props.analysis.gameUserCount }),
          this.props.authentication.header,
          getPositionsCountsRequest,
          getPositionsCountsReceived
        )
      )
      .then(() => {
        Actions.MultipleAnalysisView();
      });
  }
  pushAnalysisSearchEvent(selectedUserIndex) {
    this.props.dispatch(setUserIndex(selectedUserIndex));
    Actions.analysisSearchUser();
  }
  setPicker() {
    this.setState({ isPickerVisible: true });
  }
  hidePicker() {
    this.setState({ isPickerVisible: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>検索条件</TopContentBar>
        <View style={styles.segmentContainer}>
          <SegmentedControl
            values={["シングルス", "ダブルス"]}
            selectedIndex={0}
            onValueChange={(value, index) => {
              this.setState({
                selectedValue: value,
                selectedIndex: index
              });
            }}
            tintColor={"#2ea7e0"}
            style={{ width: 222, alignSelf: "center" }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.shotTypeText}>球種</Text>
          <ShotTypeButtonList />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.termText}>期間</Text>
          <TermButtonList />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.termText}>勝敗</Text>
          <GameResultButtonList />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.opponentText}>対戦相手</Text>
          <TouchableOpacity
            onPress={() => {
              this.pushAnalysisSearchEvent(0);
            }}
          >
            <SelectedUserName user={this.props.analysis.analysisUsers[0]} />
          </TouchableOpacity>
          {(() => {
            if (this.state.selectedIndex)
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.pushAnalysisSearchEvent(1);
                  }}
                >
                  <SelectedUserName
                    user={this.props.analysis.analysisUsers[1]}
                  />
                </TouchableOpacity>
              );
          })()}
        </View>
        <NavigateButton
          action={() => {
            this.getPositionsCountsEvent();
          }}
          style={styles.navigateButton}
          text="分析"
        />
        <View style={styles.backButtonContainer}>
          <TextBox
            callback={() => {
              Actions.analysisCreate({ type: ActionConst.BACK_ACTION });
            }}
          >
            戻る
          </TextBox>
        </View>
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
  segmentContainer: {
    marginTop: 15
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
  },
  backButtonContainer: {
    justifyContent: "flex-end",
    flex: 1,
    height: 44,
    width: 90,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: 0
  }
});