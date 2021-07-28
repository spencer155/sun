import React, { PureComponent } from 'react'
import { EventEmitter} from 'events'

const eventsBus = new EventEmitter()

class Header extends PureComponent {
  render() {
    return (
      <div>
        header
      </div>
    )
  }
  componentDidMount() {
    eventsBus.addListener('sun',this.sun)
  }
  componentWillUnmount() {
    eventsBus.removeListener('sun',this.sun)
  }
  sun(num) {
    console.log(num)
  }
}

class Main extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={() => this.eventEmit()}>点击</button>
      </div>
    )
  }
  eventEmit() {
    eventsBus.emit('sun',12334)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}
