import React, { useContext, useEffect, useState } from "react";
import MatchContext from "../../matchContext";
import { API } from "../Utils/api";
import "./styles.css";

function Stats() {
  const match = useContext(MatchContext);
  const [stats, setStats] = useState();
  const [nextLast, setNextLast] = useState();

  useEffect(() => {
    API.getStats(match).then((resp) => {
      let arr = [];
      // this returns an array of all the odds rows recorded for the unplayed games. Should adjust endpoint to get latest
      resp.map((matches) => arr.push(matches));
      setStats(arr);
    });
  }, []);

  useEffect(() => {
    // this will send back the current and last game for each team
    if (stats) {
      API.getNextLast(match).then((resp) => {
        console.log("   ***   are the resp", resp);
        console.log("   ***   are the stats", stats);
        setNextLast(resp);
      });
      // make an api call here to get the team last game from each team
    }
  }, [stats]);

  return (
    <div className="stats-wrapper">
      <div />
      <div className="stats-border stats-header">
        {stats ? (
          <div className="stats-header-text">
            {stats.team} vs. {stats.opposition}
            {Math.floor((Date.parse(stats.start_time) - Date.now()) / 3600000) >
            0 ? (
              <p>
                In{" "}
                {Math.floor(
                  (Date.parse(stats.start_time) - Date.now()) / 3600000
                )}{" "}
                hours
              </p>
            ) : null}
            {}
          </div>
        ) : null}
      </div>
      <div className="stats-border stats-team-left">
        Home team +/- recent total + avg {}
      </div>
      <div className="stats-border stats-opposition-right">jjjjj</div>
      <div className="stats-border stats-middle">jjjjj</div>
    </div>
  );
}

export default Stats;
