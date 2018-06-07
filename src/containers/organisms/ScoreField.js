import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import {
  InFieldLength,
  InFieldSide,
  InFieldCircle,
  OutFieldSide,
  OutFieldLength
} from "atoms";

const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;

export default class ScoreField extends React.Component {
  renderInField() {
    if (this.props.renderInField) {
      return this.props.renderInField();
    } else {
      return null;
    }
  }
  render() {
    const sizeMagnification = this.props.horizontal ? 1 : 2;
    const fieldType = {
      1: "field-line-badminton.png",
      2: "field-line-tennis.png"
    };
    return (
      <View
        style={{
          justifyContent: "center",
          height: height, //170 * sizeMagnification,
          width: width //300 * sizeMagnification,
        }}
      >
        {this.renderInField()}
        <Image
          style={{
            position: "absolute",
            alignSelf: "center",
            height: height * 0.7, //170 * sizeMagnification,
            width: width * 0.7, //300 * sizeMagnification,
            backfaceVisibility: "hidden",
            resizeMode: "contain"
          }}
          source={{ url: fieldType[this.props.sport] }}
        />
        <View style={styles.overContainer}>
          <View style={[styles.overOutFieldSideContainer, styles.coatSideLeft]}>
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={5}
              side={0}
            />
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={6}
              side={0}
            />
          </View>
          <View
            style={[styles.overOutFieldSideContainer, styles.coatSideRight]}
          >
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={1}
              side={1}
            />
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={2}
              side={1}
            />
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={[styles.outFieldLengthContainer, styles.coatEndLeft]}>
            <OutFieldLength
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={4}
              side={0}
            />
            <OutFieldLength
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={3}
              side={0}
            />
          </View>
          <View style={[styles.inFieldContainer, styles.inCoatLeft]}>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={11}
                side={0}
              />
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={10}
                side={0}
              />
            </View>
            <View style={styles.inFieldSideContainer}>
              <InFieldSide
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={12}
                side={0}
              />
              <View style={styles.inFieldCircleContainer}>
                <InFieldCircle
                  renderInButton={this.props.renderInButton}
                  horizontal={this.props.horizontal}
                  callback={this.props.callback}
                  position={7}
                  side={0}
                />
              </View>
              <InFieldSide
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={9}
                side={0}
              />
            </View>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={13}
                side={0}
              />
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={8}
                side={0}
              />
            </View>
          </View>
          <View style={[styles.inFieldContainer, styles.inCoatRight]}>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={8}
                side={1}
              />
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={13}
                side={1}
              />
            </View>
            <View style={styles.inFieldSideContainer}>
              <InFieldSide
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={9}
                side={1}
              />
              <View style={styles.inFieldCircleContainer}>
                <InFieldCircle
                  renderInButton={this.props.renderInButton}
                  horizontal={this.props.horizontal}
                  callback={this.props.callback}
                  position={7}
                  side={1}
                />
              </View>
              <InFieldSide
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={12}
                side={1}
              />
            </View>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={10}
                side={1}
              />
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={11}
                side={1}
              />
            </View>
          </View>
          <View style={[styles.outFieldLengthContainer, styles.coatEndRight]}>
            <OutFieldLength
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={3}
              side={1}
            />
            <OutFieldLength
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={4}
              side={1}
            />
          </View>
        </View>
        <View style={styles.underContainer}>
          <View
            style={[styles.underOutFieldSideContainer, styles.coatSideLeft]}
          >
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={2}
              side={0}
            />
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={1}
              side={0}
            />
          </View>
          <View
            style={[styles.underOutFieldSideContainer, styles.coatSideRight]}
          >
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={6}
              side={1}
            />
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={5}
              side={1}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overContainer: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    height: height * 0.7
  },
  overOutFieldSideContainer: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    top: -10
  },
  underContainer: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    height: height * 0.7
  },
  underOutFieldSideContainer: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    bottom: -10
  },

  coatSideLeft: {
    paddingRight: 10,
    right: "50%",
    position: "absolute",
    width: width * 0.35,
    justifyContent: "space-between"
  },
  coatSideRight: {
    paddingLeft: 10,
    left: "50%",
    position: "absolute",
    width: width * 0.35,
    justifyContent: "space-between"
  },
  middleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    width: width * 0.7
  },

  outFieldLengthContainer: {
    flexDirection: "column"
  },

  coatEndLeft: {
    left: -30,
    position: "absolute",
    alignSelf: "center",
    height: height * 0.6,
    justifyContent: "space-between"
  },
  coatEndRight: {
    right: -30,
    position: "absolute",
    alignSelf: "center",
    height: height * 0.6,
    justifyContent: "space-between"
  },
  inFieldContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: width * 0.35,
    height: height * 0.45
  },
  inFieldLengthContainer: { justifyContent: "space-between" },
  inFieldCircleContainer: { justifyContent: "space-between" },
  inFieldSideContainer: {
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
    justifyContent: "space-between"
  }
});
