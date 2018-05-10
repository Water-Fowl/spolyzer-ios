import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  DashboardCard
} from "molecules";
import {$spolyzerDarkBlue} from "../../const/color";

export default class DashboardList extends React.Component{
  render(){
    return(
      <View style={styles.listContainer}>
        <ScrollView>
          <TouchableOpacity onPress={Actions.DashboardView}>
            <DashboardCard date="4/18" vs="VS 池田吉来・吉川明成" title="シングルス の試合で エリア C.D のクリア の ミス を 4 回 以下 にしたい"/>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 7,
    borderTopColor: $spolyzerDarkBlue,
    borderBottomColor: $spolyzerDarkBlue,
    borderWidth: 1
  }
});
