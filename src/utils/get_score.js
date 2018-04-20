export function getScoreByPositionAndSide(position, side){
  if((side == 0 && position >= 7) || (side == 1 && position <=6)){
    return 1;
  }
  else{
    return 0;
  }
}

export function getScoreCounts(scores){
  var scoreCounts = [0, 0];
  for (score of scores){
    let scoredIndex = getScoreByPositionAndSide(score.dropped_at, score.side);
    scoreCounts[scoredIndex] += 1;
  }
  return scoreCounts;
}
