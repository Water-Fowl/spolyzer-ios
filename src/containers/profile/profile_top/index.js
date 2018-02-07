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


class ProfileTop extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main_container}>
          <TopContentBar>マイページ</TopContentBar>
          <View style={styles.align_items_center}>
            <Image
              source={require('../../../assets/img/my_page_user_icon.png')}
              style={styles.user_icon}
            />
            <Image
              source={require('../../../assets/img/my_page_center_design.png')}
            />
            <Text style={styles.my_name}>
              ここにNAME
            </Text>
            <View style={styles.game_setting_border}>
              <View style={styles.game_setting_table} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(baseHigherOrderComponentEnhancer(ProfileTop));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle_text: {
    color: '#ffffff',
    fontSize: 22,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    marginTop: 5,
  },
  subtitle: {
    alignSelf: 'center',
    position: 'absolute',
  },
  user_icon: {
    margin: 15,
    opacity: 0.3,
  },
  game_setting_border: {
    marginTop: 10,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 1.5,
    borderColor: 'rgb(20, 35, 70)',
    borderRadius: 3,
  },
  game_setting_table: {
    width: 320,
    height: 245,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgb(20, 35, 70)',
    borderRadius: 3,
  },
  my_name: {
    position: 'absolute',
    marginTop: 220,
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 20,
  },
  align_items_center: {
    alignItems: 'center',
  },

});