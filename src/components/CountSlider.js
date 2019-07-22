import React from 'react'
import { Slider, InputNumber, Row, Col, Input } from 'antd'

export class CountSlider extends React.Component {
  state = {
    inputValue: this.props.value
  }

  onChange = (value) => {
    const cleanValue = Number(value) ? value : this.state.inputValue
    this.setState({
      inputValue: cleanValue
    })
    console.log(this.state.inputValue)
    this.props.onCountSliderChange(cleanValue)
  }
  // onChange = (value) => {
  //   const cleanValue = Number(value) ? value : this.state.inputValue
  //   this.setState({
  //     inputValue: cleanValue
  //   })
  //   this.props.onCountSliderChange(cleanValue)
  // }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider 
            min={1} 
            max={20} 
            onChange={this.onChange} 
            value={this.state.inputValue} 
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    )
  }
}



