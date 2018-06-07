import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import { ScoreFields } from "atoms";

const { height, width } = Dimensions.get("window");
const InFieldSide = ScoreFields.InFieldSide;
const InFieldCircle = ScoreFields.InFieldCircle;
const InFieldLength = ScoreFields.InFieldLength;
const OutFieldSide = ScoreFields.OutFieldSide;
const OutFieldLength = ScoreFields.OutFieldLength;
export default class ScoreField extends React.Component {
  constructor(props) {
    super(props);
  }
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
          height: this.props.height, //170 * sizeMagnification,
          width: this.props.width //300 * sizeMagnification,
        }}
      >
        {this.renderInField()}
        <Image
          style={{
            position: "absolute",
            alignSelf: "center",
            height: this.props.height * 0.7, //170 * sizeMagnification,
            width: this.props.width * 0.7, //300 * sizeMagnification,
            backfaceVisibility: "hidden",
            resizeMode: "contain"
          }}
          source={{ url: fieldType[this.props.sport] }}
        />
        <View
          style={[
            styles.overContainer,
            {
              height: this.props.height * 0.7
            }
          ]}
        >
          <View
            style={[
              styles.overOutFieldSideContainer,
              styles.coatSideLeft,
              {
                width: this.props.width * 0.35
              }
            ]}
          >
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={5}
              side={0}
              height={this.props.height}
              width={this.props.width}
            />
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={6}
              side={0}
              height={this.props.height}
              width={this.props.width}
            />
          </View>
          <View
            style={[
              styles.overOutFieldSideContainer,
              styles.coatSideRight,
              {
                width: this.props.width * 0.35
              }
            ]}
          >
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={1}
              side={1}
              height={this.props.height}
              width={this.props.width}
            />
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={2}
              side={1}
              height={this.props.height}
              width={this.props.width}
            />
          </View>
        </View>
        <View
          style={[
            styles.middleContainer,
            {
              width: this.props.width * 0.7
            }
          ]}
        >
          <View
            style={[
              styles.outFieldLengthContainer,
              styles.coatEndLeft,
              {
                height: this.props.height * 0.6
              }
            ]}
          >
            <OutFieldLength
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={4}
              side={0}
              height={this.props.height}
              width={this.props.width}
            />
            <OutFieldLength
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={3}
              side={0}
              height={this.props.height}
              width={this.props.width}
            />
          </View>
          <View
            style={[
              styles.inFieldContainer,
              {
                width: this.props.width * 0.35,
                height: this.props.height * 0.45
              },
              styles.inCoatLeft
            ]}
          >
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={11}
                side={0}
                height={this.props.height}
                width={this.props.width}
              />
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={10}
                side={0}
                height={this.props.height}
                width={this.props.width}
              />
            </View>
            <View
              style={[
                styles.inFieldSideContainer,
                {
                  marginLeft: this.props.width * 0.04,
                  marginRight: this.props.width * 0.04
                }
              ]}
            >
              <InFieldSide
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={12}
                side={0}
                height={this.props.height}
                width={this.props.width}
              />
              <View style={styles.inFieldCircleContainer}>
                <InFieldCircle
                  renderInButton={this.props.renderInButton}
                  horizontal={this.props.horizontal}
                  callback={this.props.callback}
                  position={7}
                  side={0}
                  height={this.props.height}
                  width={this.props.width}
                />
              </View>
              <InFieldSide
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={9}
                side={0}
                height={this.props.height}
                width={this.props.width}
              />
            </View>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={13}
                side={0}
                height={this.props.height}
                width={this.props.width}
              />
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={8}
                side={0}
                height={this.props.height}
                width={this.props.width}
              />
            </View>
          </View>
          <View
            style={[
              styles.inFieldContainer,
              {
                width: this.props.width * 0.35,
                height: this.props.height * 0.45
              },
              styles.inCoatRight
            ]}
          >
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={8}
                side={1}
                height={this.props.height}
                width={this.props.width}
              />
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={13}
                side={1}
                height={this.props.height}
                width={this.props.width}
              />
            </View>
            <View
              style={[
                styles.inFieldSideContainer,
                {
                  marginLeft: this.props.width * 0.04,
                  marginRight: this.props.width * 0.04
                }
              ]}
            >
              <InFieldSide
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={9}
                side={1}
                height={this.props.height}
                width={this.props.width}
              />
              <View style={styles.inFieldCircleContainer}>
                <InFieldCircle
                  renderInButton={this.props.renderInButton}
                  horizontal={this.props.horizontal}
                  callback={this.props.callback}
                  position={7}
                  side={1}
                  height={this.props.height}
                  width={this.props.width}
                />
              </View>
              <InFieldSide
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={12}
                side={1}
                height={this.props.height}
                width={this.props.width}
              />
            </View>
            <View style={styles.inFieldLengthContainer}>
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={10}
                side={1}
                height={this.props.height}
                width={this.props.width}
              />
              <InFieldLength
                renderInButton={this.props.renderInButton}
                horizontal={this.props.horizontal}
                callback={this.props.callback}
                position={11}
                side={1}
                height={this.props.height}
                width={this.props.width}
              />
            </View>
          </View>
          <View
            style={[
              styles.outFieldLengthContainer,
              styles.coatEndRight,
              {
                height: this.props.height * 0.6
              }
            ]}
          >
            <OutFieldLength
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={3}
              side={1}
              height={this.props.height}
              width={this.props.width}
            />
            <OutFieldLength
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={4}
              side={1}
              height={this.props.height}
              width={this.props.width}
            />
          </View>
        </View>
        <View
          style={[
            styles.underContainer,
            {
              height: this.props.height * 0.7
            }
          ]}
        >
          <View
            style={[
              styles.underOutFieldSideContainer,
              styles.coatSideLeft,
              {
                width: this.props.width * 0.35
              }
            ]}
          >
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={2}
              side={0}
              height={this.props.height}
              width={this.props.width}
            />
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={1}
              side={0}
              height={this.props.height}
              width={this.props.width}
            />
          </View>
          <View
            style={[
              styles.underOutFieldSideContainer,
              styles.coatSideRight,
              {
                width: this.props.width * 0.35
              }
            ]}
          >
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={6}
              side={1}
              height={this.props.height}
              width={this.props.width}
            />
            <OutFieldSide
              renderInButton={this.props.renderInButton}
              horizontal={this.props.horizontal}
              callback={this.props.callback}
              position={5}
              side={1}
              height={this.props.height}
              width={this.props.width}
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
    alignSelf: "center"
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
    alignSelf: "center"
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
    justifyContent: "space-between"
  },
  coatSideRight: {
    paddingLeft: 10,
    left: "50%",
    position: "absolute",
    justifyContent: "space-between"
  },
  middleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center"
  },

  outFieldLengthContainer: {
    flexDirection: "column"
  },

  coatEndLeft: {
    left: -30,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  coatEndRight: {
    right: -30,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  inFieldContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  inFieldLengthContainer: { justifyContent: "space-between" },
  inFieldCircleContainer: { justifyContent: "space-between" },
  inFieldSideContainer: {
    justifyContent: "space-between"
  }
});
