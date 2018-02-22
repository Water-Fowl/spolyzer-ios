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

export default class Graph extends React.Component{
  render(){
    return(
      <ScrollView style={styles.graphContainer}>
        <VictoryChart
          domainPadding={{ x: 50 }}
          width={400}
          height={240}
          theme={VictoryTheme.material}
          containerComponent={<VictoryZoomContainer
            allowZoom={false}
            zoomDimension={"x"}
            zoomDomain={{x: [10, 20]}}
          />
          }
          padding={{
            left: 30, right: 40, top: 20, bottom: 40
          }}
        >
          <VictoryAxis
            dependentAxis	/* Y軸 */
            style={{
              grid: {
                stroke: "#035f89",
                axis: { stroke: "transparent"}
              },
              tickLabels: { fontSize: 7, fill: "white" }
            }}
            tickFormat={(tick) => { /* 整数目盛のみ表示 */
              if (tick === Math.round(tick)) return String(tick);
              return "";
            }}
          />
          <VictoryAxis	/* X軸 */
            style={{
              grid: { stroke: "transparent" },
              axis: { stroke: "#2EA7E0"},
              tickLabels: { fontSize: 7, fill: "white" }
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
          />
        </VictoryChart>
      </ScrollView>
    );
  }
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
