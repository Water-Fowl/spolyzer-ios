import React from "react";
import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableHighlight,
    BackgroundImage,
    StyleSheet,
    TriangleCorner,
} from "react-native";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';
import {
    TopBar,
    LandScapeBackground,
    TopContentBar,
    NavigateButton,
    ActionModal,
    InFieldLength,
    InFieldSide,
    InFieldCircle,
    OutFieldLength,
    OutFieldSide,
} from '../components';
import { postScoreGame } from '../actions/score'

export default class ScoreCreate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      height: Dimensions.get('window').width, 
      width: Dimensions.get('window').height, 
    }
  }
  componentDidMount(){
    Orientation.lockToLandscape();
  }

  componentWillUnmount() {
      Orientation.lockToPortrait();
  }

  render(){
    return(
      <View style={{alignItems:'center',
        width: this.state.width, height: this.state.height}} >
        <LandScapeBackground/ >
        <TopContentBar
            content_name="スコアシート"
        />
        <View style={styles.score_information_bar}>
          <View style={styles.score_information_container}>
            <View style={styles.score_information_user_name_container}>
              <Text style={styles.score_information_user_name}>Name</Text>
            </View>
            <Text style={styles.score_information_point}>0</Text>
            <Text style={styles.score_information_game_point}>0</Text>
          </View>
          <View style={styles.score_information_container}>
            <Text style={styles.score_information_game_point}>0</Text>
            <Text style={styles.score_information_point}>0</Text>
            <View style={styles.score_information_user_name_container}>
              <Text style={styles.score_information_user_name}>Name</Text>
            </View>
          </View>
        </View>
        <View style={styles.score_field_container}>
          <Image
              source={ require('../../assets/img/field-line.png')}
              style={ styles.score_field_line }
          />
          <View style={styles.score_field_button_container}>
            <View style={styles.score_over_container}>
              <View style={{flex:0.36, justifyContent:'space-around', flexDirection:'row'}}>
                <OutFieldSide />
                <OutFieldSide />
              </View>
              <View style={{flex:0.36, justifyContent:'space-around', flexDirection:'row'}}>
                <OutFieldSide />
                <OutFieldSide />
              </View>
            </View>
            <View style={styles.score_middle_container}>
              <View style={styles.score_out_field_length_container}>
                <OutFieldLength />  
                <OutFieldLength />  
              </View>
              <View style={styles.score_in_field_container}>
                <View style={styles.score_in_field_length_container}>
                  <InFieldLength/>
                  <InFieldLength/>
                </View>
                <View style={styles.score_in_field_side_container}>
                  <InFieldSide />
                  <View style={styles.score_in_field_circle_container}>
                    <InFieldCircle />
                  </View>
                  <InFieldSide />
                </View>
                <View style={styles.score_in_field_length_container}>
                  <InFieldLength/>
                  <InFieldLength/>
                </View>
              </View>
              <View style={styles.score_in_field_container}>
                <View style={styles.score_in_field_length_container}>
                  <InFieldLength/>
                  <InFieldLength/>
                </View>
                <View style={styles.score_in_field_side_container}>
                  <InFieldSide />
                  <View style={styles.score_in_field_circle_container}>
                    <InFieldCircle />
                  </View>
                  <InFieldSide />
                </View>
                <View style={styles.score_in_field_length_container}>
                  <InFieldLength/>
                  <InFieldLength/>
                </View>
              </View>
              <View style={styles.score_out_field_length_container}>
                <OutFieldLength />  
                <OutFieldLength />  
              </View>
            </View>
            <View style={styles.score_under_container}>
              <View style={{flex:0.36, justifyContent:'space-around', flexDirection:'row'}}>
                <OutFieldSide />
                <OutFieldSide />
              </View>
              <View style={{flex:0.36, justifyContent:'space-around', flexDirection:'row'}}>
                <OutFieldSide />
                <OutFieldSide />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  score_information_bar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40, 
  },
  score_information_user_name_container:{
    flex: 2
  },
  score_information_user_name: {
    flex:2,
    color: 'white',
    textAlign: 'center',
    fontSize: 23,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#2EA7E0',
    
 },
  score_information_point:{
    height: 40,
    width: 40,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#2EA7E0',
  },
  score_information_game_point:{
    alignSelf: 'flex-end',
    height: 20,
    width: 20,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#2EA7E0',
  },
  score_information_container:{
    flexDirection: 'row',
    flex: 0.3,
  },
  score_field_container:{
    alignItems:"center",
    justifyContent: 'center',
    marginBottom: 20,
  },
  score_field_button_container:{
    flex: 1,
    alignItems:"center",
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  score_field_line:{
    position: 'absolute',
  },
  score_over_container:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  score_middle_container:{
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
  },
  score_under_container:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  score_out_field_length_container: {
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  score_in_field_container: {
    flexDirection: 'row',
    marginLeft:30,
    marginRight:30,
  },
  score_in_field_length_container: {
    marginLeft:12,
    marginRight:12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  score_in_field_circle_container: {
    justifyContent: 'space-between',
  },
  score_in_field_side_container: {
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'space-between',
  }
})
