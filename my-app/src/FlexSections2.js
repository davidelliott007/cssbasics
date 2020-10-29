import React from "react";
import styled from "styled-components";
// import styled from "styled-components/macro";

import "./App.css";
import { useSpring, animated } from "react-spring";
import { content_string } from "./content";

function FlexSections2(heightOfText) {
  const [toggle, setToggle] = React.useState(false);

  const big = "30vh";
  const small = "20vh";

  const props = useSpring({
    from: {
      height: toggle ? big : small,
      daveValue: toggle ? "20%" : "30%",
      backgroundColor: toggle ? "red" : "green",
      // flexGrow: toggle ? 4 : 1,
      width: "80%",
      overflowY: "scroll",
      marginLeft: "10%",
    },
    to: {
      height: toggle ? small : big,
      daveValue: toggle ? small : big,
      backgroundColor: toggle ? "green" : "red",
      marginLeft: "10%",

      // flexGrow: toggle ? 1 : 4,
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
      {console.log(heightOfText)}
      <SpringButton onClick={onToggle}>ClickMe</SpringButton>
      <animated.div style={props}>
        dave
        {heightOfText.payload}
        {/* <Section1>section1</Section1> */}
      </animated.div>

      <Section2>section 2</Section2>
    </ScrollWrapper>
  );
}
const SpringButton = styled.button``;

const Section1 = styled.div`
  background-color: green;
`;

const Section2 = styled.div`
  background-color: purple;
  flex-grow: 1;
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
  margin-left: 10%;
`;

export default FlexSections2;
