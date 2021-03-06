import React from "react";
import { Actions } from "react-native-router-flux";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { UserListItem } from "molecules";
import { connect } from "react-redux";
import { mapStateToProps } from "../../modules/mapToProps";
import { cleanSingle } from "react-native-image-crop-picker";

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.users) {
      this.forceUpdate();
    }
  }
  render() {
    const { users } = this.props;
    if (!users) {
      return null;
    }
    const usersComponent = [];
    for (let i = 0; i < users.length; i++) {
      if (this.props.selectedIds.indexOf(users[i].id) == -1) {
        usersComponent.push(
          <TouchableOpacity
            onPress={() => {
              this.props.callback(i);
            }}
            key={i}
          >
            <UserListItem
              key={i}
              userName={users[i].name}
              userImageSource={users[i].image.url}
            />
          </TouchableOpacity>
        );
      }
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>{usersComponent}</ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(UserList);

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    paddingBottom: 160
  },
  scrollContainer: {
    width: 300,
    backgroundColor: "transparent",
    borderRightColor: "#0a2444",
    borderTopColor: "#0a2444",
    borderLeftColor: "#0a2444",
    borderBottomColor: "#0a2444",
    padding: 5,
    borderWidth: 1,
    borderRadius: 2
  }
});
