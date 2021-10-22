import React, { useContext, useEffect, useState } from "react";
import ProfileContext from "../../profileContext";
import { API } from "../Utils/api";
import "./styles.css";

function Stats() {
  const profile = useContext(ProfileContext);
  const [stats, setStats] = useState();
  const [teamStats, setTeamStats] = useState();

  useEffect(() => {
    API.getStats(profile).then((resp) => {
      resp.map((match) => setStats(match));
    });
  }, []);

  useEffect(() => {
    if (stats) {
      API.getTeam(stats).then((resp) => {
        console.log(resp);
      });
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
      <div className="stats-border stats-team-left">jjjjj</div>
      <div className="stats-border stats-opposition-right">jjjjj</div>
      <div className="stats-border stats-middle">jjjjj</div>
    </div>
  );
}

export default Stats;
