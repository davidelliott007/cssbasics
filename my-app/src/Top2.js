import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import HeroSrc from "./images/shopify_masters_hero.jpg";

import useResizeAware from "react-resize-aware";
import { Spring } from "react-spring/renderprops";
import { useSpring, animated } from "react-spring";
const MenuItems = [
  "Login",
  "Search For Podcasts",
  "Books I've heard",
  "Languages To Learn",
];

function Top2({ heightOfTop, burgerHeight }) {
  const [text, setText] = React.useState(MenuItems);

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
  // from={{ flexdirection: toggle ? "row" : "column" }}
  // to={{ flexdirection: toggle ? "column" : "row" }}

  return (
    <Wrapper heightpassed={heightOfTop}>
      {console.log(burgerHeight)}
      <BurgerDiv style={burgerHeight}>
        {resizeListener}

        {text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </BurgerDiv>

      <HeroDiv>
        <ImageDiv>
          <HeroImgMB image_source={HeroSrc}></HeroImgMB>
        </ImageDiv>
        <TextDiv>The Pre-Launch Strategies of a Million-Dollar Brand</TextDiv>
      </HeroDiv>
    </Wrapper>
  );
}

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

const BurgerDiv = styled.div`
  grid-column: span 3;
  background: lightblue;
  position: relative;
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

  max-height: 200px;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    /* min-height: 100px;
    background-size: contain;
    background-repeat: no-repeat; */
  }
`;

const testDiv = styled(animated)``;

const Wrapper = styled.div`
  padding: 10px;
  background-color: blue;
  height: ${(props) => props.heightpassed};
`;

export default Top2;
