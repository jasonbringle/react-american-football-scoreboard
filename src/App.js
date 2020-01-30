//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {

  const [homeScore,setHomeScore] = useState(0)
  const [awayScore,setAwayScore] = useState(0)
  const reset = function (){
      setHomeScore(0)
      setAwayScore(0)
  }
    

  function Home(){
    return <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
    }

  function Away(){
    return <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
  }

  function Buttons(){
    return <section className="buttons">
      <div className="homeButtons">
        <button className="homeButtons__touchdown"onClick={() => setHomeScore(homeScore + 7)}       >Home Touchdown</button>
        <button className="homeButtons__fieldGoal"onClick={() => setHomeScore(homeScore + 3)}       >Home Field Goal</button>
      </div>

      <div className="awayButtons">
        <button className="awayButtons__touchdown"onClick={() => setAwayScore(awayScore + 7)}       >Away Touchdown</button>
        <button className="awayButtons__fieldGoal"onClick={() => setAwayScore(awayScore + 3)}       >Away Field Goal</button>
      </div>

      <div className = 'resetButton'>
        <button className='reset__button'onClick={() => reset()}>RESET SCORE!</button>
      </div>

      </section>
  }

  function Timer(){
    return <div className="timer">00:03</div>
  }

  return (
      <div className="container">
        <section className="scoreboard">
          <div className="topRow">
            <Home />
              <Timer />
                <Away />
          </div>
          <BottomRow />
        </section>
        <Buttons />
      </div>
    );
}

export default App;
