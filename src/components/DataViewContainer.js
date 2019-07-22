import React from 'react'
import _ from 'lodash'
import { ShotChart } from './ShotChart'
import { CountSlider } from './CountSlider'

import "../styles/DataViewContainer.css"

export class DataViewContainer extends React.Component {
  state = {
    minCount: 2,
  }

  onCountSliderChange = (count) => {
    this.setState({minCount: count})
    console.log("Parent State: ", this.state.minCount)
  }
  render() {
    return (
      <div className="data-view">
        <ShotChart playerId={this.props.playerId}/>
        <div className="filters">
          <CountSlider 
            value={this.state.minCount}
            onCountSliderChange={this.onCountSliderChange}
          />
        </div>
      </div>

      
    )
  }
}