import React, { Component } from 'react'
import './tab.css'
class Tab extends Component {
  constructor() {
    super()
    this.state = {
      currIndex:0
    }
  }
  render() {
    const {titles} = this.props
    const {currIndex} = this.state
    return (
      <div className="tab-wrap">
        {
          titles.map((item,index) => {
            return (
              <span key={item} 
                className={'tab-item ' + (currIndex === index?'active':'')}
                onClick={() => this.tabClick(index)}
              >
                {item}
              </span>
            )
          })
        }
      </div>
    )
  }
  tabClick(index) {
    this.setState({
      currIndex:index
    })
    const {onTabClick} = this.props
    onTabClick(index)
  }
}


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      activeName:0,
    }
  }
  render() {
    return (
      <div>
        <Tab onTabClick={(index) => this.tabClick(index)} titles={['流行','新款','精选']}/>
        <h2>{this.getTabContent()}</h2>
      </div>
    )
  }
  tabClick(activeName) {
    this.setState({
      activeName: activeName
    })
  }
  getTabContent() {
    const map = {
      0:'流行',
      1:'新款',
      2:'精选',
    }

    return map[this.state.activeName] || ''
  }
}
