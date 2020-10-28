import React from "react";
import logo from "./logo.svg";
import Top from "./Top";
import styled from "styled-components";
import Scrolltext from "./Scrolltext";
import Player from "./Player";
import "./App.css";
import FlexSections2 from "./FlexSections2";
function App() {
  return (
    <FleXApp>
      <Item1>
        <Top></Top>
      </Item1>

      <Player></Player>

      <Item2>
        <FlexSections2></FlexSections2>
        {/* <Scrolltext></Scrolltext> */}
      </Item2>
    </FleXApp>
  );
}

const FleXApp = styled.div``;
const Item1 = styled.div`
  background-color: transparent;
`;
const Item2 = styled.div`
  background-color: yellow;
`;

export default App;
