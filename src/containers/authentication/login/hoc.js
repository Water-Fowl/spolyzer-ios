import Orientation from "react-native-orientation";

import { postLogin } from "../actions/login";

export function enhancer(ComponentClass) {
  return class LoginHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.postLoginEvent.bind(this);
      this.state = {
        email: "",
        password: "",
        login_error: false,
      };
    }

    componentWillMount() {
      Orientation.lockToPortrait();
    }

    componentWillReceiveProps(nextProps) {
      const { login_error } = nextProps;
      this.setState({ login_error });
    }

    postLoginEvent() {
      const { dispatch } = this.props;
      const loginForm = {
        email: this.state.email,
        password: this.state.password,
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

