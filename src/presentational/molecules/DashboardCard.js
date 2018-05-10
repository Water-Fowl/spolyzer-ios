import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  CardInformationText,
  CardTitleText,
  CompareImage
} from "atoms";
import {
  $spolyzerDarkBlue
} from "../../const/color";

export default class DashboardCard extends React.Component{

  charCount(title){
    if(title.length >48){
      return title.substring(0, 48) + "...";
    }
    else{
      return title;
    }
  }
  render(){
    return(
      <View style={styles.dashboardCard}>
        <View style={styles.cardMainConteiner}>
          <View style={styles.cardInformationContainer}>
            <CardInformationText style={styles.dateText}>
              { this.props.date }
            </CardInformationText>
            <CardInformationText style={styles.vsText}>
              { this.props.vs }
            </CardInformationText>
          </View>
          <View style={styles.cardTitleContainer}>
            <CardTitleText style={styles.title}>
              { this.charCount(this.props.title) }
            </CardTitleText>
          </View>
        </View>
        <View style={styles.cardCompareContainer}>
          <CompareImage/>
        </View>
        <View style={styles.cardAchivementContainer}>
          <Text style={styles.percentText}>
            %
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dashboardCard:{
    height: 76,
    backgroundColor: $spolyzerDarkBlue,
    flexDirection: "row"
  },
  cardMainConteiner: {
    flex: 8,
    borderRightColor: "rgba(46,167,224,0.3)",
    borderRightWidth: 1
  },
  cardCompareContainer: {
    flex: 1,
    borderRightColor: "rgba(46,167,224,0.3)",
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardAchivementContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardInformationContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  cardTitleContainer: {
    flex: 2,
    justifyContent: "center"
  },
  percentText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  dateText: {
    marginLeft: 20
  },
  vsText: {
    marginLeft: 16
  },
  title: {
    marginLeft: 8
  }
});
