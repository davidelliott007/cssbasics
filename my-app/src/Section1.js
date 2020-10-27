import React from "react";
import styled from "styled-components";
import "./App.css";
import { useSpring, animated } from "react-spring";
import { content_string } from "./content";
function Section1({ daveValue }) {
  //INSTEAD OF CLICKING BUTTON, HAVE THIS GET SET OFF BY A SELECTOR?
  // try with flexbox

  let [localDaveValue, setLocalDaveValue] = React.useState(daveValue.payload);

  console.log(daveValue);
  return <ScrollWrapper>{localDaveValue}</ScrollWrapper>;
}
const SpringButton = styled.button``;

const Section2 = styled.div`
  background-color: purple;
`;

const ScrollWrapper = styled.div``;

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

export default Section1;
