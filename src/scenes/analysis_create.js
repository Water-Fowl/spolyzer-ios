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
import { NavigateButton } from "../components";
import { GameStyleButton } from "../components";
import { ShotTypeButton } from "../components";
import { TermButton } from "../components";

class AnalysisCreate extends React.Component{

    componentWillMount() {
        Orientation.lockToPortrait();
    }
  constructor(props) {
    super(props);
    this.postGameInformationForm.bind(this)
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
                        
                    <GameStyleButton/>

                </View>

                <View style={{flexDirection:"row"}}>
                    
                    <Text style={styles.shot_type_text}>
                        球種
                    </Text>
                    
                    <ShotTypeButton/>

                </View>

                 <View style={{flexDirection:"row"}}>

                    <Text style={styles.term_text}>
                        期間
                    </Text>

                    <TermButton/>

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

                <NavigateButton action={Actions.analysis_view} style={styles.analyze} text='Analyze' />          

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

});
