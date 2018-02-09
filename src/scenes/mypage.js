import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import { Actions } from 'react-native-router-flux';

import {
    Background,
    TopBar,
    TopContentBar,
    NavBar,
} from "../components";

const win = Dimensions.get('window');


class Mypage extends React.Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        headerLeft: <View></View>,
	}
    componentWillUpdate() {
        Orientation.lockToPortrait();
        console.log('Update')
    }

    render(){
        const { actions } = this.props
        return(


            <View style={styles.container}>
              <Background/>
              <NavBar/>
              <Text style={styles.subtitle_text}>
                マイデータ
              </Text>

              <View style={styles.align_items_center}>
                  <Image
                    source={require('../../assets/img/my_page_user_icon.png')}
                    style={styles.user_icon}
                  />
                  <TouchableOpacity onPress={Actions.sign_up}>
                      <Text style={styles.sign_up_button_text}>
                          edit
                      </Text>
                  </TouchableOpacity>
                  <Image
                    source={require('../../assets/img/my_page_center_design.png')}
                  />
                  <Text style={styles.my_name}>
                    ここにNAME
                  </Text>
                  <View style={styles.game_setting_border}>
                      <View style={styles.game_setting_table}/>
                  </View>
              </View>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
  // reducerをstateから取得
  const { scoreReducer } = state
  // 必要なpropsを取得
  const {
    actions: actions,
  } = scoreReducer || {
    actions: "",
  }
  // 返却(忘れるとComponentに渡らない)
  return {
    actions,
  }
}

export default connect(mapStateToProps)(Mypage);

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
    user_icon:{
        margin:15,
        opacity:0.3,
    },
    game_setting_border:{
      marginTop: 10,
      padding:5,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1.5,
      borderColor: "rgb(20, 35, 70)",
      borderRadius: 3,
    },
    game_setting_table:{
      width:320,
      height:245,
      justifyContent: 'center',
      borderWidth: 1.5,
      borderColor: "rgb(20, 35, 70)",
      borderRadius: 3,
    },
    my_name:{
      position:"absolute",
      marginTop:220,
      backgroundColor: 'transparent',
      color: '#ffffff',
      fontSize:20,
    },
    align_items_center:{
        alignItems: "center",
    },

});