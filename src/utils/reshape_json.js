import { alphabet } from "const";

function pushPositionCount(list, count, positionString){
  if(count[0]){
    list.push({
      counts: count[0],
      positionString: positionString
    });
  }
  else{
    list.push({
      counts: 0,
      positionString: positionString
    });
  }
}
export function reshapePositionsCount(counts, side, minPosition, maxPosition){
  const positionsCountList = [];
  const missPositionsCountList = [];
  var i = 0;
  for (var position=minPosition;position <= maxPosition; position++){
      if(counts[side][position]){
        console.log(alphabet);
        var positionString = alphabet[i];
        i ++;
        if(counts[side][position]){
          positionsCountList.push({
            positionString: positionString,
            counts: counts[side][position]
          });
        }
        else{
          positionsCountList.push({
            positionString: positionString,
            counts: 0
          });
        }
      }
  }
  return {
    positionsCountList,
  };
}

export function reshapeShotTypeCounts(counts, shotTypes){
  shotTypeCountsList = [];
  missShotTypeCountsList = [];
  shotTypesList = [];
  for (key in counts){
    shotTypesList.push(shotTypes[key].name_ja);
    if (counts[key][0]) {
      shotTypeCountsList.push({
        shotType: shotTypes[key].name_ja,
        counts: counts[key][0]
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
    if (counts[key][1]) {
      missShotTypeCountsList.push({
        shotType: shotTypes[key].name_ja,
        counts: counts[key][1]
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

