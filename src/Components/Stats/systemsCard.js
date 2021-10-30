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
    "ou_system_avg",
    "ou_system_pl",
    "ah_system_avg",
    "ah_system_pl",
  ];

  // console.log("   *** Card data is ***", data.data);
  //   Object.keys(data.data).map((key) => {
  //     if (arr.indexOf(key) === -1) {
  //       delete data.data[key];
  //     }
  //     // console.log(data.data);
  //   });
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
            <th scope="row">All games</th>
            <td>{data.data["ou_system_pl"]}</td>
            <td> {data.data["ou_system_avg"]}%</td>
          </tr>
          <tr>
            <th scope="row">All games</th>
            <td>{data.data["ah_system_pl"]}</td>
            <td> {data.data["ah_system_avg"]}%</td>
          </tr>
          {/* <tr>
            <th scope="row">Over</th>
            <td>{data.data["blind_over_pl"]}</td>
            <td>{data.data["blind_over_mean"]}%</td>
          </tr> */}
        </table>
        {/* <table id="team-data-away">
          <caption align="top">Back all overs</caption>
          <tr>
            <th scope="col"></th>
            <th scope="col">PL</th>
            <th scope="col">Mean</th>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>{data.data["blind_over_pl"]}</td>
            <td>{data.data["blind_over_mean"]}%</td>
          </tr>
        </table> */}
        {/* <table id="team-data-away">
          <caption align="top">OU System</caption>
          <tr>
            <th scope="col"></th>
            <th scope="col">PL</th>
            <th scope="col">Mean</th>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>{data.data["ou_system_pl"]}</td>
            <td>{data.data["ou_system_avg"]}%</td>
          </tr>
        </table> */}
      </div>
    </React.Fragment>
  );
}

export default SystemCard;
