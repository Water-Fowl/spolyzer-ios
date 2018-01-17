import React from "react"; 
import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import { postGameInformation } from '../actions/game'
import { Background } from "../components";
import { NavBar } from "../components";

class AnalysisCreate extends React.Component{

  constructor(props) {
    super(props);
    this.postGameInformationForm.bind(this)
    gameStylePressed = [true, false]
    shotTypePressed = [true, false, false, false, false, false]
    termPressed = [true, false, false]
    this.state = {gameStylePressed:gameStylePressed, shotTypePressed:shotTypePressed, termPressed:termPressed}
  }

  gameStyleOnPressButton(id){
    gameStylePressed = [false, false]
    gameStylePressed[id] = true
    this.setState({gameStylePressed: gameStylePressed})
  }

  shotTypeOnPressButton(id){
    shotTypePressed = [false, false, false, false, false, false]
    shotTypePressed[id] = true
    this.setState({shotTypePressed:shotTypePressed})
  } 

  termOnPressButton(id){
    termPressed = [false, false, false]
    termPressed[id] = true
    this.setState({termPressed:termPressed})
  }
  componentWillMount() {
    Orientation.lockToPortrait();
  }
  postGameInformationForm(){
    const { dispatch } = this.props;
    const sample_data = {
      "data":{
        "user_id": 2,
        "opponent_user": 1,
        "victory": 1,
      }
    }
    dispatch(postGameInformation(sample_data))
  }
  render(){
    return(
      <View style={styles.container}>

        <Background/>
        <NavBar/>
        <Text style={styles.subtitle_text}>
          検索条件
        </Text>

                
        <View style={{flexDirection:"row"}}>
                    
              <Text style={styles.game_style_text}>
                        試合形式
                    </Text>
                    
                    <View style={styles.frame}>
                        
                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.gameStylePressed[0] ? styles.game_style_button_press : styles.game_style_button }
                            onPress={() =>{
                                this.gameStyleOnPressButton(0)
                            }}
                        >
                            <Text style={ this.state.gameStylePressed[0] ? styles.select_text_Press : styles.select_text }>
                                シングルス
                            </Text>
                        </TouchableHighlight>
                         
                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.gameStylePressed[1] ? styles.game_style_button_press : styles.game_style_button }
                            onPress={() =>{
                                this.gameStyleOnPressButton(1)
                            }}
                        >
                            <Text style={ this.state.gameStylePressed[1] ? styles.select_text_Press : styles.select_text }>
                                ダブルス
                            </Text>
                        </TouchableHighlight>

                    </View>

                </View>


                <View style={{flexDirection:"row"}}>
                    
                    <Text style={styles.shot_type_text}>
                        球種
                    </Text>
                    
                    <View style={styles.shot_type_frame}>
                        
                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.shotTypePressed[0] ? styles.shot_type_button_press : styles.shot_type_button }
                            onPress={() =>{
                                this.shotTypeOnPressButton(0)
                            }}
                        >
                            <Text style={ this.state.shotTypePressed[0] ? styles.select_text_Press : styles.select_text }>
                                スマッシュ
                            </Text>
                        </TouchableHighlight>
                         
                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.shotTypePressed[1] ? styles.shot_type_button_press : styles.shot_type_button }
                            onPress={() =>{
                                this.shotTypeOnPressButton(1)
                            }}
                        >
                            <Text style={ this.state.shotTypePressed[1] ? styles.select_text_Press : styles.select_text }>
                                ドロップ
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.shotTypePressed[2] ? styles.shot_type_button_press : styles.shot_type_button }
                            onPress={() =>{
                                this.shotTypeOnPressButton(2)
                            }}
                        >
                            <Text style={ this.state.shotTypePressed[2] ? styles.select_text_Press : styles.select_text }>
                                ヘアピン
                            </Text>
                        </TouchableHighlight>
                         
                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.shotTypePressed[3] ? styles.shot_type_button_press : styles.shot_type_button }
                            onPress={() =>{
                                this.shotTypeOnPressButton(3)
                            }}
                        >
                            <Text style={ this.state.shotTypePressed[3] ? styles.select_text_Press : styles.select_text }>
                                クリアー
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.shotTypePressed[4] ? styles.shot_type_button_press : styles.shot_type_button }
                            onPress={() =>{
                                this.shotTypeOnPressButton(4)
                            }}
                        >
                            <Text style={ this.state.shotTypePressed[4] ? styles.select_text_Press : styles.select_text }>
                                プッシュ
                            </Text>
                        </TouchableHighlight>
                         
                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.shotTypePressed[5] ? styles.shot_type_button_press : styles.shot_type_button }
                            onPress={() =>{
                                this.shotTypeOnPressButton(5)
                            }}
                        >
                            <Text style={ this.state.shotTypePressed[5] ? styles.select_text_Press : styles.select_text }>
                                ドライブ
                            </Text>
                        </TouchableHighlight>
                        
                    </View>

                </View>


                 <View style={{flexDirection:"row"}}>

                    <Text style={styles.term_text}>
                        期間
                    </Text>

                    <View style={styles.term_frame}>
                        
                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.termPressed[0] ? styles.term_button_press : styles.term_button }
                            onPress={() =>{
                                this.termOnPressButton(0)
                            }}
                        >
                            <Text style={ this.state.termPressed[0] ? styles.select_text_Press : styles.select_text }>
                                Day
                            </Text>
                        </TouchableHighlight>
                         
                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.termPressed[1] ? styles.term_button_press : styles.term_button }
                            onPress={() =>{
                                this.termOnPressButton(1)
                            }}
                        >
                            <Text style={ this.state.termPressed[1] ? styles.select_text_Press : styles.select_text }>
                                Week
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={ 0.6 }
                            underlayColor={'transparent'}
                            style={ this.state.termPressed[2] ? styles.term_button_press : styles.term_button }
                            onPress={() =>{
                                this.termOnPressButton(2)
                            }}
                        >
                            <Text style={ this.state.termPressed[2] ? styles.select_text_Press : styles.select_text }>
                                Month
                            </Text>
                        </TouchableHighlight>

                    </View>

                </View>


                 <View style={{flexDirection:"row"}}>

                    <Text style={styles.opponent_text}>
                        対戦相手
                    </Text>

                    <View style={styles.opponent_frame}/>
                    <View style={styles.opponent_frame}/>

                </View>


                 <View style={{flexDirection:"row"}}>

                    <Text style={styles.game_select_text}>
                        試合選択
                    </Text>

                    <View style={styles.game_select_frame}/>

                </View>


                <TouchableOpacity onPress={Actions.analysis_view} style={styles.analyze}>                
                    <Image
                        source={require("../../assets/img/analyze_button.png")}
                        style={styles.analyze_button}
                    />
                    <Text style={styles.analyze_text}>
                        Analyze
                    </Text>
                </TouchableOpacity>          

            </View>
        );
    }
}
export default connect()(AnalysisCreate)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subtitle_text: {
        color: '#ffffff',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: -30,
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

    frame: {
        flexDirection: "row",
        backgroundColor: 'transparent',
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 34,
        width: 222,
        borderWidth: 1.5,
        marginLeft: 30,
        borderRadius: 3,
        marginTop: 37,
        justifyContent: 'center',
    },

    game_style_button_press: {
        backgroundColor: '#0a2444',
        width: 90,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 2,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    game_style_button: {
        backgroundColor: 'transparent',
        width: 90,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 2,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    select_text_Press: {
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
    },

    select_text: {
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
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

    shot_type_frame: {
        backgroundColor: 'transparent',
        borderRightColor: '#0a2444',
        borderTopColor: '#0a2444',
        borderLeftColor: '#0a2444',
        borderBottomColor: '#0a2444',
        height: 108,
        width: 222,
        borderWidth: 1.5,
        marginLeft: 58,
        borderRadius: 3,
        marginTop: 25,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
     },

    shot_type_button_press: {
        backgroundColor: '#0a2444',
        height: 26,
        width: 90,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    shot_type_button: {
        backgroundColor: 'transparent',
        height: 26,
        width: 90,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
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

    term_frame: {      
        flexDirection: "row",
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

     term_button_press: {
        backgroundColor: '#0a2444',
        width: 60,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 2,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    term_button: {
        backgroundColor: 'transparent',
        width: 60,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 2,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
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
        flexDirection: "row",
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
        flexDirection: "row",
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

     analyze_button: {
        opacity: 0.4,
        marginTop: 0,
     },

     analyze_text: {
        position: "absolute",
        top: 14, 
        fontSize: 20,
        backgroundColor: 'transparent',
        color: '#ffffff',
        alignSelf: 'center',
     },
});
