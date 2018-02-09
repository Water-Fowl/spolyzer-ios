import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { fieldButtonEnhancer } from '../shared/hoc';
import { connect } from 'react-redux';


class OutFieldSide extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.horizontal_yellow_bar_left}
        onPress={() => {
            this.setModalEvent();
          }
      }
      >
        <View />
      </TouchableHighlight>
    );
  }
}

export default connect()(fieldButtonEnhancer(OutFieldSide));

const styles = StyleSheet.create({
  horizontal_yellow_bar_left: {
    borderColor: '#A29A67',
    backgroundColor: '#A29A67',
    borderWidth: 1.3,
    borderRadius: 3,
    width: 40,
    height: 10,
    alignSelf: 'center',
  },
});
