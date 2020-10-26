import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import HeroSrc from "./images/shopify_masters_hero.jpg";

import useResizeAware from "react-resize-aware";
import { Spring, animated } from "react-spring/renderprops";

function Top() {
  const [resizeListener, sizes] = useResizeAware();
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    console.log(sizes);
    // dispatch(reportHamburgerMenuSize(sizes.height));
  }, [sizes.width, sizes.height]);

  function reportSize(event) {
    // console.log("done");
    // console.log(event);
    // dispatch(reportHamburgerMenuSize(sizes.height));
  }
  function onToggle() {
    setToggle(!toggle);
  }

  // from={{ flexdirection: toggle ? "row" : "column" }}
  // to={{ flexdirection: toggle ? "column" : "row" }}

  return (
    <Wrapper>
      {resizeListener}

      <HeroDiv>
        <Spring
          native
          force
          config={{ tension: 2000, friction: 100, precision: 1 }}
          from={{
            // height: toggle ? 500 : 100,
            opacity: toggle ? 1 : 0.5,
            // flexdirection: toggle ? "row" : "column",
          }}
          to={{
            // height: toggle ? 100 : 500,
            opacity: toggle ? 0.5 : 1,
            // flexdirection: toggle ? "column" : "row",
          }}
          onRest={reportSize}
        >
          {(props) => (
            <animated.div className="item" style={props}>
              <ImageDiv>
                <HeroImgMB image_source={HeroSrc}></HeroImgMB>
              </ImageDiv>
              <TextDiv>
                The Pre-Launch Strategies of a Million-Dollar Brand
              </TextDiv>
              <SpringButton onClick={onToggle}>ClickMe</SpringButton>
            </animated.div>
          )}
        </Spring>
      </HeroDiv>
    </Wrapper>
  );
}
const SpringButton = styled.button``;

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

const Wrapper = styled.div`
  padding: 10px;
  background-color: blue;
`;

export default Top;
