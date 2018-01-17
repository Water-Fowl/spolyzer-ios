import React from "react"; 
import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableHighlight,
    BackgroundImage,
    StyleSheet,
} from "react-native";
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import { postGameInformation } from '../actions/game'

class AnalysisCreate extends React.Component{
    constructor(props){
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
            <View>
              <TouchableHighlight onPress={() =>{
                  this.postGameInformationForm()
              }}>
                <Text>ポスト</Text>
              </TouchableHighlight>
            </View>
        );
    }
}
export default connect()(AnalysisCreate)

const styles = StyleSheet.create({
});
