import Orientation from "react-native-orientation";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import baseEnhancer from "enhances";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { mapStateToProps } from "utils";
import {
  RowItem
} from "react-native-ios-kit";
import {
  $spolyzerBlue,
  $spolyzerDarkBlue,
  $transparent
} from "../../const/color";

class DashboardCreateSelect extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RowItem
          title="スマッシュ"
          onPress={() => {Actions.popTo("DashboardCreate");}}
        />
        <RowItem
          title="ドロップ"
          onPress={() => {Actions.popTo("DashboardCreate");}}
        />
        <RowItem
          title="ヘアピン"
          onPress={() => {Actions.popTo("DashboardCreate");}}
        />
        <RowItem
          title="プッシュ"
          onPress={() => {Actions.popTo("DashboardCreate");}}
        />
        <RowItem
          title="ロブ"
          onPress={() => {Actions.popTo("DashboardCreate");}}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(DashboardCreateSelect));

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
