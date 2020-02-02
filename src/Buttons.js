import React from 'react';

const Buttons = (props) => {
    return (
        <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={() => props.setHomeScore(props.homeTouchDownFn)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
        onClick={() => props.setHomeScore(props.homeFieldGoalFn) }
          >
            Home Field Goal
          </button>
        </div>

        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => props.setAwayScore(props.awayTouchDownFn)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => props.setAwayScore(props.awayFieldGoalFn)}
          >
            Away Field Goal
          </button>
        </div>

        <div className="resetButton">
          <button className="reset__button" onClick={() => props.reset()}>
            RESET SCORE!
          </button>
        </div>

        <div className="quarterButton">
          <button
            className="quarter__title"
            onClick={() => props.setQuarter(props.quarterAdd())}
          >
            ADD A QUARTER
          </button>
        </div>
      </section>
    )
}

export default Buttons;