import React, { PureComponent } from 'react'

import { HomeWrap, TitleWrap} from "./style";

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrap>
        <TitleWrap>我是home标题</TitleWrap>
        <div className="banner">
          <span>轮播图1</span>
          <span className="active">轮播图2</span>
          <span>轮播图3</span>
        </div>
      </HomeWrap>
    )
  }
}
