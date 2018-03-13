export default function reshapeShotTypeCounts(counts, shotTypes){
  shotTypeCountsList = [];
  missShotTypeCountsList = [];
  shotTypesList = [];
  for (key in counts){
    shotTypesList.push(shotTypes[key].name_ja);
    if (counts[0][key]) {
      shotTypeCountsList.push({
        shotType: shotTypes[key].name_ja,
        counts: counts[0][key]
      });
    }
    else{
      shotTypeCountsList.push({
        shotType: shotTypes[key].name_ja,
        counts: 0
      });
    }
  }
  for (key in counts){
    if (counts[1][key]) {
      missShotTypeCountsList.push({
        shotType: shotTypes[key].name_ja,
        counts: counts[1][key]
      });
    }
    else{
      missShotTypeCountsList.push({
        shotType: shotTypes[key].name_ja,
        counts: 0
      });
    }
  }
  console.log(shotTypesList);
  return {
    shotTypeCountsList,
    missShotTypeCountsList,
    shotTypesList
  };
}
