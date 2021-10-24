import React, { useContext, useEffect, useState } from "react";
import MatchContext from "../../matchContext";
import TeamCard from "./teamCard";
import { API } from "../Utils/api";
import "./styles.css";

function Stats() {
  const match = useContext(MatchContext);
  const [stats, setStats] = useState();
  const [nextLast, setNextLast] = useState();
  const [matchTime, setMatchTime] = useState();
  // let headerDate = "";

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
        let a = new Date(resp[2].start_time);

        setMatchTime(a.toLocaleString());
        setNextLast(resp);

        // headerDate = new Date(nextLast[2].start_time);
      });
      // make an api call here to get the team last game from each team
    }
  }, [stats]);

  // let date = new Date();

  return (
    <div className="stats-wrapper">
      <div />
      <div className="stats-border stats-header">
        {/* here you have to design the layout */}
        {nextLast ? (
          <div className="stats-header-text">
            {nextLast[2].team} vs. {nextLast[2].opposition}
            <br />
            Start time is {matchTime}
          </div>
        ) : null}
      </div>
      <div className="stats-border stats-team-left">
        {nextLast ? <TeamCard data={stats[0]}></TeamCard> : null}
      </div>
      <div className="stats-border stats-opposition-right">jjjjj</div>
      <div className="stats-border stats-middle">jjjjj</div>
    </div>
  );
}

export default Stats;
