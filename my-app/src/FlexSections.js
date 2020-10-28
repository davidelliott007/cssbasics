import React from "react";
import styled from "styled-components";
// import styled from "styled-components/macro";

import "./App.css";
import { useSpring, animated } from "react-spring";
import { content_string } from "./content";
import Section1 from "./Section1";
function FlexSections() {
  const [toggle, setToggle] = React.useState(false);

  const big = 300;
  const small = 200;

  const props = useSpring({
    from: {
      height: toggle ? big : small,
      daveValue: toggle ? big : small,
      backgroundColor: toggle ? "red" : "green",
      flexDirection: toggle ? "column" : "row",
    },
    to: {
      height: toggle ? small : big,
      daveValue: toggle ? small : big,
      backgroundColor: toggle ? "green" : "red",
      flexDirection: toggle ? "row" : "column",
    },
  });

  // height: toggle ? "50%" : "20%",
  // from: { height: toggle ? "20%" : "20%" },

  function onToggle() {
    setToggle(!toggle);
  }
  //INSTEAD OF CLICKING BUTTON, HAVE THIS GET SET OFF BY A SELECTOR?
  // try with flexbox

  return (
    <ScrollWrapper>
      <animated.div style={props}>
        <SpringButton onClick={onToggle}>ClickMe</SpringButton>
        <Section1 daveValue={props}></Section1>
        <Section2>section 2</Section2>
      </animated.div>

      {/* <ScrollText>
        <animated.div style={props}>{content_string}</animated.div>
      </ScrollText> */}
    </ScrollWrapper>
  );
}
const SpringButton = styled.button``;

const Section2 = styled.div`
  background-color: purple;
`;

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
  bottom: 0px;
  position: absolute;
  margin-left: 10%;
  @media (max-width: 600px) {
    bottom: 20px;
  }
`;

export default FlexSections;
