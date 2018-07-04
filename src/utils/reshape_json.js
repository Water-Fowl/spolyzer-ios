import { alphabet } from "const";

export function reshapePositionsCount(counts, side, minPosition, maxPosition){
  const positionsCountList = [];
  if (!counts){
    return [];
  }
  for (var position=minPosition; position <= maxPosition; position++){
    if(counts[side]){
      if(counts[side][position]){
        var positionString = alphabet[position - minPosition];
        if(counts[side][position]){
          positionsCountList.push({
            label: positionString,
            value: counts[side][position]
          });
        }
        else{
          positionsCountList.push({
            label: positionString,
            value: 0
          });
        }
      }
    }
    else{
      counts[side] = [];
    }
  }
  return positionsCountList;

}

export function reshapeShotTypeCounts(counts, shotTypes){
  shotTypeCountsList = [];
  missShotTypeCountsList = [];
  shotTypesList = [];
  for (key in counts){
    shotTypesList.push(shotTypes[key]);
    if (counts[key][false]) {
      shotTypeCountsList.push({
        label: shotTypes[key],
        value: counts[key][false]
      });
    }
    else{
      shotTypeCountsList.push({
        label: shotTypes[key],
        value: 0
      });
    }
  }
  for (key in counts){
    if (counts[key][true]) {
      missShotTypeCountsList.push({
        label: shotTypes[key],
        value: counts[key][true]
      });
    }
    else{
      missShotTypeCountsList.push({
        label: shotTypes[key],
        value: 0
      });
    }
  }
  return {
    shotTypeCountsList,
    missShotTypeCountsList,
    shotTypesList
  };
}

