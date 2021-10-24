import React, { useContext, useEffect, useState } from "react";
import MatchContext from "../../matchContext";
import TeamCard from "./teamCard";
import MiddleCard from "./middleCard";
import OppCard from "./oppCard";
import { API } from "../Utils/api";
import "./styles.css";

function Stats() {
  const match = useContext(MatchContext);
  const [stats, setStats] = useState();
  const [nextLast, setNextLast] = useState();
  const [matchTime, setMatchTime] = useState();
  const [predictions, setPredictions] = useState();
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
        let a = new Date(resp[2].start_time);

        setMatchTime(a.toLocaleString());
        setNextLast(resp);
      });
    }
  }, [stats]);

  useEffect(() => {
    if (nextLast) {
      API.getPredictions(match).then((resp) => {
        resp.push({
          ou: nextLast[2]["ou"],
          ah: nextLast[2]["hdp"],
        });
        setPredictions(resp);
      });
    }
  }, [nextLast]);

  // let date = new Date();

  return (
    <div className="stats-wrapper">
      <div />
      <div className="stats-border stats-header">
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
      <div className="stats-border stats-opposition-right">
        {nextLast ? <OppCard data={stats[1]}></OppCard> : null}
      </div>
      <div className="stats-border stats-middle">
        {predictions ? <MiddleCard data={predictions}></MiddleCard> : null}
      </div>
    </div>
  );
}

export default Stats;
