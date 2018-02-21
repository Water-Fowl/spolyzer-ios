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
        email: this.state.email,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation,
        confirmSuccessUrl: "api.water-fowl.co.jp"
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
