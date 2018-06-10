import React from "react";
import { View, Image, StyleSheet } from "react-native";

import {
  InFieldLength,
  InFieldSide,
  InFieldCircle,
  OutFieldSide,
  OutFieldLength
} from "atoms";

export default class AnalysisField extends React.Component {
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
          alignSelf: "center",
          justifyContent: "center",
          flex: 1,
          marginBottom: 5,
          height: 170 * sizeMagnification,
          width: 300 * sizeMagnification,
          marginTop: this.props.margin || 26
        }}
      >
        {this.renderInField()}
        <Image
          style={{
            position: "absolute",
            alignSelf: "center",
            height: (this.props.fieldHeight || 145) * sizeMagnification,
            width: (this.props.fieldWidth || 256) * sizeMagnification,
            backfaceVisibility: "hidden",
            resizeMode: "contain"
          }}
          source={{ url: fieldType[this.props.sport] }}
        />
        <View style={styles.overContainer}>
          <View style={styles.overOutFieldSideContainer}>
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
          <View style={styles.overOutFieldSideContainer}>
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
          <View style={styles.outFieldLengthContainer}>
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
          <View style={styles.inFieldContainer}>
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
          <View style={styles.inFieldContainer}>
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
          <View style={styles.outFieldLengthContainer}>
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
          <View style={styles.underOutFieldSideContainer}>
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
          <View style={styles.underOutFieldSideContainer}>
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
    flexDirection: "row",
    flex: 1,
    zIndex: 2,
    justifyContent: "space-between"
  },
  overOutFieldSideContainer: {
    alignSelf: "flex-start",
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  middleContainer: {
    flexDirection: "row",
    flex: 4,
    justifyContent: "space-between"
  },
  underContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  outFieldLengthContainer: {
    marginLeft: 4,
    marginRight: 4,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  inFieldContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  inFieldLengthContainer: {
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  inFieldCircleContainer: {
    justifyContent: "space-between"
  },
  inFieldSideContainer: {
    marginLeft: 6,
    marginRight: 6,
    justifyContent: "space-between"
  },
  underOutFieldSideContainer: {
    alignSelf: "flex-end",
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row"
  }
});
