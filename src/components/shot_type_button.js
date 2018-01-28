import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import { scoreCreateShotTypeButtonEnhancer } from '../enhances'
import { connect } from 'react-redux'
class ScoreCreateShotTypeButton extends React.Component {
  render(){
    return(
      <TouchableHighlight onPress={()=>
        {
          this.hideModalEvent()
        } 
      }>
      <Text style={styles.shot_type}>{ this.props.children }</Text>
      </TouchableHighlight>
    )
  }
}
export default connect()(scoreCreateShotTypeButtonEnhancer(ScoreCreateShotTypeButton))
const styles = StyleSheet.create({
  shot_type: {
    fontSize:30,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    margin:5,
    color: 'white',
    backgroundColor: '#2EA7E0',
  },
})

