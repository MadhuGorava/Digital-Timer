// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="time-card">
            <div className="timer-text-card">
              <p className="number">25:00</p>
              <p className="number-text">Paused</p>
            </div>
          </div>
          <div>
            <div className="play-pause-container">
              <div className="buttons-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="icon"
                />
                <h1 className="sub-heading">Start</h1>
              </div>
              <div className="buttons-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="icon"
                />
                <h1>restart</h1>
              </div>
            </div>
            <div className="time-limit-card">
              <p className="limit-text">Set Timer limit</p>
              <div className="buttons">
                <button type="button" className="operator">
                  {' '}
                  -{' '}
                </button>
                <p className="number">25</p>
                <button type="button" className="operator">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
