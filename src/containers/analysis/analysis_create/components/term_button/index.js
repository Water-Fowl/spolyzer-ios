import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';


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

