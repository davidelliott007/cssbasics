import React from "react";
import logo from "./logo.svg";
import Top from "./Top";
import Top2 from "./Top2";

import styled from "styled-components";
import Scrolltext from "./Scrolltext";
import Player from "./Player";
import "./App.css";
import FlexSections2 from "./FlexSections2";
import FlexSections3 from "./FlexSections3";
import { BiMenu } from "react-icons/bi";

import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

function App() {
  const [toggle, setToggle] = React.useState(false);

  const big = "50vh";
  const small = "30vh";
  const topBig = "10vh";
  const topSmall = "20vh";

  function onToggle() {
    setToggle(!toggle);
  }

  return (
    <FleXApp>
      <Item1>
        <SpringButton onClick={onToggle}>
          <BiMenu size={40} />
        </SpringButton>
        <Spring
          // force
          // config={{ tension: 200, friction: 100, precision: 1 }}
          from={{
            burgerHeight: toggle ? 0 : 100,
            topHeight: toggle ? topBig : topSmall,
          }}
          to={{
            burgerHeight: toggle ? 100 : 0,
            topHeight: toggle ? topSmall : topBig,
          }}
        >
          {(props) => (
            <Top2
              heightOfTop={props.topHeight}
              burgerHeight={props.burgerHeight}
            ></Top2>
          )}
        </Spring>
      </Item1>
      <Player></Player>
      <Item2>
        <Spring
          from={{ height: toggle ? big : small }}
          to={{ height: toggle ? small : big }}
        >
          {(props) => (
            <FlexSections3 heightOfText={props.height}></FlexSections3>
          )}
        </Spring>
      </Item2>
    </FleXApp>
  );
}
const SpringButton = styled.button`
  background-color: transparent;
  border: 0px;
`;

const FleXApp = styled.div``;
const Item1 = styled.div`
  background-color: transparent;
`;
const Item2 = styled.div`
  background-color: yellow;
  bottom: 0px;
  position: absolute;
`;

export default App;
