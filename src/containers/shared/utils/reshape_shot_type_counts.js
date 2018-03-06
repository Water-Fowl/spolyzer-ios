export default function reshapeShotTypeCounts(counts, shotTypes){
  console.log(counts)
  console.log(shotTypes)
  countsReshapedList = []
  for (key in counts){
    countsReshapedList.push({shotType: shotTypes[key].name_ja, counts: counts[key]})
  }
  console.log(countsReshapedList);
  return countsReshapedList;
}
