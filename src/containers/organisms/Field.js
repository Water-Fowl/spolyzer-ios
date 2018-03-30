import React from "react";
import {
  View,
  Image,
} from "react-native";

import {
  InFieldLength,
  InFieldSide,
  InFieldCircle,
  OutFieldSide,
  OutFieldLength
} from "atoms";

export default class Field extends React.Component {
  render(){
    return (
      <View style={styles.field}>
        <Image style={styles.fieldLine} source={require("../../../assets/img/field-line.png")} />
        <View style={styles.overContainer}>
          <View style={styles.overOutFieldSideContainer}>
            <OutFieldSide callback={this.props.callback} position={5} side={0} />
            <OutFieldSide callback={this.props.callback} position={6} side={0}/>
          </View>
          <View style={styles.overOutFieldSideContainer}>
            <OutFieldSide callback={this.props.callback} position={0} side={1}/>
            <OutFieldSide callback={this.props.callback} position={1} side={1}/>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.outFieldLengthContainer}>
            <OutFieldLength callback={this.props.callback} position={4} side={0}/>
            <OutFieldLength callback={this.props.callback} position={3} side={0}/>
          </View>
          <View style={styles.inFieldContainer}>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength callback={this.props.callback} position={11} side={0}/>
              <InFieldLength callback={this.props.callback} position={10} side={0}/>
            </View>
            <View style={styles.inFieldSideContainer}>
              <InFieldSide callback={this.props.callback} position={12} side={0}/>
              <View style={styles.inFieldCircleContainer}>
                <InFieldCircle callback={this.props.callback} position={7} side={0}/>
              </View>
              <InFieldSide callback={this.props.callback} position={9} side={0}/>
            </View>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength callback={this.props.callback} position={13} side={0}/>
              <InFieldLength callback={this.props.callback} position={8} side={0}/>
            </View>
          </View>
          <View style={styles.inFieldContainer}>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength callback={this.props.callback} position={8} side={1} />
              <InFieldLength callback={this.props.callback} position={13} side={1}/>
            </View>
            <View style={styles.inFieldSideContainer}>
              <InFieldSide callback={this.props.callback} position={9} side={1}/>
              <View style={styles.inFieldCircleContainer}>
                <InFieldCircle callback={this.props.callback} position={7} side={1}/>
              </View>
              <InFieldSide callback={this.props.callback} position={12} side={1}/>
            </View>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength callback={this.props.callback} position={10} side={1}/>
              <InFieldLength callback={this.props.callback} position={11} side={1}/>
            </View>
          </View>
          <View style={styles.outFieldLengthContainer}>
            <OutFieldLength callback={this.props.callback} position={3} side={1}/>
            <OutFieldLength callback={this.props.callback} position={4} side={1}/>
          </View>
        </View>
        <View style={styles.underContainer}>
          <View style={styles.underOutFieldSideContainer}>
            <OutFieldSide callback={this.props.callback} position={2} side={0} />
            <OutFieldSide callback={this.props.callback} position={1} side={0}/>
          </View>
          <View style={styles.underOutFieldSideContainer}>
            <OutFieldSide callback={this.props.callback} position={6} side={1}/>
            <OutFieldSide callback={this.props.callback} position={5} side={1}/>
          </View>
        </View>
      </View>
    );
  }
}
