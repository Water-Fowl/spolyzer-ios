import { shotTypeList } from "const";

export default function convertShotTypeNameCountList(shotTypeCounts){
  console.log(shotTypeCounts)
  shotTypeNameCountList = []
  for (key in shotTypeCounts){
     shotTypeNameCountList.push({shotTypeList[key]: shotTypeCounts[key] });
  }
  console.log(shotTypeNameCountList)
  return shotTypeNameCountList;
}
