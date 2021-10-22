export class API {
  static getNextGames() {
    return fetch("http://127.0.0.1:8000/upcoming/", {
      method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Token ${token}`,
      //   },
    }).then((resp) => resp.json());
  }
  static getStats(match_id) {
    return fetch(`http://127.0.0.1:8000/stats?match_id=${match_id.profile}`, {
      method: "GET",
    }).then((resp) => resp.json());
  }
  static getTeam(team) {
    console.log(team, " IS SUPPOSE TO BE THE MATCH");
    return fetch("http://127.0.0.1:8000/teams?" + new URLSearchParams(team), {
      method: "GET",
    }).then((resp) => resp.json());
  }
}
