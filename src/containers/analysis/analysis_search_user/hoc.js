import getSearchUser from "../actions/get_user";

export default function enhancer(ComponentClass){
  return class AnalysisSearchUserHOC extends ComponentClass {
    constructor(props){
      super(props);
      this.state = {
        name: "",
        users: this.props.users
      };
      this.searchUserEvent.bind(this);
    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps);
      this.setState({ users: nextProps.users });
    }
    searchUserEvent(name){
      const { dispatch } = this.props;
      const params = "?name=" + name;
      dispatch(getSearchUser(params));
      this.setState({ users: this.props.users });
    }
    render(){
      return(
        super.render()
      );
    }
  };
}
