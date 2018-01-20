export const GAME_SETTING_REQUEST = "GAME_SETTING_REQUEST"
export const GAME_SETTING_RECEIVED = "GAME_SETTING_RECEIVED"

export function getGames(body){
  return dispatch => {
    dispatch(requestGetGames());
    return fetch(GAME_SETTING_REQUEST, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .catch(function(error){
        console.log(error.message)
      })
  }
}

function requestGetGames(){
  return {
    type:GAME_SETTING_REQUEST
  }
}

function receivedGetGames(){
  return {
    type: GAME_SETTING_RECEIVED
  }
}

