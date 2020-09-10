import React from "react";
import logo from "./logo.svg";
import Top from "./Top";
import Middle from "./Middle";
import styled from "styled-components";

import "./App.css";

function App() {
  return (
    <FleXApp>
      <Item1>
        <Top></Top>
      </Item1>
      <Item2>
        <ScrollText>
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header daveHeader dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header daveHeader dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header daveHeader dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header daveHeader dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header daveHeader dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header daveHeader dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header daveHeader dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          daveHeader dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header daveHeader dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header daveHeader dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header daveHeader dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header daveHeader dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header daveHeader dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header daveHeader dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header daveHeader dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header daveHeader
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header daveHeader dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header daveHeader dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header daveHeader dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header daveHeader dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header daveHeader dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header daveHeader dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header daveHeader dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header daveHeader
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          daveHeader dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header daveHeader dave Header dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header daveHeader dave Header dave Header dave Header dave
          Header dave Header dave Header dave Header dave Header dave Header
          dave Header dave Header daveHeader dave Header dave Header dave Header
          dave Header dave Header dave Header dave Header dave Header dave
          Header dave Header dave Header
        </ScrollText>
        {/* <Top></Top>
      <Middle> </Middle> */}
      </Item2>
      <Item3>hello 2</Item3>
    </FleXApp>
  );
}
const FleXApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
`;
const Item1 = styled.div`
  background-color: green;
`;
const Item2 = styled.div`
  background-color: yellow;
  flex-grow: 2;
`;
const Item3 = styled.div`
  background-color: red;
`;

const ScrollText = styled.div`
  width: 80%;
  scrollbar-width: 10px;
  background-color: purple;
  overflow: scroll;
  bottom: 20px;
  top: 300px;
  position: absolute;
  margin-left: 10%;
  @media (max-width: 600px) {
    top: 320px;
    bottom: 20px;
  }
`;

export default App;
