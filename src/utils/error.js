import {
  Alert
} from "react-native";

export function errorAlertCallback(message){
  return new Promise((resolve) => {
    Alert.alert("エラー", message, [{ text: "了解", onPress: () => { resolve(false); } }]);
  });
}

export function networkErrorAlert(){
  return new Promise((resolve) => {
    Alert.alert("エラー", "ネットワーク接続を確認してください", [{ text: "了解", onPress: () => { resolve(false);} }]);
  });
}

export function errorMessage(message, defaultErrorCallback){
  console.log(message);
  switch (message) {
  case "Network request failed":
    networkErrorAlert();
  default:
    defaultErrorCallback();
  }
}
