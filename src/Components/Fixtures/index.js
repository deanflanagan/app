import React, { useContext, useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
// import testData from "./testFixtures";
import MatchContext from "../../matchContext";
import { API } from "../Utils/api";

function Fixtures() {
  const { match, setMatch } = useContext(MatchContext);
  const [upcoming, setUpcoming] = useState();

  useEffect(() => {
    API.getNextGames().then((resp) => setUpcoming(resp));
  }, []);

  const handleSelect = (e) => {
    console.log(
      "React stuff for e at fixtures, should be whole object not just match id ",
      e
    );
    setMatch(e);
  };

  return (
    <DropdownButton
      alignRight
      title="Matches available"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
    >
      {upcoming ? (
        <div>
          {upcoming.map((res) => (
            <Dropdown.Item eventKey={res.match_id}>
              {res.team} vs. {res.opposition}
            </Dropdown.Item>
          ))}
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </DropdownButton>
  );
}

export default Fixtures;
