import Orientation from "react-native-orientation";

import { postLogin } from "../actions/login";

export function enhancer(ComponentClass) {
  return class LoginHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.postLoginEvent.bind(this);
      this.state = {
        name: "",
        email: "",
        password: "",
        loginError: false
      };
    }

    componentWillMount() {
      Orientation.lockToPortrait();
    }

    componentWillReceiveProps(nextProps) {
      const { loginError } = nextProps;
      this.setState({ loginError });
    }

    postLoginEvent() {
      const { dispatch } = this.props;
      const loginForm = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      dispatch(postLogin(loginForm));
    }

    render() {
      return (
        super.render()
      );
    }
  };
}
