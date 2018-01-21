import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';

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
    background: {
        zIndex:0,
        flex: 1,
        position:"absolute",
        alignSelf: 'stretch',
        width: win.width,
        height: win.height,
    },
    align_items_center:{
        alignItems: "center",
    },
    flex_row:{
        flexDirection: "row",
    },
    bar:{
        zIndex:2,
    },
    topbarimg:{
        alignItems: "center",
        width: win.width,
    },
    menu:{
        zIndex:3,
        flex:1,
    },
    profile: {
        alignItems: 'center',
        zIndex:4,
        margin: 30,
    },
});
