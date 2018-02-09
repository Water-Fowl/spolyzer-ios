import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { setShotType } from '../../../../actions/set_query';

class Button extends React.Component {
  constructor(props) {
    super(props);
    const pressed = false;
    this.pressButtonEvent.bind(this);
    this.state = { pressed };
  }
  componentWillReceiveProps(nextProps) {
    const pressed = this.props.current_shot_type_id == nextProps.shot_type_id;
    this.setState({ pressed });
  }
  pressButtonEvent(shot_type_id) {
    const { dispatch } = this.props;
    dispatch(setShotType(shot_type_id));
    const pressed = !this.state.pressed;
    this.setState({ pressed });
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="transparent"
        style={this.state.pressed ? styles.button_pressed : styles.button}
        onPress={() => {
          this.pressButtonEvent(this.props.current_shot_type_id);
        }}
      >
        <Text style={this.state.pressed ? styles.text_pressed : styles.text}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

function mapStateToProps(state, props) {
  const { game } = state;
  const {
    shot_type_id,
  } = game || {
    shot_type_id: null,
  };
  return {
    shot_type_id,
  };
}
export default connect(mapStateToProps)(Button);

const styles = StyleSheet.create({
  text_pressed: {
    color: '#ffffff',
    fontSize: 15,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },

  text: {
    color: '#ffffff',
    fontSize: 15,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },

  button_pressed: {
    backgroundColor: '#0a2444',
    height: 28,
    width: 90,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 4,
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },

  button: {
    backgroundColor: 'transparent',
    height: 28,
    width: 90,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 4,
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});
