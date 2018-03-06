import React from "react";
import {
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
  VictoryZoomContainer
} from "victory-native";
import { connect } from "react-redux";
import { reshapeShotTypeCounts } from "utils";

class Graph extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  componentWillReceiveProps(nextProps){
    this.forceUpdate();
  }
  getZoomDomain(length){
    if (length < 4){
      return [0, length]
    }
    else{
      return [2, length + 3]
    }
  }

  render(){
    return(
      <ScrollView style={styles.graphContainer}>
        <VictoryChart
          width={400}
          height={240}
          theme={VictoryTheme.material}
          padding={{
            left: 15, right: 15, top: 20, bottom: 40
          }}
          containerComponent={
            <VictoryZoomContainer
              zoomDomain={{x: this.getZoomDomain(this.props.data.length) }}
              allowZoom={false}
              zoomDimension={"x"}
            />
          }
        >
          <VictoryAxis
            dependentAxis	/* Y軸 */
            style={{
              grid: {
                stroke: "#035f89",
                axis: { stroke: "transparent"}
              },
              tickLabels: { fontSize: 15, fill: "white" }
            }}
            tickFormat={(tick) => { /* 整数目盛のみ表示 */
              if (tick === Math.round(tick)) return String(tick);
              return "";
            }}
          />
          <VictoryAxis	/* X軸 */
            style={{
              grid: {
                stroke: "transparent" ,
                axis: { stroke: "#2EA7E0"},
              },
              tickLabels: { fontSize: 10, fill: "white", angle: 30 }
            }}
          />
          <VictoryBar
            barRatio={0.5}
            style={{
              data: {
                fill: "#2EA7E0"
              }
            }}
            animate={{
              duration: 400,
              onLoad: { duration: 300 }
            }}
            data={this.props.data}
            x="shotType"
            y="counts"
            labelComponent={
              <VictoryLabel
                angle={45}
                textAnchor="start"
              />
            }
          />
        </VictoryChart>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Graph)

function mapStateToProps(state, props){
  const { game } = state;
  const {
    selectedShotTypeCounts,
    shotTypes
  } = game || {
    selectedShotTypeCounts: {},
    shotTypes: {}
  };
  return {
    data: reshapeShotTypeCounts(selectedShotTypeCounts, shotTypes),
  };
}

const styles = StyleSheet.create({
  graphContainer: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 240,
    width: 320,
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 20
  }
});
