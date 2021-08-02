import React, { PureComponent,createRef,forwardRef } from 'react'

// function Home() {
//   return <h2>home</h2>
// }

const Home = forwardRef(function(props, ref) {
  return <h2 ref={ref}>home</h2>
})


export default class App extends PureComponent {
  constructor() {
    super()
    this.homeRef = createRef()
  }
  render() {
    return (
      <div>
        <Home ref={this.homeRef} />
        <button onClick={() => this.printRef()}>点击</button>
      </div>
    )
  }
  printRef() {
    console.log(this.homeRef.current)
  }
}
