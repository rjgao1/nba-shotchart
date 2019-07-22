import React from 'react'
import _ from 'lodash'
import { ShotChart } from './ShotChart'
import { CountSlider } from './CountSlider'
import { Radio, Row, Col } from 'antd'

import "../styles/DataViewContainer.css"

const RadioGroup = Radio.Group



export class DataViewContainer extends React.Component {
  state = {
    minCount: 2,
    chartType: 'hexbin',
  }

  onCountSliderChange = (count) => {
    this.setState({minCount: count})
    console.log("Parent State: ", this.state.minCount)
  }

  // e is the event of checking one of the Radios; 
  // e.target.value is the value of the checked Radio
  onChartTypeChange = (e) => {
    console.log(e.target.value)
    this.setState({chartType: e.target.value})
  }

  render() {
    return (
      <div className="data-view">
        <ShotChart 
          playerId={this.props.playerId}
          // minCount={this.state.minCount}
          chartType={this.state.chartType}
        />
        <div className="filters">
          <CountSlider 
            value={this.state.minCount}
            onCountSliderChange={this.onCountSliderChange}
          />
          <Row>
            <Col span={9}>
              <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                <Radio value="hexbin">Hexbin</Radio>
                <Radio value="scatter">Scatter</Radio>
              </RadioGroup>
            </Col>
          </Row>
        </div>
      </div>

      
    )
  }
}