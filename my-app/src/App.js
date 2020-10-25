import React from "react";
import logo from "./logo.svg";
import Top from "./Top";
import Middle from "./Middle";
import styled from "styled-components";
import Scrolltext from "./Scrolltext";
import Player from "./Player";
import "./App.css";
import { Spring, animated } from "react-spring/renderprops";

function App() {
  return (
    <FleXApp>
      <Item1>
        <Top></Top>
      </Item1>

      <Player></Player>

      <Item2>
        <Scrolltext></Scrolltext>
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
