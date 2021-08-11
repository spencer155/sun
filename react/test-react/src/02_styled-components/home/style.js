import styled from "styled-components";

export const HomeWrap = styled.div`
  font-size:20px;
  color:#333;
  background-color:#eee;
  .banner {
    background-color:#000;
    color:#fff;
    .active {
      color:red;
      &::after {
        content:'sun'
      }
    }
  }
`

export const TitleWrap = styled.h2`
  font-size:30px;
  color:#f00;
`