import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:28px;
`;
const Line = styled.div`
display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #4b9cdb;
  &:nth-last-child(1) {
    animation: loadingA .5s .2s infinite;
  }
  &:nth-last-child(2) {
    animation: loadingA .5s .4s infinite;
  }
  &:nth-last-child(3) {
    animation: loadingA .5s 0s infinite;
  }
`;
export default () => (
  <Container>
      <div class="load-1">
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </div>
  </Container>
);