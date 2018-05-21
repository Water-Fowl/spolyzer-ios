import Toast from "react-native-root-toast";

export function toastPresent(message) {
  let toast = Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.CENTER,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
    textColor:"black",
    backgroundColor: "white",
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    }
  });
}