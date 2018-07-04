export function mapStateToProps(state){
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
