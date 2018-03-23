export function mapStateToProps(state, props){
  const {
    authentication,
    profile,
    game,
    analysis,
    sport
  } = state;
  return {
    authentication,
    profile,
    game,
    analysis,
    sport
  };
}
