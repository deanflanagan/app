import React, { useContext, useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
// import testData from "./testFixtures";
import ProfileContext from "../../profileContext";
import { API } from "../Utils/api";

function Fixtures() {
  const { setProfile } = useContext(ProfileContext);
  const [upcoming, setUpcoming] = useState();

  useEffect(() => {
    API.getNextGames().then((resp) => setUpcoming(resp));
  }, []);

  const handleSelect = (e) => {
    // console.log(e);
    setProfile(e);
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

      {/* <Dropdown.Divider />

      <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
    </DropdownButton>
  );
}

export default Fixtures;
