import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

export default class ProfileImage extends React.Component{
  componentWillReceiveProps(nextProps){
    this.forceUpdate();
  };
  render(){
    if(this.props.profileImageSource != null){
      return(
        <Image style={styles.image_style} source={{uri: this.props.profileImageSource}} />
      )
    }
    else{
      return(
        <Image style={styles.image_style} source={require('../../../../assets/img/score_create_person.png')} />
      )
    }
  }
}

const styles = StyleSheet.create({
  image_style:{
    marginLeft:10,
    opacity:0.5,
    width:100,
    height:100,
    borderRadius: 50,
  },
})
