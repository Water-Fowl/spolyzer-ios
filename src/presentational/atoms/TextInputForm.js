export default class TextInputForm extends React.Component{
  render(){
    return (
      <TextInput
        onChangeText={password => this.props.setState({ password })}
        placeholder={this.props.placeholder}
        placeholderTextColor="#666677"
        style={styles.textField}
        keyboardType="email-address"
        returnKeyType="done"
      />
    );
  }
}

const styles = StyleSheet.create({
  textField: {
    fontSize: 20,
    color: "#ffffff",
    paddingLeft: 12,
    letterSpacing: 0
  }
});
