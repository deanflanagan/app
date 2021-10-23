export class API {
  static getNextGames() {
    return fetch("http://127.0.0.1:8000/upcoming/", {
      method: "GET",
    }).then((resp) => resp.json());
  }
  static getStats(match) {
    return fetch(`http://127.0.0.1:8000/stats?match_id=${match.match}`, {
      method: "GET",
    }).then((resp) => resp.json());
  }

  static getNextLast(match) {
    // console.log(match);
    return fetch(`http://127.0.0.1:8000/pregame?match_id=${match.match}`, {
      method: "GET",
    }).then((resp) => resp.json());
  }

  // static populatePregame(team) {
  //   console.log(team, " IS SUPPOSE TO BE THE MATCH IDENTIFIER FOR PREGAME");
  //   // return fetch("http://127.0.0.1:8000/teams?" + new URLSearchParams(team), {
  //   //   method: "GET",
  //   // }).then((resp) => resp.json());
  // }
}
