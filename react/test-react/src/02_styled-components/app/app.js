import React, { PureComponent } from 'react'
import Home from '../home/home'
import Profile from '../profile/profile'


export default class app extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile></Profile>
      </div>
    )
  }
}
