import React from "react";
import { ActionConst, Actions } from "react-native-router-flux";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import { Segment, TopContentBar } from "atoms";

export default class GameAnalysisCreate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContentBar>試合一覧</TopContentBar>
        <Segment values={["シングルス", "ダブルス"]} selectedIndex={0} />
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
              </TouchableOpacity>
            </View>
          )}
          style={styles.flatListConteiner}
        />
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              Actions.analysisCreate({ type: ActionConst.BACK_ACTION });
            }}
          >
            <Text style={styles.backButtonText}>戻る</Text>
          </TouchableOpacity>
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
  backButtonText: {
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 4,
    textAlign: "center"
  },
  backButtonContainer: {
    borderColor: "#28a8de",
    justifyContent: "center",
    height: 44,
    width: 90,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: 50
  }
});
