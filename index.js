import { AppRegistry } from "react-native";
import App from "./App";
if (!global.__DEV__) console.disableYellowBox = true;
AppRegistry.registerComponent("spolyzer", () => App);
