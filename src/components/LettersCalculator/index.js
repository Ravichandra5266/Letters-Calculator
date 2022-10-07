import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  userEnterData = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    const value = count.length > 0 ? count.length : 0
    return (
      <div className="bg-container">
        <div className="card-container-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
        <div className="card-content-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <div className="input-container">
            <label htmlFor="labelId" className="label-title">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input-label"
              placeholder="Enter Phrase"
              id="labelId"
              onChange={this.userEnterData}
            />
            <p className="count-length">No.of letters: {value}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
