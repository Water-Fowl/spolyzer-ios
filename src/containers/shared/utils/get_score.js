export default function getScoreByPositionAndSide(position, side){
  if((side == 0 && position >= 7) || (side == 1 && position <=6)){
    return [0, 1];
  }
  else{
    return [1, 0];
  }
}
