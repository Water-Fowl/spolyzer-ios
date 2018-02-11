import Orientation from "react-native-orientation";

export function loginEnhancer(ComponentClass) {
  return class LoginHOC extends ComponentClass {
    constructor(props) {
      super(props);
      this.postLoginInformation.bind(this);
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

    postLoginInformation() {
      const { dispatch } = this.props;
      formLoginInformation = {
        email: this.state.email,
        password: this.state.password,
      };
      dispatch(postUserLogin(formLoginInformation));
    }

    render() {
      return (
        super.render()
      );
    }
  };
}

