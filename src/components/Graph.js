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
  VictoryStack,
  VictoryTheme,
  VictoryZoomContainer
} from "victory-native";
import { connect } from "react-redux";

export default class Graph extends React.Component{
  constructor(){
    super();
    this.state = {data: []};
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.data){
      this.setState({data: nextProps.data});
    }
  }

  render(){
    return(
      <View style={styles.graphContainer}>
        <VictoryChart
          width={300}
          height={200}
          theme={VictoryTheme.material}
          domainPadding={30}
          padding={{
            left: 20, right: 10, top: 20, bottom: 30
          }}
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
            tickFormat={
              function(tick){
                if (tick === Math.round(tick)) return String(tick);
                return "";
              }
            }
          />
          <VictoryAxis
            style={{
              grid: {
                stroke: "transparent" ,
                axis: { stroke: "#2EA7E0"}
              },
              tickLabels: { fontSize: 10, fill: "transparent"}
            }}
          />
          <VictoryStack
            style={{
              labels: {
                fill: "white",
                padding: 20,
                fontSize: 10,
                fontWeight: "bold"
              }
            }}
            labels={function(data){
              if(data.label){
                return data.label;
              }
              else{
                return "";
              }
            }}
          >
            <VictoryBar
              barRatio={0.4}
              style={{
                data: {
                  fill: "#2EA7E0"
                }
              }}
              animate={{
                duration: 400,
                onLoad: { duration: 300 }
              }}
              data={this.state.data}
              x="label"
              y="value"
              alignment="middle"
            />
          </VictoryStack>
        </VictoryChart>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  graphContainer: {
    borderRightColor: "#28a8de",
    borderTopColor: "#28a8de",
    borderLeftColor: "#28a8de",
    borderBottomColor: "#28a8de",
    height: 200,
    width: 320,
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 20
  }
});
