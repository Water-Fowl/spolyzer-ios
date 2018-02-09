import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import {
  TopContentBar,
} from 'components';
import baseHigherOrderComponentEnhancer from 'enhances';

class UserSearch extends React.Component {
  render() {
    return (
    	<View style={styles.container}>
        <TopContentBar>名前検索</TopContentBar>
       </View>

    );
  }
}

export default connect()(baseHigherOrderComponentEnhancer(UserSearch));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

 });
