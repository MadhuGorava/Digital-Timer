// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    timerLimit: 25,
    currentRunningSeconds: 0,
  }

  renderTimerControlOptions = () => {
    const {isTimerRunning} = this.state
    const playImageUrl =
      'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const stopImageUrl =
      'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    const resetImageUrl =
      'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png'
    const startStopImage = isTimerRunning ? stopImageUrl : playImageUrl
    const startStopAltText = isTimerRunning ? 'pause icon' : 'play icon'
    const startStopText = isTimerRunning ? 'Pause' : 'Start'
    return (
      <div className="control-options-container">
        <button
          className="start-stop-button"
          type="button"
          onClick={this.startStopTimer}
        >
          <div className="start-stop-container">
            <img
              src={startStopImage}
              className="start-stop-img"
              alt={startStopAltText}
            />
            <h1 className="start-stop-text">{startStopText}</h1>
          </div>
        </button>

        <button
          className="start-stop-button"
          type="button"
          onClick={this.onClickResetTimer}
        >
          <div className="start-stop-container">
            <img src={resetImageUrl} className="reset-img" alt="reset icon" />
            <h1 className="start-stop-text">Reset</h1>
          </div>
        </button>
      </div>
    )
  }

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
          <div className="timer-control-container">
            {this.renderTimerControlOptions()}
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
