import Orientation from "react-native-orientation";
import { connect } from "react-redux";

import { postUserRegistration } from "../actions/registration";

export default function enhancer(ComponentClass){
  return class SignUpHOC extends ComponentClass{
    constructor(props) {
      super(props);
      this.state = {
        text: ""
      };
      this.postRegistrationForm.bind(this);
    }

    componentWillMount() {
      Orientation.lockToPortrait();
    }

    postRegistrationForm() {
      const { dispatch } = this.props;
      const registrationBody = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
        confirm_success_url: "api.water-fowl.co.jp"
      };
      dispatch(postUserRegistration(registrationBody));
    }

    render(){
      return(
        super.render()
      );
    }
  };
}
