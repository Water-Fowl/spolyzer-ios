export default function listToQueryParams(list){
  var params = "?";
  for (key in list){
    params += `${key}=${list[key]}&`;
  }
  return params;
}
