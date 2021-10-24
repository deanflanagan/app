import React from "react";

function MiddleCard(data) {
  console.log("   *** Predictions data is ***", data.data);

  return (
    <React.Fragment>
      <div>
        <table id="team-data-home">
          <caption align="top">Handicaps</caption>
          <tr>
            <th scope="col">FT1</th>
            <th scope="col">FT2</th>
            <th scope="col">AH</th>
            <th scope="col">OU</th>
          </tr>
          <tr>
            <td>{data.data[0]["ex_ft1"]}</td>
            <td>{data.data[0]["ex_ft2"]}</td>
            <td>{data.data[0]["ah"]}</td>
            <td>{data.data[0]["ou"]}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>{data.data[1]["ah"]}</td>
            <td>{data.data[1]["ou"]}</td>
          </tr>
        </table>
        {/* <table id="team-data-home">
          <caption align="top">Handicaps</caption>
          <tr>
            <th scope="col">FT1</th>
            <th scope="col">FT2</th>
            <th scope="col">AH</th>
            <th scope="col">OU</th>
          </tr>
          <tr>
            <td>{data.data[0]["ex_ft1"]}</td>
            <td>{data.data[0]["ex_ft2"]}</td>
            <td>{data.data[0]["ah"]}</td>
            <td>{data.data[0]["ou"]}</td>
          </tr>
        </table> */}
      </div>
    </React.Fragment>
  );
}

export default MiddleCard;
