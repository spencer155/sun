import React, { Component } from 'react'

class Button extends Component{
  render() {
    const {onClick} = this.props
    return (
      <button onClick={onClick}>+1</button>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      num:0
    }
  }
  render() {
    return (
      <div>
        <h2>当前数字：{this.state.num}</h2>
        <Button onClick={() => this.increment()}/>
      </div>
    )
  }
  increment() {
    this.setState({
      num:this.state.num+1
    })
  }
}
