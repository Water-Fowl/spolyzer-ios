import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import baseHigherOrderComponentEnhancer from 'enhances';

class ScoreView extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  render() {
    return (
      <View />
    );
  }
}
export default baseHigherOrderComponentEnhancer(ScoreView)

const styles = StyleSheet.create({

});
