import { postUserRegistration } from "../actions/registration";
import { connect } from "react-redux";
import Orientation from "react-native-orientation";

export default function enhancer(ComponentClass){
  return class SignUpHOC extends ComponentClass{
    constructor(props) {
      super(props);
      this.state = {
        text: "",
      };
      this.postRegistrationForm.bind(this);
    }

    componentWillMount() {
      Orientation.lockToPortrait();
    }

    postRegistrationForm() {
      const { dispatch } = this.props;
      const registration_body = {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        confirm_success_url: "api.water-fowl.co.jp",
      };
      dispatch(postUserRegistration(registration_body));
    }

    render(){
      return(
        super.render()
      )
    }
  }
}
