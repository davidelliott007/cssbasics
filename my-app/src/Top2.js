import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import HeroSrc from "./images/shopify_masters_hero.jpg";

import useResizeAware from "react-resize-aware";
import { Spring } from "react-spring/renderprops";
import { useSpring, animated } from "react-spring";

function Top2(heightOfTop) {
  const [resizeListener, sizes] = useResizeAware();

  React.useEffect(() => {
    console.log(sizes);
    // dispatch(reportHamburgerMenuSize(sizes.height));
  }, [sizes.width, sizes.height]);

  function reportSize(event) {
    // console.log("done");
    // console.log(event);
    // dispatch(reportHamburgerMenuSize(sizes.height));
  }
  console.log(heightOfTop.heightOfTop);
  // from={{ flexdirection: toggle ? "row" : "column" }}
  // to={{ flexdirection: toggle ? "column" : "row" }}

  return (
    <Wrapper>
      {console.log(heightOfTop)}

      <HeroDiv>
        <NewDiv heightpassed={heightOfTop.heightOfTop}>
          <ImageDiv>
            <HeroImgMB image_source={HeroSrc}></HeroImgMB>
          </ImageDiv>
          <TextDiv>
            The Pre-Launch Strategies of a Million-Dollar Brand
            {heightOfTop.heightOfTop}
          </TextDiv>
        </NewDiv>
      </HeroDiv>
    </Wrapper>
  );
}
const SpringButton = styled.button``;

const NewDiv = styled.div`
  height: ${(props) => props.heightpassed};
  /* height: 19.978361772653784vh; */
  background-color: green;
`;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 5px;
  margin: auto;
  max-width: 800px;
  font-size: 32px;
  background-color: red;

  @media (max-width: 860px) {
    border: 2px solid #eec200;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    font-weight: 500;
    justify-content: space-between;
    padding: 10px;
  }
`;

const ImageDiv = styled.div`
  min-width: 50%;
  background-color: transparent;
`;

const TextDiv = styled.div`
  padding-left: 40px;
  @media (max-width: 600px) {
    padding-left: 10px;
  }
`;

const HeroImgMB = styled.div`
  background-image: url("${(props) => props.image_source}");
  min-height: 200px;
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    min-height: 100px;
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const testDiv = styled(animated)``;

const Wrapper = styled.div`
  padding: 10px;
  background-color: blue;
`;

export default Top2;
