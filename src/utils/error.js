import {
  Alert
} from "react-native";

export function errorAlertCallback(message){
  console.log(message)
  return new Promise((resolve) => {
    Alert.alert("エラー", message, [{ text: "了解", onPress: () => { resolve(false); } }]);
  });
}
