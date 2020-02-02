import React from 'react'
import Timer from './Timer';
import BottomRow from './BottomRow';

const ScoreBoard = (props) =>{
return (<section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{props.homeScore}</div>
          </div>
          <Timer />
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.awayScore}</div>
          </div>
        </div>
        <BottomRow 
        quarter={props.quarter}
        />
      </section>)
}
export default ScoreBoard