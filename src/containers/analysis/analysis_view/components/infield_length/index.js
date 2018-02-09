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

class InFieldLength extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.vartical_blue_bar}
        onPress={() => {
          this.postPositionEvent();
        }
      }
      >
        <View />
      </TouchableHighlight>
    );
  }
}

export default connect()(fieldButtonEnhancer(InFieldLength));

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  vartical_blue_bar: {
    borderColor: '#2EA7E0',
    backgroundColor: '#2EA7E0',
    flex: 0.4,
    width: 10,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3,
  },
});
