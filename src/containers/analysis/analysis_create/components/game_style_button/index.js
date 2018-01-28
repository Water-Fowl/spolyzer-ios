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
