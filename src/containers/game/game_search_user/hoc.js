import getSearchUser from "../actions/get_user";
import setUser from "../actions/set_user";

export default function enhancer(ComponentClass){
  return class GameSearchUsersHOC extends ComponentClass {
    constructor(props){
      super(props);
      this.state = {
        name: "",
        users: this.props.users
      };
      this.searchUserEvent.bind(this);
      this.AccountPressEvent.bind(this);
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
    AccountPressEvent(selectedIndex, id){
      const { dispatch } = this.props;
      console.log(id);
      dispatch(setUser(selectedIndex, id));
    }
    render(){
      return(
        super.render()
      );
    }
  };
}
