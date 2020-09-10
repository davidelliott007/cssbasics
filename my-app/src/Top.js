import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import HeroSrc from "./images/shopify_masters_hero.jpg";

function Top() {
  return (
    <Wrapper>
      <Header>Header dave Header dave Header dave</Header>
      <HeroDiv>
        <ImageDiv>
          <HeroImgMB image_source={HeroSrc}></HeroImgMB>
        </ImageDiv>
        <TextDiv>The Pre-Launch Strategies of a Million-Dollar Brand</TextDiv>
      </HeroDiv>
    </Wrapper>
  );
}
const TextDiv = styled.div`
  padding-left: 40px;
  text-align: left;
  @media (max-width: 600px) {
    padding-left: 0px;
  }
`;

const ImageDiv = styled.div`
  min-width: 50%;
  background-color: white;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin: auto;
  max-width: 800px;
  min-width: 200px;
  font-size: 32px;

  @media (max-width: 860px) {
    border: 0px;
  }

  @media (max-width: 600px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
    flex-direction: column;
    align-items: baseline;

    padding: 10px;
  }
`;

const HeroImgMB = styled.div`
  background-image: url("${(props) => props.image_source}");
  min-height: 200px;
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    min-height: 200px;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Header = styled.div`
  height: 20px;

  background-color: green;

  bottom: 0;
`;

export default Top;
