export function timeEncode(time) {
  let dt = new Date(Date.parse(time));
  let year = dt.getFullYear();
  let month = dt.getMonth() + 1;
  let date = dt.getDate();
  let dateT = ["日", "月", "火", "水", "木", "金", "土"];
  let day = dateT[dt.getDay()];
  let hours = dt.getHours();
  if (hours < 10) hours = "0" + hours;
  let minutes = dt.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  let seconds = dt.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  return `${year}/${month}/${date}(${day}) ${hours}:${minutes}:${seconds}`;
}

export function getNowYMD() {
  var dt = new Date();
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  var result = y + "/" + m + "/" + d;
  return result;
}
