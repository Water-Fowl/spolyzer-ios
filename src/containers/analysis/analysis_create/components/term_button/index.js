import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Button from './components/button';


export default class TermButton extends React.Component {
  constructor(props) {
    super(props);
    const termPressed = [true, false, false];
    this.state = { termPressed };
  }

  termOnPressButton(id) {
    const termPressed = [false, false, false];
    termPressed[id] = true;
    this.setState({ termPressed });
  }

  render() {
    return (
      <View style={styles.term_frame}>
        <Button current_term_id={0}>Day</Button>
        <Button current_term_id={1}>Week</Button>
        <Button current_term_id={2}>Month</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  term_frame: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRightColor: '#0a2444',
    borderTopColor: '#0a2444',
    borderLeftColor: '#0a2444',
    borderBottomColor: '#0a2444',
    height: 34,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 57,
    borderRadius: 3,
    marginTop: 25,
    justifyContent: 'center',
  },
});
