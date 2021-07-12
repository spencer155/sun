import React from "react";

//  没有this对象
//  没有内部状态（hooks）
export default function App() {
  return (
    <div>函数式组件</div>
  )
}

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       num : 0
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>当前计数：{this.state.num}</h2>
//         <button onClick={() => { this.increment()}}>+</button>
//         <button onClick={() => { this.decrement()}}>-</button>
//       </div>
//     )
//   }
//   increment() {
//     this.setState({
//       num:this.state.num + 1
//     })
//   }
//   decrement() {
//     this.setState({
//       num:this.state.num - 1
//     })
//   }
// }