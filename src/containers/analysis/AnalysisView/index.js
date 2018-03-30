import React from "react";
import baseEnhancer from "enhances";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from "react-native";
import {
  Graph,
  TopContentBar,
  ProfileImage
} from "components";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme
} from "victory-native";
import { connect } from "react-redux";
import setPositionsCount from "../actions/set_positions_count";
import { mapStateToProps } from "utils";
const IN_MIN_POSITION = 7;
const IN_MAX_POSITION = 13;
const OUT_MIN_POSITION = 1;
const OUT_MAX_POSITION = 6;
const OUT = 0;
const IN = 1;
const LEFT = 0;
const RIGHT = 1;
const TERM_LIST = ["Day", "Week", "Month"]

class AnalysisView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      /* Out = 0, In = 1 */
      /* Left = 0, Right = 1 */
      onPressOut: OUT,
      onPressSide: LEFT
    };
  }

  setPositionEvent(minPosition, maxPosition, side) {
    this.props.dispatch(setPositionsCount(minPosition, maxPosition, side));
  }

  onPressArea(minPosition, maxPosition, side, is_out){
    this.props.dispatch(setPositionsCount(side, minPosition, maxPosition));
  }

  _renderFieldButtonText(side, out, droppedAtId){
    if(this.state.onPressSide == side && this.state.onPressOut == out){
      return(
        <Text style={styles.droppedIdText}>{droppedAtId}</Text>
      );
    }
    else{
      return(
        <View/>
      );
    }
  }
  _renderInFieldLength(side, droppedAtId){
    return (
      <TouchableHighlight
        style={styles.varticalBlueBar}
        onPress={() => {
          this.setPositionEvent(IN_MIN_POSITION, IN_MAX_POSITION, side);
          this.setState({ onPressOut: IN, onPressSide: side });
        }}
      >
        {this._renderFieldButtonText(side, IN, droppedAtId)}
      </TouchableHighlight>
    );
  }

  _renderOutFieldLength(side, droppedAtId){
    return (
      <TouchableHighlight
        style={styles.varticalYellowBarLeft}
        onPress={() => {
          this.setPositionEvent(OUT_MIN_POSITION, OUT_MAX_POSITION, side);
          this.setState({ onPressOut: OUT, onPressSide: side });
        }}
      >
        {this._renderFieldButtonText(side, OUT, droppedAtId)}
      </TouchableHighlight>
    );
  }

  _renderInFieldSide(side, droppedAtId){
    return (
      <TouchableHighlight
        style={styles.horizontalBlueBar}
        onPress={() => {
          this.setPositionEvent(IN_MIN_POSITION, IN_MAX_POSITION, side);
          this.setState({ onPressOut: IN, onPressSide: side });
        }}
      >
        {this._renderFieldButtonText(side, IN, droppedAtId)}
      </TouchableHighlight>

    );
  }

  _renderOutFieldSide(side, droppedAtId){
    return (
      <TouchableHighlight
        style={styles.horizontalYellowBarLeft}
        onPress={() => {
          this.setPositionEvent(OUT_MIN_POSITION, OUT_MAX_POSITION, side);
          this.setState({ onPressOut: OUT, onPressSide: side });
        }}
      >
        {this._renderFieldButtonText(side, OUT, droppedAtId)}
      </TouchableHighlight>
    );
  }

  _renderInFieldCircle(side, droppedAtId){
    return(
      <TouchableHighlight
        style={styles.blueCircle}
        onPress={() => {
          this.setPositionEvent(IN_MIN_POSITION, IN_MAX_POSITION, side);
          this.setState({ onPressOut: IN, onPressSide: side });
        }}
      >
        {this._renderFieldButtonText(side, IN, droppedAtId)}
      </TouchableHighlight>
    );
  }

  _renderOutArea(){
    return (
      <View>
        <View style={styles.outAreaContainer}>
          <TouchableOpacity
            onPress={()=>{
              this.onPressArea(side=0, minPosition=OUT_MIN_POSITION, maxPosition=OUT_MAX_POSITION);
            }}
            style={styles.outFieldArea}
          />
          <TouchableOpacity
            onPress={()=>{
              this.onPressArea(side=1, minPosition=OUT_MIN_POSITION, maxPosition=OUT_MAX_POSITION);
            }}
            style={styles.outFieldArea}
          />
        </View>
        <View style={styles.blankContainer}>
          <View style={styles.blankArea} />
          <View style={styles.blankArea} />
        </View>
      </View>
    );
  }

  _renderInArea(){
    return (
      <View style={styles.inAreaContainer}>
        <TouchableOpacity
          style={styles.inArea}
          onPress={() => {
            this.onPressArea(side=0, minPosition=IN_MIN_POSITION, maxPosition=IN_MAX_POSITION);
          }}
        />
        <TouchableOpacity
          style={styles.inArea}
          onPress={() => {
            this.onPressArea(side=1, minPosition=IN_MIN_POSITION, maxPosition=IN_MAX_POSITION);
          }}
        />
      </View>
    );
  }

  _renderOpponentUserNames(users){
    const opponentUserNameComponentList = []
    for (let userIdx in users){
      opponentUserNameComponentList.push(
        <View style={styles.flexDirectionRow}>
          <ProfileImage
            imageSource={users[userIdx].image.url}
            size={20}
          />
          <Text style={styles.opponentName}>{users[userIdx].name}</Text>
        </View>
      )
    }
    return(
      <View style={styles.opponentUserNameContainer}>
        { opponentUserNameComponentList }
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>複合分析結果</TopContentBar>
        <ScrollView>
          <View style={styles.analysisInformationContiner}>
            <Text style={styles.vsText}>vs</Text>
            <View style={styles.nameOutsideContainer}>
              <View style={styles.nameInsideContainer}>
                { this._renderOpponentUserNames(this.props.analysis.analysisUsers) }
              </View>
            </View>
          </View>
          <View style={styles.optionContainer}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>{TERM_LIST[this.props.analysis.term]}</Text>
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>{this.props.sport.shotTypes[this.props.analysis.shotTypeId]}</Text>
            </View>
          </View>
          <View style={styles.field}>
            { this._renderOutArea() }
            { this._renderInArea() }
            <Image style={styles.fieldLine} source={require("../../../assets/img/field-line.png")} />
            <View style={styles.overContainer}>
              <View style={styles.overOutFieldSideContainer}>
                { this._renderOutFieldSide(0, "E") }
                { this._renderOutFieldSide(0, "F") }
              </View>
              <View style={styles.overOutFieldSideContainer}>
                { this._renderOutFieldSide(1, "A") }
                { this._renderOutFieldSide(1, "B") }
              </View>
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.outFieldLengthContainer}>
                { this._renderOutFieldLength(0, "D") }
                { this._renderOutFieldLength(0, "C") }
              </View>
              <View style={styles.inFieldContainer}>
                <View style={styles.inFieldLengthContainer}>
                  { this._renderInFieldLength(0, "E") }
                  { this._renderInFieldLength(0, "D") }
                </View>
                <View style={styles.inFieldSideContainer}>
                  { this._renderInFieldSide(0, "F") }
                  <View style={styles.inFieldCircleContainer}>
                    { this._renderInFieldCircle(0, "A") }
                  </View>
                  { this._renderInFieldSide(0, "C") }
                </View>
                <View style={styles.inFieldLengthContainer}>
                  { this._renderInFieldLength(0, "G") }
                  { this._renderInFieldLength(0, "B") }
                </View>
              </View>
              <View style={styles.inFieldContainer}>
                <View style={styles.inFieldLengthContainer}>
                  { this._renderInFieldLength(1, "B") }
                  { this._renderInFieldLength(1, "G") }
                </View>
                <View style={styles.inFieldSideContainer}>
                  { this._renderInFieldSide(1, "C") }
                  <View style={styles.inFieldCircleContainer}>
                    { this._renderInFieldCircle(1, "A") }
                  </View>
                  { this._renderInFieldSide(1, "F") }
                </View>
                <View style={styles.inFieldLengthContainer}>
                  { this._renderInFieldLength(1, "D") }
                  { this._renderInFieldLength(1, "E") }
                </View>
              </View>
              <View style={styles.outFieldLengthContainer}>
                { this._renderOutFieldLength(1, "C") }
                { this._renderOutFieldLength(1, "D") }
              </View>
            </View>
            <View style={styles.underContainer}>
              <View style={styles.underOutFieldSideContainer}>
                { this._renderOutFieldSide(0, "B") }
                { this._renderOutFieldSide(0, "A") }
              </View>
              <View style={styles.underOutFieldSideContainer}>
                { this._renderOutFieldSide(1, "F") }
                { this._renderOutFieldSide(1, "E") }
              </View>
            </View>
          </View>
          <Graph data={this.props.analysis.selectedPositionsCount} />
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => {
              Actions.analysisCreate({ type: ActionConst.BACK_ACTION });
            }}
            >
              <Text style={styles.backButtonText}>
                検索条件に戻る
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(baseEnhancer(AnalysisView));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vsText: {
    fontWeight: "bold",
    color: "skyblue",
    fontSize: 26,
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "transparent",

  },
  horizontalBlueBar: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 10,
    width: 40,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3,
    alignSelf: "center",
    justifyContent: "center"
  },
  varticalBlueBar: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    flex: 0.4,
    width: 10,
    borderWidth: 1.3,
    borderRadius: 3,
    opacity: 0.3,
    justifyContent: "center"
  },
  blueCircle: {
    borderColor: "#2EA7E0",
    backgroundColor: "#2EA7E0",
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 100,
    opacity: 0.3,
    alignSelf: "center",
    justifyContent: "center"
  },
  varticalYellowBarLeft: {
    borderColor: "#A29A67",
    backgroundColor: "#A29A67",
    width: 10,
    height: 40,
    borderWidth: 1.3,
    borderRadius: 3,
    justifyContent: "center"
  },
  horizontalYellowBarLeft: {
    borderColor: "#A29A67",
    backgroundColor: "#A29A67",
    borderWidth: 1.3,
    borderRadius: 3,
    width: 40,
    height: 10,
    alignSelf: "center",
    justifyContent: "center"
  },
  droppedIdText:{
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center"
  },
  analysisInformationContiner: {
    flexDirection: "row",
    alignSelf: "center"
  },
  nameOutsideContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    width: 104,
    borderWidth: 1,
    marginLeft: 6,
    borderRadius: 4,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  nameInsideContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    width: 100,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row"
  },
  personImage: {
    marginTop: 2,
    marginLeft: 8,
    height: 20,
    width: 20,
    opacity: 0.5
  },
  opponentName: {
    backgroundColor: "transparent",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
    alignSelf: "center",
    paddingLeft: 4,
    paddingRight: 4,
  },
  flexDirectionRow: {
    flexDirection: "row",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: 310,
    marginTop: 4
  },
  optionTextContainer: {
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    height: 32,
    width: 96,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  optionText: {
    backgroundColor: "#0a2444",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    height: 26,
    width: 90,
    borderRadius: 4,
    textAlign: "center",
    paddingTop: 5
  },
  field: {
    alignSelf: "center",
    width: 330,
    height: 170,
    marginTop: 26
  },
  fieldLine: {
    position: "absolute",
    alignSelf: "center",
    height: 170,
    backfaceVisibility: "hidden",
    resizeMode: "contain"
  },
  overContainer: {
    flexDirection: "row",
    flex: 1,
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
    flex: 3,
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
  },
  backButtonContainer: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 34,
    width: 154,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 190,
    marginTop: 8
  },
  backButtonText: {
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
    textAlign: "center",
    paddingTop: 7,
    paddingLeft: 20
  },
  outAreaContainer: {
    width: 330,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  outFieldArea: {
    alignSelf: "center",
    flex: 0.45,
    backgroundColor: "#FAEE00",
    opacity: 0.3,
    height: 170
  },
  blankContainer: {
    width: 330,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10
  },
  blankArea: {
    flex: 0.4,
    alignSelf: "center",
    backgroundColor: "black",
    height: 138,
    marginTop: 16,
    marginBottom: 16
  },
  inAreaContainer: {
    width: 330,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 20,
    paddingRight: 20
  },
  inArea: {
    flex: 0.35,
    alignSelf: "center",
    backgroundColor: "rgba(46, 167, 224, 0.8)",
    height: 120,
    marginTop: 25,
    marginBottom: 25
  }
});
