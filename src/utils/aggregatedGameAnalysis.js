// apiから取ってきた試合結果を整形する関数
// ミスの球種、ミスでない球種、それぞれに対応する球種の名前を返す

export default function aggregatedGameAnalysis(counts, shotTypes){
  shotTypeCountsList = [];
  missShotTypeCountsList = [];
  shotTypesList = [];

  for (key in counts){
    shotTypesList.push(shotTypes[key]);
    shotTypeCountsList = aggregateByMiss(counts[key], false, shotTypeCountsList, shotTypes);
    missShotTypeCountsList = aggregateByMiss(counts[key], true, missShotTypeCountsList, shotTypes);
  }

  return {
    shotTypeCountsList,
    missShotTypeCountsList,
    shotTypesList
  };
}

function aggregateByMiss(count, isNetMiss, shotTypeCountsList, shotTypes){
  if (count[isNetMiss]) {
    shotTypeCountsList.push({
      label: shotTypes[key],
      value: count[isNetMiss]
    });
  }
  else{
    shotTypeCountsList.push({
      label: shotTypes[key],
      value: 0
    });
  }
  return shotTypeCountsList;
}
