import React from "react";

function OppCard(data) {
  const arr = [
    "away_delta_points_recent_agg",
    "away_delta_points_recent_avg",
    "away_delta_points_season_agg",
    "away_delta_points_season_avg",
    "role",
    "total_delta_points_recent_avg",
    "total_delta_points_recent_sum",
    "total_delta_points_season_avg",
    "total_delta_points_season_sum",
    "away_recent_pl",
    "away_season_pl",
    "total_recent_pl",
    "total_season_pl",
  ];

  // console.log("   *** Card data is ***", data.data);
  Object.keys(data.data).map((key) => {
    if (arr.indexOf(key) === -1) {
      delete data.data[key];
    }
    // console.log(data.data);
  });
  return (
    <React.Fragment>
      <div>
        <table id="team-data-away">
          <caption align="top">Away team at Away</caption>
          <tr>
            <th scope="col">Metric</th>
            <th scope="col">Sum</th>
            <th scope="col">Mean</th>
            <th scope="col">PL</th>
          </tr>
          <tr>
            <th scope="row">Recent +\- pts</th>
            <td>{data.data["away_delta_points_recent_agg"]}</td>
            <td>{data.data["away_delta_points_recent_avg"]}</td>
            <td>{data.data["away_recent_pl"]}</td>
          </tr>
          <tr>
            <th scope="row">Season +\- pts</th>
            <td>{data.data["away_delta_points_season_agg"]}</td>
            <td>{data.data["away_delta_points_season_avg"]}</td>
            <td>{data.data["away_season_pl"]}</td>
          </tr>
        </table>
        <table id="team-data-overall">
          <caption align="top">Away team all venues</caption>
          <tr>
            <th scope="col">Metric</th>
            <th scope="col">Sum</th>
            <th scope="col">Mean</th>
            <th scope="col">PL</th>
          </tr>

          <tr>
            <th scope="row">Recent +\- pts</th>
            <td>{data.data["total_delta_points_recent_avg"]}</td>
            <td>{data.data["total_delta_points_recent_sum"]}</td>
            <td>{data.data["total_recent_pl"]}</td>
          </tr>
          <tr>
            <th scope="row">Season +\- pts</th>
            <td>{data.data["total_delta_points_season_avg"]}</td>
            <td>{data.data["total_delta_points_season_sum"]}</td>
            <td>{data.data["total_season_pl"]}</td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
}

export default OppCard;
