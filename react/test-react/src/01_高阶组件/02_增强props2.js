import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
  name:'sun',
  age:10,
  region:'中国'
})

function withUser(WrappedComponent) {
  return props => {
    return <UserContext.Consumer>
      {user => {
        console.log(user)
        return <WrappedComponent {...props} {...user}/>
      }}
    </UserContext.Consumer>
  }
}



class Home extends PureComponent {
  render() {
    const {name,age, region} = this.props
    return (<h2>Home {`名字：${name} 年龄：${age} 区域：${region}`}</h2>)
  }
}

const UserHome = withUser(Home)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{name:'史努比',age:12,region:'中国'}}>
          <UserHome/>
          <UserHome/>
        </UserContext.Provider>
      </div>
    )
  }
}

