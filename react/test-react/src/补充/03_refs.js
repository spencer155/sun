import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.titleRef = createRef()
    this.titleEl = null
  }
  render() {
    return (
      <div>
        <h2 ref="titleRef">事实上</h2>
        <h2 ref={this.titleRef}>事实上</h2>
        <h2 ref={arg => this.titleEl = arg}>事实上</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
      </div>
    )
  }
  changeText() {
    // 已经废弃
    this.refs.titleRef.innerHTML = 'sun'
    this.titleRef.current.innerHTML = 'sun1'
    this.titleEl.innerHTML = 'sun2'

  
  }
}
