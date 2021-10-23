import React, { useState } from "react";
import "./App.css";
import Fixtures from "./Components/Fixtures/index";
import StatsContainer from "./Components/Stats/index";
import MatchContext from "./matchContext";

function App() {
  const [match, setMatch] = useState(undefined);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MatchContext.Provider value={{ match, setMatch }}>
          <div class="wrapper">
            <div class="one ">
              <Fixtures />
            </div>
            <div class="two boxes">
              {match ? (
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
        </MatchContext.Provider>
      </header>
    </div>
  );
}

export default App;
