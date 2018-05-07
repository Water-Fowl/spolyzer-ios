import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import baseEnhancer from "enhances";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";
import {
  NavigateButton
} from "atoms";
import {
  NavigationRow,
  SegmentedControl
} from "react-native-ios-kit";
import {
  $spolyzerBlue,
  $spolyzerDarkBlue,
  $transparent
} from "../../const/color";

class DashboardCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  setSegment(value, index) {
    this.setState({
      selectedValue: value,
      selectedIndex: index
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.segmentedControlContainer}>
          <SegmentedControl
            values={["シングルス", "ダブルス"]}
            selectedIndex={this.state.selectedIndex}
            onValueChange={(value, index) =>
              this.setState({
                selectedValue: value,
                selectedIndex: index
              })
            }
            tintColor={$spolyzerBlue}
            style={{ width: 222, alignSelf: "center" }}
          />
        </View>
        <View style={styles.listContainer}>
          <NavigationRow
            title="対戦相手１"
            onPress={() => {Actions.DashboardCreateSelect();}}
            info="池田吉来"
            style={styles.navigationRow}
          />
          <NavigationRow
            title="対戦相手２"
            onPress={() => {Actions.DashboardCreateSelect();}}
            info="吉川明成"
            style={styles.navigationRow}
          />
          <NavigationRow
            title="目標設定"
            onPress={() => {Actions.DashboardCreateSelect();}}
            info="ミス"
            style={styles.navigationRow}
          />
          <NavigationRow
            title="球種"
            onPress={() => {Actions.DashboardCreateSelect();}}
            info="ヘアピン"
            style={styles.navigationRow}
          />
          <NavigationRow
            title="エリア"
            onPress={() => {Actions.DashboardCreateSelect();}}
            info="A,B"
            style={styles.navigationRow}
          />
          <NavigationRow
            title="目標回数"
            onPress={() => {Actions.DashboardCreateSelect();}}
            info="4"
            style={styles.navigationRow}
          />
        </View>
        <View style={styles.creatingButtonContainer}>
          <NavigateButton style={styles.navigateButton} action={() => {Actions.popTo("DashboardTop");}} text="作成" />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(DashboardCreate));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  segmentedControlContainer: {
    flex: 1,
    justifyContent: "center",
    borderBottomColor: $spolyzerDarkBlue,
    borderBottomWidth: 1,
    marginBottom: 1
  },
  listContainer: {
    flex: 3
  },
  creatingButtonContainer: {
    flex: 2,
    justifyContent: "center"
  }
});
