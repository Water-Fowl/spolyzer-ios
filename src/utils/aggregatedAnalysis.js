// apiから取ってきた試合結果を整形する関数
// ミスの球種、ミスでない球種、それぞれに対応する球種の名前を返す

export function aggregatedAnalysis(games) {}

// 条件に応じた集計結果を出力
// 引数のfilterには"dropped_side","position_id","shot_type_id","is_net_miss"のうちどれか１つ以上を設定する
export function aggregatedCounts(games, filter) {
  if (!filter) return;
  let aggregatedCounts = new Object();
  let count = 0;
  let dropped_sides = games.filter(function(game, index) {
    let flag = true;
    if (
      !filter.hasOwnProperty("dropped_side") &&
      !filter.hasOwnProperty("position_id") &&
      !filter.hasOwnProperty("shot_type_id") &&
      !filter.hasOwnProperty("is_net_miss")
    )
      return;
    if (
      game.dropped_side !== filter.dropped_side &&
      filter.hasOwnProperty("dropped_side")
    )
      return;
    if (
      game.position_id !== filter.position_id &&
      filter.hasOwnProperty("position_id")
    )
      return;
    if (
      game.shot_type_id !== filter.shot_type_id &&
      filter.hasOwnProperty("shot_type_id")
    )
      return;
    if (
      game.is_net_miss !== filter.is_net_miss &&
      filter.hasOwnProperty("is_net_miss")
    )
      return;
    count++;
  });
  return count;
}

// 単分析のスコア集計処理
export function aggregatedGameCounts(
  games,
  shotTypes,
  position_id,
  dropped_side
) {
  shotTypeCountsList = [];
  missShotTypeCountsList = [];
  for (key in shotTypes) {
    let counts = aggregatedCounts(games, {
      dropped_side: dropped_side,
      is_net_miss: false,
      position_id: position_id,
      shot_type_id: Number(key)
    });
    if (counts)
      shotTypeCountsList.push({
        label: shotTypes[key],
        value: counts
      });
    counts = aggregatedCounts(games, {
      dropped_side: dropped_side,
      is_net_miss: true,
      position_id: position_id,
      shot_type_id: Number(key)
    });
    if (counts)
      missShotTypeCountsList.push({
        label: shotTypes[key],
        value: counts
      });
  }
  return {
    shotTypeCountsList,
    missShotTypeCountsList
  };
}

// 複合分析のスコア集計処理
export function aggregatedMultipleCounts() {}
