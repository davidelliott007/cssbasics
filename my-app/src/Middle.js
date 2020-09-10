import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import HeroSrc from "./images/shopify_masters_hero.jpg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Middle() {
  return (
    <Wrapper>
      <Player>
        <AudioPlayer
          src="https://dts.podtrac.com/redirect.mp3/cdn.simplecast.com/audio/1153d0/1153d031-e1ea-4aa1-8df0-78aa8be2c970/d51660c6-600d-4376-92ea-0e270af97b46/ep374-healthish_tc.mp3"
          customAdditionalControls={[]}
          autoPlay={false}
          customVolumeControls={[]}
          showJumpControls={false}
          showControls={false}
          style={{ outline: "none", paddingBottom: "0px" }}
          // customIcons={{ play: noPlay }}
          // other props here
        />
      </Player>
      <HeroDiv></HeroDiv>
      <ScrollText>
        Header dave Header dave Header dave Header dave Header dave Header dave
        Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        Header dave Header dave Header dave Header dave Header dave Header dave
        Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        Header dave Header dave Header dave Header dave Header dave Header dave
        Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        Header dave Header dave Header dave Header dave Header dave Header dave
        Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        Header dave Header dave Header dave Header dave Header dave Header dave
        Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        Header dave Header dave Header dave Header dave Header dave Header dave
        Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        Header dave Header dave Header dave Header dave Header dave Header dave
        Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        Header dave Header dave Header dave Header dave Header dave Header dave
        Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
        daveHeader dave Header dave Header dave Header dave Header dave Header
        dave Header dave Header dave Header dave Header dave Header dave Header
      </ScrollText>
      <Footer>FOOTER</Footer>
    </Wrapper>
  );
}

const ScrollText = styled.div`
  overflow: scroll;
  width: 80%;
  scrollbar-width: 10px;
  background-color: purple;
  margin: auto;
`;

const Wrapper = styled.div`
  background-color: grey;
  flex-grow: 4;
`;

const Footer = styled.div`
  min-height: 10%;
  max-height: 20%;

  background-color: green;
`;

const HeroDiv = styled.div``;

const Player = styled.div`
  max-width: 860px;
  min-width: 200px;
  margin: auto;
  padding-top: 10px;
  @media (max-width: 600px) {
    padding-top: 5px;
  }
`;

export default Middle;
