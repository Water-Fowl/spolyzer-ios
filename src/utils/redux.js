export function mapStateToProps(state, props){
  const {
    authentication,
    profile,
    game,
    analysis
  } = state;
  return {
    authentication,
    profile,
    game,
    analysis
  };
}
