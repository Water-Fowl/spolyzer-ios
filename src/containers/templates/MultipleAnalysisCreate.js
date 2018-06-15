import React from "react";
import baseEnhancer from "./hoc";
import { Actions, ActionConst } from "react-native-router-flux";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { listToQueryParams } from "utils";
import { SegmentedControl } from "react-native-ios-kit";

import {
  ShotTypeButtonList,
  OutcomeButtonList,
  DatePickerButtonList
} from "organisms";
import {
  SelectedUserName,
  NavigateButton,
  TopContentBar,
  TextBox
} from "atoms";
import * as analysisModules from "../../modules/analysis";
import * as requestModules from "../../modules/request";
import {
  POSITIONS_COUNTS_ENDPOINT,
  analysisEndpointGenerator
} from "../../config/api";

import { mapStateToProps } from "../../modules/mapToProps";
import { getNowYMD } from "utils";

class AnalysisCreate extends React.Component {
  constructor(props) {
    super(props);
    this.getPositionsCountsEvent.bind(this);
    this.setSegment.bind(this);
    this.setBeforeDate.bind(this);
    this.setAfterDate.bind(this);
    this.setMinDate.bind(this);
    this.setMaxDate.bind(this);
    this.state = {
      game_user_count: 1,
      created_after: "",
      created_before: "",
      chosenDate: new Date()
    };
  }

  checkValidate() {
    if (this.props.analysis.analysisUsers) {
      if (this.state.game_user_count - 1) {
        // ダブルス時
        if (this.props.analysis.analysisUsers.length == 1) {
          Alert.alert(
            "エラー",
            "ユーザーを選択してください。",
            [{ text: "了解" }],
            { cancelable: false }
          );
          return true;
        }
      } else {
        // シングルス時
        if (this.props.analysis.analysisUsers.length == 2)
          this.props.dispatch(analysisModules.removeUser());
      }
    }
    return false;
  }

  getPositionsCountsEvent() {
    if (this.checkValidate()) return;
    let created_after = this.state.created_after || "2018/1/1";
    let created_before = this.state.created_before || getNowYMD();
    let endpoint = analysisEndpointGenerator({
      shot_type_id: this.props.analysis.shotTypeId
    });
    let params = {
      created_after: created_after + " 0:00:00",
      created_before: created_before + " 23:59:59",
      outcome: this.props.analysis.outcome,
      game_user_count: this.state.game_user_count
    };
    if (this.props.analysis.analysisUsersIds.length > 0) {
      params["opponent_users_ids"] = this.props.analysis.analysisUsersIds;
    }
    this.props
      .dispatch(
        requestModules.getApiRequest(
          (endpoint = endpoint),
          (params = params),
          this.props.authentication.header,
          analysisModules.getPositionsCountsRequest,
          analysisModules.getPositionsCountsReceived
        )
      )
      .then(() => {
        Actions.MultipleAnalysisView({
          game_user_count: this.state.game_user_count,
          created_after: created_after,
          created_before: created_before
        });
      });
  }
  pushAnalysisSearchEvent(selectedUserIndex) {
    this.props.dispatch(analysisModules.setUserIndex(selectedUserIndex));
    Actions.multipleAnalysisSearchUser();
  }
  setSegment(value, index) {
    this.setState({
      selectedValue: value,
      game_user_count: index + 1
    });
  }
  setAfterDate(date) {
    this.setState({ created_after: date });
  }
  setBeforeDate(date) {
    this.setState({ created_before: date });
  }
  setMinDate() {
    return this.state.created_after;
  }
  setMaxDate() {
    return this.state.created_before || this.state.chosenDate;
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <TopContentBar>検索条件</TopContentBar>

        <View style={styles.segmentContainer}>
          <SegmentedControl
            values={["シングルス", "ダブルス"]}
            selectedIndex={this.state.game_user_count - 1}
            onValueChange={(value, index) => {
              this.setState({
                selectedValue: value,
                game_user_count: index + 1
              });
            }}
            tintColor={"#2ea7e0"}
            style={{ width: 222, alignSelf: "center" }}
          />
        </View>
        <View style={styles.settingTableContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.shotTypeText}>球種</Text>
            <ShotTypeButtonList />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.termText}>期間</Text>
            <DatePickerButtonList
              width={100}
              date={this.state.created_after}
              placeholder="開始"
              minDate={"2018/01/01"}
              maxDate={this.setMaxDate()}
              callback={date => {
                this.setAfterDate(date);
              }}
            />
            <Text style={styles.dateBetweenText}>〜</Text>
            <DatePickerButtonList
              width={100}
              date={this.state.created_before}
              placeholder="終了"
              minDate={this.setMinDate()}
              maxDate={this.state.chosenDate}
              callback={date => {
                this.setBeforeDate(date);
              }}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.outcomeText}>勝敗</Text>
            <OutcomeButtonList />
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
              if (this.state.game_user_count - 1)
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
        </View>
        <NavigateButton
          action={() => {
            this.getPositionsCountsEvent();
          }}
          style={styles.navigateButton}
          text="分析"
        />
      </ScrollView>
    );
  }
}
export default connect(mapStateToProps)(baseEnhancer(AnalysisCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  settingTableContainer: {
    flex: 1,
    alignSelf: "center"
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  segmentContainer: {
    marginTop: 15
  },
  shotTypeText: {
    width: "25%",
    color: "#ffffff",
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  },
  termText: {
    width: "25%",
    color: "#ffffff",
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  },
  outcomeText: {
    width: "25%",
    color: "#ffffff",
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  },
  dateBetweenText: {
    backgroundColor: "transparent",
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 15
  },
  opponentText: {
    width: "25%",
    color: "#ffffff",
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  },
  navigateButton: {
    marginBottom: 50
  }
});
