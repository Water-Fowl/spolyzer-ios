import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export class GameStyleButton extends React.Component {

    constructor(props) {
        super(props);
        gameStylePressed = [true, false]
        this.state = {gameStylePressed:gameStylePressed}
    }

    gameStyleOnPressButton(id){
        gameStylePressed = [false, false]
        gameStylePressed[id] = true
        this.setState({gameStylePressed: gameStylePressed})
    }


    render(){
        return(
            <View style={styles.frame}>
               <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.gameStylePressed[0] ? styles.game_style_button_pressed : styles.game_style_button }
                    onPress={() =>{
                        this.gameStyleOnPressButton(0)
                    }}
                >
                    <Text style={ this.state.gameStylePressed[0] ? styles.select_text_pressed : styles.select_text }>
                        シングルス
                    </Text>
                </TouchableHighlight>
                         
                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.gameStylePressed[1] ? styles.game_style_button_pressed : styles.game_style_button }
                    onPress={() =>{
                        this.gameStyleOnPressButton(1)
                    }}
                >
                    <Text style={ this.state.gameStylePressed[1] ? styles.select_text_pressed : styles.select_text }>
                        ダブルス
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export class ShotTypeButton extends React.Component {
    constructor(props) {
        super(props);
        shotTypePressed = [true, false, false, false, false, false]
        this.state = {shotTypePressed:shotTypePressed}
    }

    shotTypeOnPressButton(id){
        shotTypePressed = [false, false, false, false, false, false]
        shotTypePressed[id] = true
        this.setState({shotTypePressed:shotTypePressed})
    }

    render(){
        return(
            <View style={styles.shot_type_frame}>
                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.shotTypePressed[0] ? styles.shot_type_button_pressed : styles.shot_type_button }
                    onPress={() =>{
                        this.shotTypeOnPressButton(0)
                    }}
                >
                    <Text style={ this.state.shotTypePressed[0] ? styles.select_text_pressed : styles.select_text }>
                        スマッシュ
                    </Text>
                </TouchableHighlight>
                         
                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.shotTypePressed[1] ? styles.shot_type_button_pressed : styles.shot_type_button }
                    onPress={() =>{
                        this.shotTypeOnPressButton(1)
                    }}
                >
                    <Text style={ this.state.shotTypePressed[1] ? styles.select_text_pressed : styles.select_text }>
                        ドロップ
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.shotTypePressed[2] ? styles.shot_type_button_pressed : styles.shot_type_button }
                    onPress={() =>{
                        this.shotTypeOnPressButton(2)
                    }}
                >
                   <Text style={ this.state.shotTypePressed[2] ? styles.select_text_pressed : styles.select_text }>
                        ヘアピン
                   </Text>
                </TouchableHighlight>
                         
                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.shotTypePressed[3] ? styles.shot_type_button_pressed : styles.shot_type_button }
                    onPress={() =>{
                        this.shotTypeOnPressButton(3)
                    }}
                >
                    <Text style={ this.state.shotTypePressed[3] ? styles.select_text_pressed : styles.select_text }>
                        クリアー
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.shotTypePressed[4] ? styles.shot_type_button_pressed : styles.shot_type_button }
                    onPress={() =>{
                        this.shotTypeOnPressButton(4)
                    }}
                >
                    <Text style={ this.state.shotTypePressed[4] ? styles.select_text_pressed : styles.select_text }>
                        プッシュ
                    </Text>
                </TouchableHighlight>
                         
                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.shotTypePressed[5] ? styles.shot_type_button_pressed : styles.shot_type_button }
                    onPress={() =>{
                        this.shotTypeOnPressButton(5)
                    }}
                >
                    <Text style={ this.state.shotTypePressed[5] ? styles.select_text_pressed : styles.select_text }>
                        ドライブ
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export class TermButton extends React.Component {

    constructor(props) {
        super(props);
        termPressed = [true, false, false]
        this.state = {termPressed:termPressed}
    }

    termOnPressButton(id){
        termPressed = [false, false, false]
        termPressed[id] = true
        this.setState({termPressed:termPressed})
    }

    render(){
        return(
            <View style={styles.term_frame}>
                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.termPressed[0] ? styles.term_button_pressed : styles.term_button }
                    onPress={() =>{
                        this.termOnPressButton(0)
                    }}
                >
                    <Text style={ this.state.termPressed[0] ? styles.select_text_pressed : styles.select_text }>
                        Day
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.termPressed[1] ? styles.term_button_pressed : styles.term_button }
                    onPress={() =>{
                        this.termOnPressButton(1)
                    }}
                >
                    <Text style={ this.state.termPressed[1] ? styles.select_text_pressed : styles.select_text }>
                        Week
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    activeOpacity={ 0.6 }
                    underlayColor={'transparent'}
                    style={ this.state.termPressed[2] ? styles.term_button_pressed : styles.term_button }
                    onPress={() =>{
                        this.termOnPressButton(2)
                    }}
                >
                    <Text style={ this.state.termPressed[2] ? styles.select_text_pressed : styles.select_text }>
                        Month
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    game_style_button_pressed: {
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

    select_text_pressed: {
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

    shot_type_button_pressed: {
        backgroundColor: '#0a2444',
        height: 28,
        width: 90,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 4,
        marginBottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    shot_type_button: {
        backgroundColor: 'transparent',
        height: 28,
        width: 90,
        marginRight: 3,
        marginLeft: 3,
        marginTop: 4,
        marginBottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    
    term_button_pressed: {
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

});