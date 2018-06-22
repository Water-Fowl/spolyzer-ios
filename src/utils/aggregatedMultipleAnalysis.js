import { alphabet } from "const";

// 複合分析によってapiから取ってきた値を整形する関数
// グラフに描画する際に最適化された形式の配列を返す
export default function aggregatedMultipleAnalysis(counts, side, minPosition, maxPosition){
  const positionsCountList = [];
  if (!counts){
    return [];
  }
  for (var position=minPosition; position <= maxPosition; position++){
    var positionString = alphabet[position - minPosition];
    if(counts[side][position]){
      positionsCountList.push({
        label: positionString,
        value: counts[side][position]
      });
    }
  }
  return positionsCountList;
}

