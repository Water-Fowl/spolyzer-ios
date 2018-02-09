import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  NavigateButton,
  TopContentBar,
} from 'components';
import baseHigherOrderComponentEnhancer from 'enhances';


class ProfileEdit extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <TopContentBar><Text style={styles.top_bar}>マイデータ編集</Text></TopContentBar>
      <View style={{flex:5,paddingTop:60}}>
          <View style={{flexDirection:'row'}}>

          <View style={{flex:3,alignItems:'center',backgroundColor:'transparent'}}>
            <Image
              source={require('../../../assets/img/score_create_person.png')}
              style={{marginLeft:20,}}/>
              <View style={{paddingTop:25,}}>
                <Text style={styles.profile_title}>Gender</Text>
                <Text style={styles.profile_title}>Phone</Text>
                <Text style={styles.profile_title}>Email</Text>
                <Text style={styles.profile_title}>Status</Text>
                </View>
                <View style={{paddingTop:40,}}>
                  <Text style={styles.profile_title}>Profile</Text>
                  </View>
            </View>
          <View style={{flex:7,alignItems:'center',paddingTop:15,}}>

            <View style={styles.frame_name}>
              <View style={styles.plate_name}>
                <Text style={{fontSize:23,color:'white',textAlign:'center'}} >Ikeda Yoshiki</Text>
              </View>
            </View>
<View style={{paddingTop:40,}}>

            <View style={styles.frame_profile}>
              <View style={styles.plate_profile}>
              </View>
            </View>

            <View style={styles.frame_profile}>
              <View style={styles.plate_profile}>
              </View>
            </View>
</View>
          </View>


          </View>
      </View>


      <View style={{flex:1,}}>
      <Text style={styles.top_bar}>中</Text>
      </View>
      </View>
    );
  }
}
export default connect()(baseHigherOrderComponentEnhancer(ProfileEdit));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2:{
    flexDirection:'row',
  },
  top_bar: {
    fontSize:16,
  },
  frame_name: {
    borderColor: '#0a2444',
    height: 40,
    width: 230,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plate_name: {
    backgroundColor: '#0a2444',
    height: 30,
    width: 220,

  },
  frame_profile: {
    marginTop:8,
    borderColor: '#0a2444',
    height: 130,
    width: 230,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plate_profile: {
    backgroundColor: '#0a2444',
    height: 120,
    width: 220,

  },
  profile_title:{
    color:'white',
    fontWeight:'bold',
    marginTop:10,
  },

  subtitle_text: {
    color: '#ffffff',
    fontSize: 22,
    alignSelf: 'center',
    marginTop: -28,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },

  game_style_text: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 45,
    marginLeft: 40,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  shot_type_text: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 68,
    marginLeft: 40,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  term_text: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 30,
    marginLeft: 40,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  opponent_text: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 32,
    marginLeft: 40,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginRight: 22,
  },

  opponent_frame: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRightColor: '#0a2444',
    borderTopColor: '#0a2444',
    borderLeftColor: '#0a2444',
    borderBottomColor: '#0a2444',
    height: 34,
    width: 108,
    borderWidth: 1.5,
    marginLeft: 6,
    borderRadius: 3,
    marginTop: 25,
  },

  game_select_text: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 36,
    marginLeft: 40,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  game_select_frame: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRightColor: '#0a2444',
    borderTopColor: '#0a2444',
    borderLeftColor: '#0a2444',
    borderBottomColor: '#0a2444',
    height: 34,
    width: 222,
    borderWidth: 1.5,
    marginLeft: 28,
    borderRadius: 3,
    marginTop: 25,
  },

  analyze: {
    alignSelf: 'center',
    marginTop: 48,
  },

});
