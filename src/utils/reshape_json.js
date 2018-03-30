import { alphabet } from "const";

function pushPositionCount(list, count, positionString){
  if(count[0]){
    list.push({
      label: positionString,
      value: count[0]
    });
  }
  else{
    list.push({
      valuep: 0,
      label: positionString
    });
  }
}
export function reshapePositionsCount(counts, side, minPosition, maxPosition){
  const positionsCountList = [];
  const missPositionsCountList = [];
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
  return {
    positionsCountList
  };
}

export function reshapeShotTypeCounts(counts, shotTypes){
  shotTypeCountsList = [];
  missShotTypeCountsList = [];
  shotTypesList = [];
  for (key in counts){
    shotTypesList.push(shotTypes[key]);
    if (counts[key][0]) {
      shotTypeCountsList.push({
        label: shotTypes[key],
        value: counts[key][0]
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
    if (counts[key][1]) {
      missShotTypeCountsList.push({
        label: shotTypes[key],
        value: counts[key][1]
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

