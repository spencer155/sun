import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      friends:[{
        id:1,
        name:'aaaa',
        age:11
      },{
        id:2,
        name:'bbbb',
        age:22
      },{
        id:3,
        name:'ccccc',
        age:33
      },{
        id:4,
        name:'dddd',
        age:44
      }]
    }
  }
  render() {
    return (
      <div>
        <h2>朋友列表：</h2>
        <ul>
          {
            this.state.friends.map((item) => {
              return (
                <li key={item.id}>
                  姓名：{item.name}
                  年龄：{item.age}
                  <button onClick={() => this.incrementAge(item)}>年龄加1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => this.increment()}>添加朋友</button>
      </div>
    )
  }

  incrementAge(item) {
    console.log(item)
    const newFriends = [...this.state.friends]
    newFriends.forEach(v => {
      if (v.id === item.id) {
        v.age += 1 
      }
    })
    this.setState({
      friends: newFriends
    })
  }
  increment() {
    const newFriends = [...this.state.friends]
    newFriends.push({
      id:newFriends.length + 1,
      name:`sun${newFriends.length + 1}`,
      age:23
    })
    this.setState({
      friends: newFriends
    })
  }
}
