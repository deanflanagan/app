import React, { useState } from "react";

import "./App.css";
import Fixtures from "./Components/Fixtures/index";
import StatsContainer from "./Components/Stats/index";
import ProfileContext from "./profileContext";

function App() {
  const [profile, setProfile] = useState(undefined);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ProfileContext.Provider value={{ profile, setProfile }}>
          <div class="wrapper">
            <div class="one ">
              <Fixtures />
            </div>
            <div class="two boxes">
              {profile ? (
                <StatsContainer />
              ) : (
                <React.Fragment>Theres no match selected </React.Fragment>
              )}
            </div>
            <div class="three boxes">Poo</div>
            <div class="four boxes">nobody is here</div>
            {/* <div class="four boxes">Four</div>
            <div class="five">Five</div>
            <div class="six">Six</div> */}
          </div>
        </ProfileContext.Provider>
      </header>
    </div>
  );
}

export default App;
