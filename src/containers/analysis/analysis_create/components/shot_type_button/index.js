import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';


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
