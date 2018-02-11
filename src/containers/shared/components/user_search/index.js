import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  TopContentBar,
  NavigateButton,
} from 'components';
import baseHigherOrderComponentEnhancer from 'enhances';

class UserSearch extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        user_name: '',
      };
    }

  render() {
    return (
    	<View style={styles.container}>

        <TopContentBar>
          名前検索
        </TopContentBar>

        <View style={styles.form}>
          <TextInput
            onChangeText={user_name => this.setState({ user_name })}
            placeholder="名前検索"
            placeholderTextColor="#666677"
            style={styles.text_field}
            keyboardType="email-address"
            returnKeyType="done"
          />
        </View>

        <View style={styles.frame}>

        </View>

        <NavigateButton action={Actions.analysis_create} style={styles.chose} text="Chose" />


      </View>

    );
  }
}

export default connect()(baseHigherOrderComponentEnhancer(UserSearch));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    borderRightColor: '#28a8de',
    borderTopColor: '#28a8de',
    borderLeftColor: '#28a8de',
    borderBottomColor: '#28a8de',
    height: 42,
    width: '85%',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 12,
    marginBottom: 12,
  },

  text_field: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 12,
    letterSpacing: 0,
  },

  frame: {
    backgroundColor: 'transparent',
    borderRightColor: '#0a2444',
    borderTopColor: '#0a2444',
    borderLeftColor: '#0a2444',
    borderBottomColor: '#0a2444',
    height: '67%',
    width: '85%',
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'center',

  },

  chose: {
    alignSelf: 'center',
    marginTop: 11,
  },

 });
