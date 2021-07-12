import React, { Component } from 'react'

class Cpn extends Component {
  render() {
    return (
      <div>
        Cpn 组件
     </div>
    )
  }
  componentWillUnmount() {
    console.log('componentWillUnmount方法')
  }
}

export default class App extends Component {
  constructor() {
    super()
    console.log('constructor方法')
    this.state = {
      num:0,
      isShow:true
    }
  }
  render() {
    console.log('render方法')
    return (
      <div>
        app组件
        <h2>当前数量：{this.state.num}</h2>
        <button onClick={() => { this.increment()}}>增加</button>
        <hr></hr>
        <button onClick={() => { this.changeShow()}}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }
  increment() {
    this.setState({
      num:this.state.num + 1
    })
  }
  changeShow() {
    this.setState({
      isShow:!this.state.isShow
    })
  }
  componentDidMount() {
    console.log('componentDidMount方法')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate方法')
  }
}
