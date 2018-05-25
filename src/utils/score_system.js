export function scoreDisplay(sport_id, scores) {
  let scoreDisplay = [];
  const SCORE_COUNT = [0, 15, 30, 40];
  const SCORE_DIFF = Math.abs(scores[0] - scores[1]);
  const AD = "Ad";
  const WIN = "Win";
  switch (sport_id) {
  case 2: //テニス
    scoreDisplay = [SCORE_COUNT[scores[0]], SCORE_COUNT[scores[1]]];
    if (scores[0] > 3 || scores[1] > 3) {
      scoreDisplay = ["-", "-"];
      switch (SCORE_DIFF) {
      case 0:
        // デュースの判定
        break;
      case 1:
        // アドバンテージの判定
        scores[0] > scores[1]
          ? (scoreDisplay[0] = AD)
          : (scoreDisplay[1] = AD);
        break;
      default:
        // ゲーム終了判定
        scores[0] > scores[1]
          ? (scoreDisplay[0] = WIN)
          : (scoreDisplay[1] = WIN);
        break;
      }
    }
    break;
  default:
    scoreDisplay = [scores[0], scores[1]];
    break;
  }
  return scoreDisplay;
}
