import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from 'victory-native';
import { Actions } from 'react-native-router-flux';
import {
  TopContentBar,
} from 'components'
import {
  InFieldCircle,
  InFieldLength,
  InFieldSide,
  InArea,
  OutFieldSide,
  OutFieldLength,
  OutArea,
} from './components'

import baseHigherOrderComponentEnhancer from 'enhances';

const data = [
  {position: "A", counts: 1},
  {position: "B", counts: 2},
  {position: "C", counts: 3},
  {position: "D", counts: 4},
  {position: "E", counts: 5},
  {position: "F", counts: 6},
];

class AnalysisView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>複合分析結果</TopContentBar>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.analysis_view_vs}>vs</Text>
            <View style={styles.name_outside_container}>
              <View style={styles.name_inside_container}>
                <Image
                  source={require('../../../assets/img/score_create_person.png')}
                  style={styles.person}
                />
                <Text style={styles.opponent_name}>
                  池田社長
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.option_container}>
            <View style={styles.option_text_container}>
              <Text style={styles.option_text}>
                １日トータル
              </Text>
            </View>
            <View style={styles.option_text_container}>
              <Text style={styles.option_text}>
                球種
              </Text>
            </View>
            <View style={styles.option_text_container}>
              <Text style={styles.option_text}>
                負け試合
              </Text>
            </View>
          </View>
          <View style={styles.field}>
            <Image style={styles.field_line} source={require('../../../assets/img/field-line.png')}/>
              <InArea/>
              <OutArea/>
              <View style={styles.over_container}>
                <View style={styles.over_out_field_side_container}>
                  <OutFieldSide position={1} side={1} />
                  <OutFieldSide />

                </View>
                <View style={styles.over_out_field_side_container}>
                  <OutFieldSide />
                  <OutFieldSide />
                </View>
              </View>
              <View style={styles.middle_container}>
                <View style={styles.out_field_length_container}>
                  <OutFieldLength />
                  <OutFieldLength />
                </View>
                <View style={styles.in_field_container}>
                  <View style={styles.in_field_length_container}>
                    <InFieldLength />
                    <InFieldLength />
                  </View>
                  <View style={styles.in_field_side_container}>
                    <InFieldSide />
                    <View style={styles.in_field_circle_container}>
                      <InFieldCircle />
                    </View>
                    <InFieldSide />
                  </View>
                  <View style={styles.in_field_length_container}>
                    <InFieldLength />
                    <InFieldLength />
                  </View>
                </View>
                <View style={styles.in_field_container}>
                  <View style={styles.in_field_length_container}>
                    <InFieldLength />
                    <InFieldLength />
                  </View>
                  <View style={styles.in_field_side_container}>
                    <InFieldSide />
                    <View style={styles.in_field_circle_container}>
                      <InFieldCircle />
                    </View>
                    <InFieldSide />
                  </View>
                  <View style={styles.in_field_length_container}>
                    <InFieldLength />
                    <InFieldLength />
                  </View>
                </View>
                <View style={styles.out_field_length_container}>
                  <OutFieldLength />
                  <OutFieldLength />
                </View>
              </View>
              <View style={styles.under_container}>
                <View style={styles.under_out_field_side_container}>
                  <OutFieldSide position={1} side={1} />
                  <OutFieldSide />
                </View>
                <View style={styles.under_out_field_side_container}>
                  <OutFieldSide />
                  <OutFieldSide />
                </View>
              </View>
          </View>
          <View style={styles.graph_container}>
            <VictoryChart
            	width={320}
            	height={240}
              theme={VictoryTheme.material}
              padding={{left: 25, right: 30, top: 20, bottom: 40}}
              domainPadding={{x: [20, 0]}}
            >
            	<VictoryAxis dependentAxis	/* Y軸 */
                style={{
                  grid: {
                    stroke: "#035f89"
                  },
                  axis: {
                    stroke:'transparent',
                  },
                  tickLabels: {
                    fontSize: 10,
                    fill:"white"
                  },
                }}
                tickFormat={(tick) =>{   /* 整数目盛のみ表示 */
                  if (tick === Math.round(tick)) return String(tick);
                  else return "";
                }}
              />
              <VictoryAxis	/* X軸 */
                style={{
                  color:"white",
                  grid: {stroke: "transparent"},
                  axis:{
                    stroke: '#2EA7E0'
                  },
                  tickLabels: {fontSize: 10, fill:"white"},
                }}
              />
              <VictoryBar
                style={{
                  data: {
                    fill: '#2EA7E0',
                  },
                }}
                animate={{	/* 表示のアニメーション */
                  duration: 400,
                  onLoad: { duration: 300 }
                }}
                data={data}
                alignment="start"
                x="position"
                y="counts"
              />
            </VictoryChart>
          </View>
          <View style={styles.back_button_container}>
            <TouchableOpacity onPress={Actions.analysis_create}>
              <Text style={styles.back_button_text}>
                検索条件に戻る
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default baseHigherOrderComponentEnhancer(AnalysisView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle_text: {
    color: '#ffffff',
    fontSize: 19,
    alignSelf: 'center',
    marginTop: -28,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  analysis_view_vs: {
    fontWeight: 'bold',
    color: 'skyblue',
    fontSize: 26,
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 206,
    backgroundColor: 'transparent',
  },
  name_outside_container: {
    borderRightColor: '#0a2444',
    borderTopColor: '#0a2444',
    borderLeftColor: '#0a2444',
    borderBottomColor: '#0a2444',
    height: 30,
    width: 104,
    borderWidth: 1,
    marginLeft: 6,
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name_inside_container: {
    borderRightColor: '#0a2444',
    borderTopColor: '#0a2444',
    borderLeftColor: '#0a2444',
    borderBottomColor: '#0a2444',
    height: 26,
    width: 100,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: 'row',
  },
  person: {
    marginTop: 2,
    marginLeft: 8,
    height: 20,
    width: 20,
    opacity: 0.5,
  },
  opponent_name: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    marginTop: 7,
    marginLeft: 7,
    fontWeight: 'bold',
    fontSize: 12,
  },
  option_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 310,
    marginTop: 4,
  },
  option_text_container: {
    borderRightColor: '#0a2444',
    borderTopColor: '#0a2444',
    borderLeftColor: '#0a2444',
    borderBottomColor: '#0a2444',
    height: 32,
    width: 96,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  option_text: {
    backgroundColor: '#0a2444',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    height: 26,
    width: 90,
    borderRadius: 4,
    textAlign: 'center',
    paddingTop: 5,
  },
  field: {
    alignSelf: 'center',
    width: 330,
    height: 170,
    marginTop: 26,
  },
  field_line:{
    position: 'absolute',
    alignSelf:'center',
    height: 170,
    backfaceVisibility: 'hidden',
    zIndex:3,
    resizeMode: 'contain',
  },
  in_field_area_container:{
    width: 330,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingLeft:10,
    paddingRight:10,
  },
  in_field_area:{
    flex: 0.4,
    alignSelf: 'center',
    backgroundColor:'black',
    height:138,
    marginTop:16,
    marginBottom:16,
  },
  out_field_area_container:{
    width: 330,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  out_field_area:{
    alignSelf: 'center',
    flex: 0.45,
    backgroundColor:'#FAEE00',
    opacity:0.3,
    height:170,
  },
  over_container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  over_out_field_side_container:{
    alignSelf:'flex-start',
    flex: 0.5,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  middle_container: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'space-between',
  },
  under_container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  out_field_length_container: {
    marginLeft: 4,
    marginRight: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  in_field_container: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  in_field_length_container: {
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  in_field_circle_container: {
    justifyContent: 'space-between',
  },
  in_field_side_container: {
    marginLeft: 6,
    marginRight: 6,
    justifyContent: 'space-between',
  },
  under_out_field_side_container:{
    alignSelf:'flex-end',
    flex: 0.5,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  graph_container: {
    borderRightColor: '#28a8de',
    borderTopColor: '#28a8de',
    borderLeftColor: '#28a8de',
    borderBottomColor: '#28a8de',
    height: 240,
    width: 320,
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 20,
  },
  back_button_container: {
    borderRightColor: '#28a8de',
    borderTopColor: '#28a8de',
    borderLeftColor: '#28a8de',
    borderBottomColor: '#28a8de',
    height: 34,
    width: 154,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 190,
    marginTop: 8,
  },
  back_button_text: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 4,
    textAlign: 'center',
    paddingTop: 7,
    paddingLeft: 20,
  },
});
