import React, { PureComponent } from 'react'


function enhanceRegionProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region='中国'/>
  }
}

class Home extends PureComponent {
  render() {
    const {name,age, region} = this.props
    return (
      <h2>Home {`名字：${name} 年龄：${age} 区域：${region}`}</h2>
    )
  }
}
const EnhanceHome = enhanceRegionProps(Home)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome name='sun' age={25}/>
        <EnhanceHome name='sun2' age={26}/>
      </div>
    )
  }
}

