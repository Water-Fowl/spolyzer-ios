import { shotTypeList } from "const";

export default function convertShotTypeNameCountList(shotTypeCounts){
  shotTypeNameCountList = []
  for (key in shotTypeCounts){
     shotTypeNameCountList.push({shotTypeList[key]: shotTypeCounts[key] });
  }
  return shotTypeNameCountList;
}
