//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Buttons from './Buttons'
import Timer from "./Timer";
import BottomRow from './BottomRow'
import ScoreBoard from './ScoreBoard'

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const reset = function() {
    setHomeScore(0);
    setAwayScore(0);
  };

  const homeTouchDownFn = ()=>{
    return (homeScore + 7)
  } ;
  const homeFieldGoalFn = ()=>{
    return (homeScore + 3)
  } ;

  const awayTouchDownFn = ()=>{
    return (awayScore + 7)
  } ;
  const awayFieldGoalFn = ()=>{
    return (awayScore + 3)
  } ;

  const quarterAdd = function() {
    if (quarter < 4) {
      return quarter + 1;
    } else {
      return quarter - 3;
    }
  };

  return (
    <div className="container">
    <ScoreBoard 
    homeScore={homeScore}
    awayScore={awayScore}
    quarter={quarter}
    quarterAdd={quarterAdd}
    />
    <Buttons 
     setHomeScore={setHomeScore}
     homeScore={homeScore}
     awayScore={awayScore}
     setAwayScore={setAwayScore}
     homeTouchDownFn={homeTouchDownFn}
     homeFieldGoalFn={homeFieldGoalFn}
     awayTouchDownFn={awayTouchDownFn}
     awayFieldGoalFn={awayFieldGoalFn}
     quarterAdd={quarterAdd}
     quarter={quarter}
     setQuarter={setQuarter}
     reset={reset}
     />
    </div>
  );
}

export default App;
