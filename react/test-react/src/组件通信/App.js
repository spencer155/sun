import React, { Component } from 'react'
import propTypes from 'prop-types'

class ChildApp extends Component {
  render() {
    const {name, age} = this.props
    return (
      <h2>{`年龄:${age},名字${name}`}</h2>
    )
  }
}
ChildApp.propTypes = {
  name:propTypes.string,
  age:propTypes.number
}
ChildApp.defaultProps = {
  name:'aaaa',
  age:1111
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildApp name="sun" age={11}></ChildApp>
        <ChildApp name="bin" age={22}></ChildApp>
        <ChildApp></ChildApp>
      </div>
    )
  }
}
