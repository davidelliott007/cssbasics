import React from "react";
import styled from "styled-components";
import "./App.css";
import { useSpring, animated } from "react-spring";

function Scrolltext() {
  const [toggle, setToggle] = React.useState(false);

  const props = useSpring({
    height: toggle ? 400 : 500,
    from: { height: toggle ? 500 : 400 },
  });

  function onToggle() {
    setToggle(!toggle);
  }
INSTEAD OF CLICKING BUTTON, HAVE THIS GET SET OFF BY A SELECTOR?


  return (
    <ScrollWrapper>
      <SpringButton onClick={onToggle}>ClickMe</SpringButton>
      <ScrollText>
        <animated.div style={props}>
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
        </animated.div>{" "}
      </ScrollText>
    </ScrollWrapper>
  );
}
const SpringButton = styled.button``;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ScrollText = styled.div`
  width: 80%;
  scrollbar-width: 10px;
  background-color: purple;
  overflow: scroll;
  bottom: 10px;
  position: absolute;
  margin-left: 10%;
  @media (max-width: 600px) {
    top: 200px;
    bottom: 20px;
  }
`;

export default Scrolltext;
