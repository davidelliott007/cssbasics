import React from "react";
import styled from "styled-components";
// import styled from "styled-components/macro";

import "./App.css";
import { useSpring, animated } from "react-spring";
import { content_string } from "./content";

function FlexSections3(heightOfText) {
  // height: toggle ? "50%" : "20%",
  // from: { height: toggle ? "20%" : "20%" },

  //INSTEAD OF CLICKING BUTTON, HAVE THIS GET SET OFF BY A SELECTOR?
  // try with flexbox

  return (
    <ScrollWrapper>
      {console.log(heightOfText.heightOfText)}

      <Section1>
        <ScrollText heightpassed={heightOfText.heightOfText}>
          {content_string}
        </ScrollText>
      </Section1>
      <Section2>section 2</Section2>
    </ScrollWrapper>
  );
}
const SpringButton = styled.button``;

const Section1 = styled.div`
  background-color: green;
  /* height: 300px; */
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
  overflow-y: scroll;
  margin-left: 10%;
  height: ${(props) => props.heightpassed};

  /* height: (${(props) => props.heightpassed}); */
`;

export default FlexSections3;
