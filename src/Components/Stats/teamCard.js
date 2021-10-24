import React from "react";

function TeamCard(data) {
  const arr = [
    "home_delta_points_recent_agg",
    "home_delta_points_recent_avg",
    "home_delta_points_season_agg",
    "home_delta_points_season_avg",
    "role",
    "total_delta_points_recent_avg",
    "total_delta_points_recent_sum",
    "total_delta_points_season_avg",
    "total_delta_points_season_sum",
  ];

  console.log("   *** Card data is ***", data.data);
  Object.keys(data.data).map((key) => {
    if (arr.indexOf(key) === -1) {
      delete data.data[key];
    }
    // console.log(data.data);
  });
  return (
    <React.Fragment>
      <div>
        <table id="team-data-home">
          <caption align="top">Home team at Home</caption>
          <tr>
            <th scope="col">Metric</th>
            <th scope="col">Sum</th>
            <th scope="col">Mean</th>
            <th scope="col">PL</th>
          </tr>
          <tr>
            <th scope="row">Recent +\- pts</th>
            <td>{data.data["home_delta_points_recent_agg"]}</td>
            <td>{data.data["home_delta_points_recent_avg"]}</td>
          </tr>
          <tr>
            <th scope="row">Season +\- pts</th>
            <td>{data.data["home_delta_points_season_agg"]}</td>
            <td>{data.data["home_delta_points_season_avg"]}</td>
          </tr>
        </table>
        <table id="team-data-overall">
          <caption align="top">Home team all venues</caption>
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
          </tr>
          <tr>
            <th scope="row">Season +\- pts</th>
            <td>{data.data["total_delta_points_season_avg"]}</td>
            <td>{data.data["total_delta_points_season_sum"]}</td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
}

export default TeamCard;

// renderTableData() {
//     return this.state.students.map((student, index) => {
//        const { id, name, age, email } = student //destructuring
//        return (
//           <tr key={id}>
//              <td>{id}</td>
//              <td>{name}</td>
//              <td>{age}</td>
//              <td>{email}</td>
//           </tr>
//        )
//     })
//  }

//  render() {
//     return (
//        <div>
//           <h1 id='title'>React Dynamic Table</h1>
//           <table id='students'>
//              <tbody>
//                 {this.renderTableData()}
//              </tbody>
//           </table>
//        </div>
//     )
//  }
