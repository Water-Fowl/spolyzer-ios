import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View } from 'react-native';
import {
  Background,
  TopBar,
  TopContentBar,
  NavigateButton,
  NavBar,
} from 'components';
import baseHigherOrderComponentEnhancer from 'enhances';
import Orientation from 'react-native-orientation';
import { Actions } from 'react-native-router-flux';

class ScoreGameCreate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>試合設定</TopContentBar>
        <View style={styles.align_items_center} >
          <View style={styles.game_setting_border} >
            <View style={styles.game_setting_table}>
              <Text style={styles.score_game_create_opponents}>対戦者</Text>
              <View style={styles.game_setting_table_inner}>
                <View style={styles.game_setting_table_inner_left}>
                  <Image
                    source={require('../../../assets/img/score_create_person.png')}
                    style={styles.score_game_create_competitor_person}
                  />

                  <Image
                    source={require('../../../assets/img/simple_frame.png')}
                    style={styles.score_game_create_competitor_frame}
                  />
                  <Image
                    source={require('../../../assets/img/simple_circle.png')}
                    style={styles.score_game_create_competitor_person}
                  />
                  <Image
                    source={require('../../../assets/img/simple_frame.png')}
                    style={styles.score_game_create_competitor_frame}
                  />
                </View>

                <View style={styles.game_setting_table_inner_center}>
                  <Text　style={styles.score_game_create_vs}>vs</Text>
                </View>

                <View style={styles.game_setting_inner_right} >
                  <Image
                    source={require('../../../assets/img/score_create_person.png')}
                    style={styles.score_game_create_competitor_person}
                  />
                  <Image
                    source={require('../../../assets/img/simple_frame.png')}
                    style={styles.score_game_create_competitor_frame}
                  />
                  <Image
                    source={require('../../../assets/img/simple_circle.png')}
                    style={styles.score_game_create_competitor_person}
                  />
                  <Image
                    source={require('../../../assets/img/simple_frame.png')}
                    style={styles.score_game_create_competitor_frame}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={styles.game_setting_under_table}
          >
            <NavigateButton action={Actions.score_create} text="Play"/>
          </View>
        </View>
      </View>
    );
  }
}
export default baseHigherOrderComponentEnhancer(ScoreGameCreate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  align_items_center: {
    alignItems: 'center',
  },
  game_setting_border: {
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 2.5,
    marginTop: 30,
    borderColor: 'rgb(20, 35, 70)',
  },
  game_setting_table: {
    width: 320,
    height: 270,
    backgroundColor: 'rgb(20, 35, 70)',
    justifyContent: 'center',
  },
  game_setting_table_inner: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 310,
    height: 240,
    margin: 5,
  },
  game_setting_table_inner_left: {
    flex: 2,
    width: 70,
    height: 220,
    justifyContent: 'center',
  },
  game_setting_table_inner_center: {
    flex: 1,
    width: 30,
    height: 220,
    paddingRight: 7,
  },
  game_setting_table_inner_right: {
    flex: 2,
    width: 70,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  game_setting_under_table: {
    width: 300,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  game_setting_under_table_frame_next_button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column_bar_text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  score_game_create_vs: {
    fontWeight: 'bold',
    color: 'skyblue',
    paddingTop: 70,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score_game_create_opponents: {
    padding: 0,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 240,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  score_game_create_competitor_person: {
    marginRight: 12,
    marginLeft: 19,
    marginBottom: 3,
  },
  score_game_create_competitor_frame: {
    marginTop: 3,
    marginRight: 12,
    marginLeft: 14,
    marginBottom: 8,
  },
});
