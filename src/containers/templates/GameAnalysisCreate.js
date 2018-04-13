import React from "react";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import { TopContentBar, TextBox } from "atoms";
import { Icon, SegmentedControl } from "react-native-ios-kit";

export default class GameAnalysisCreate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>試合一覧</TopContentBar>
        <View style={styles.segmentContainer}>
          <SegmentedControl
            values={["シングルス", "ダブルス"]}
            selectedIndex={0}
            onValueChange={(value, index) =>
              this.setState({
                selectedValue: value,
                selectedIndex: index
              })
            }
            tintColor={"#2ea7e0"}
            style={{ width: 222, alignSelf: "center" }}
          />
        </View>
        <FlatList
          data={[
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            },
            {
              opponentUserName: "プレイヤー名",
              gameCreateTime: "2018/4/1 10:00:00"
            }
          ]}
          renderItem={({ item }) => (
            <View style={styles.listConteiner}>
              <TouchableOpacity
                onPress={() => {
                  Actions.GameAnalysisView();
                }}
                style={styles.gameAnalysisViewButton}
              >
                <Text style={styles.opponentText}>
                  VS {item.opponentUserName}
                </Text>
                <Text style={styles.gameCreateTime}>{item.gameCreateTime}</Text>
                <Icon
                  name={"ios-arrow-forward"}
                  size={40}
                  color={"#28a8de"}
                  style={styles.iconArrow}
                />
              </TouchableOpacity>
            </View>
          )}
          style={styles.flatListConteiner}
        />
        <View style={styles.backButtonContainer}>
          <TextBox
            callback={() => {
              Actions.analysisCreate({ type: ActionConst.BACK_ACTION });
            }}
          >
            戻る
          </TextBox>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(6, 6, 25, 1)"
  },
  segmentContainer: {
    marginTop: 15,
    marginBottom: 15
  },
  flatListConteiner: {
    width: "100%"
  },
  listConteiner: {
    paddingLeft: 30,
    paddingBottom: 10,
    paddingTop: 10,
    // borderBottomColor: "#2ea7e0",
    borderRadius: 4,
    borderWidth: 1,
    borderTopColor: "#2ea7e0"
  },
  opponentText: {
    color: "white",
    fontSize: 22
  },
  gameCreateTime: {
    color: "white",
    fontSize: 14
  },
  iconArrow: {
    position: "absolute",
    paddingRight: 20,
    alignSelf: "flex-end"
  },
  backButtonContainer: {
    justifyContent: "center",
    height: 44,
    width: 90,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: 50
  }
});
