import React from "react";

function SystemCard(data) {
  const arr = [
    "blind_over_pl",
    "blind_over_mean",
    "blind_under_pl",
    "blind_under_mean",
    "blind_team_ah_pl",
    "blind_team_ah_mean",
    "blind_opposition_ah_mean",
    "blind_opposition_ah_pl",
    "over_system_avg ",
    "over_system_pl ",
    "under_system_avg",
    "under_system_pl",
    "home_system_avg",
    "home_system_pl",
    "away_system_avg",
    "away_system_pl",
  ];

  return (
    <React.Fragment>
      <div>
        <table id="team-data-away">
          <caption align="top">Blind Handicaps this League</caption>
          <tr>
            <th scope="col"></th>
            <th scope="col">PL</th>
            <th scope="col">Mean</th>
          </tr>
          <tr>
            <th scope="row">Home</th>
            <td>{data.data["blind_team_ah_pl"]}</td>
            <td>{data.data["blind_team_ah_mean"]}%</td>
          </tr>
          <tr>
            <th scope="row">Away</th>
            <td>{data.data["blind_opposition_ah_pl"]}</td>
            <td>{data.data["blind_opposition_ah_mean"]}%</td>
          </tr>
        </table>

        <table id="team-data-away">
          <caption align="top">Blind Over/under</caption>
          <tr>
            <th scope="col"></th>
            <th scope="col">PL</th>
            <th scope="col">Mean</th>
          </tr>
          <tr>
            <th scope="row">Under</th>
            <td>{data.data["blind_under_pl"]}</td>
            <td>{data.data["blind_under_mean"]}%</td>
          </tr>
          <tr>
            <th scope="row">Over</th>
            <td>{data.data["blind_over_pl"]}</td>
            <td>{data.data["blind_over_mean"]}%</td>
          </tr>
        </table>
        <table id="team-data-away">
          <caption align="top">OU System</caption>
          <tr>
            <th scope="col"></th>
            <th scope="col">PL</th>
            <th scope="col">Mean</th>
          </tr>
          <tr>
            <th scope="row">Overs</th>
            <td>{data.data["over_system_pl"]}</td>
            <td> {data.data["over_system_avg"]}%</td>
          </tr>
          <tr>
            <th scope="row">Unders</th>
            <td>{data.data["under_system_pl"]}</td>
            <td> {data.data["under_system_avg"]}%</td>
          </tr>
        </table>
        <table id="team-data-away">
          <caption align="top">AH System</caption>
          <tr>
            <th scope="col"></th>
            <th scope="col">PL</th>
            <th scope="col">Mean</th>
          </tr>
          <tr>
            <th scope="row">Home</th>
            <td>{data.data["home_system_pl"]}</td>
            <td> {data.data["home_system_avg"]}%</td>
          </tr>
          <tr>
            <th scope="row">Away</th>
            <td>{data.data["away_system_pl"]}</td>
            <td> {data.data["away_system_avg"]}%</td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
}

export default SystemCard;
