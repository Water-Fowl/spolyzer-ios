import Orientation from "react-native-orientation";
import React from "react";
import {
  Background
} from "atoms";
import {
  StyleSheet,
  View
} from "react-native";

export default function templateEnhancer(ComponentClass) {
  return class BaseHightOrderComponent extends React.Component {
    componentWillMount() {
      Orientation.lockToPortrait();
    }
    render() {
      return (
        <View style={styles.container}>
          <Background />
          <ComponentClass {...this.props} />
        </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
