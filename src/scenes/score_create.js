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
  ScoreCreateModal
} from '../components';
import { postScoreGame } from '../actions/score'
import { scoreCreateEnhancer } from '../enhances/score_create'

class ScoreCreate extends React.Component{
  render(){
    return(
      <View style={{
        alignItems:'center',
        width: this.state.width, 
        height: this.state.height}} 
      >
        <ScoreCreateModal visible={this.props.modal}/>
        <LandScapeBackground/ >
        <TopContentBar>スコアシート</TopContentBar>
        <View style={styles.score_information_bar}>
          <View style={styles.score_information_container}>
            <View style={styles.score_information_user_name_container}>
              <Text style={styles.score_information_user_name}>Name</Text>
            </View>
            <View style={styles.score_information_point_container}>
              <Text style={styles.score_information_point}>0</Text>
            </View> 
            <Text style={styles.score_information_game_point}>0</Text>
          </View>
          <Image style={styles.score_information_back} source={require('../../assets/img/score_create_back.png')}/>
          <View style={styles.score_information_container}>
            <Text style={styles.score_information_game_point}>0</Text>
            <View style={styles.score_information_point_container}>
              <Text style={styles.score_information_point}>0</Text>
            </View> 
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

function mapStateToProps(state, props){
  const { score } = state
  const {
    modal: modal,
  } = score ||{
    modal: false
  }
  return {
    modal,
  }
}
export default connect(mapStateToProps)(scoreCreateEnhancer(ScoreCreate))

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  score_information_bar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40, 
    marginTop: -20,
  },
  score_information_back:{
    marginTop:25,
    marginLeft: 20,
    marginRight: 20,
  },
  score_information_user_name_container:{
    flex: 2,
    justifyContent:'flex-end',
  },
  score_information_user_name: {
    paddingTop:8,
    paddingBottom:8,
    justifyContent:'center',
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
  score_information_point_container: {
    justifyContent:'flex-end'
  },
  score_information_point:{
    justifyContent: 'center',
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
    marginLeft:10,
    marginRight:10,
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
