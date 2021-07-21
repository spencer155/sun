import React, { Component } from 'react'

const UserContext = React.createContext({
  name:'sun'
})

class Name extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        名字：{this.context.name}
      </div>
    )
  }
}
Name.contextType = UserContext

function Main() {
  return (
    <div>
      <Name/>
    </div>
  )
}


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name:'啊啊首冬发生地方'
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Main/>
        </UserContext.Provider>
      </div>
    )
  }
}
