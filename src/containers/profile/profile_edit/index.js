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
      <View style={{flex:5,paddingTop:40}}>
          <View style={{flexDirection:'row'}}>

          <View style={{flex:3,alignItems:'center',backgroundColor:'transparent'}}>
            <Image
              source={require('../../../assets/img/score_create_person.png')}
              style={{marginLeft:10,opacity:0.5,width:100,height:100,}}/>
              <View style={{paddingTop:22,}}>
                <Text style={styles.profile_title}>Gender</Text>
                <Text style={styles.profile_title}>Phone</Text>
                <Text style={styles.profile_title}>Email</Text>
                <Text style={styles.profile_title}>Status</Text>
                </View>
                <View style={{paddingTop:40,}}>
                  <Text style={styles.profile_title}>Profile</Text>
                  </View>
            </View>
          <View style={{flex:7,alignItems:'center',paddingTop:30,}}>

            <View style={styles.frame_name}>
              <View style={styles.plate_name}>
                <Text style={{fontSize:23,color:'white',textAlign:'center',}} >Ikeda Yoshiki</Text>
              </View>
            </View>

            <View style={{paddingTop:40,}}>

              <View style={styles.frame_profile}>
                <View style={styles.plate_profile}>
                  <View style={{paddingLeft:20,}}>
                    <Text style={styles.profile_title}>Male</Text>
                    <View style={styles.profile_underline}></View>
                    <Text style={styles.profile_title}>000000</Text>
                    <View style={styles.profile_underline}></View>
                    <Text style={styles.profile_title}>gmail.com</Text>
                    <View style={styles.profile_underline}></View>
                    <Text style={styles.profile_title}>single Player</Text>
                    <View style={styles.profile_underline}></View>
                  </View>
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
          <NavigateButton action={Actions.mypage_top} style={styles.complete} text="Complete" />
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
    opacity:0.7,
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
    opacity:0.7,
  },
  profile_title:{
    color:'white',
    fontWeight:'bold',
    marginTop:10,
  },
  profile_underline:{
    borderWidth:0.5,
    borderColor:'#4780c6',
    marginRight:20,
  },
  complete: {
    alignSelf: 'center',
  },

});
