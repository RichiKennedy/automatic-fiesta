import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import BigTitle from "../subComponents/BigTitle";
import ParticleComponents from "../subComponents/ParticleComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme, mediaQueries } from "./Themes";

import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px)}

`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 60vw;
  height: 30vw;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(0.4rem + 1vw);
  backdrop-filter: blur(4px);
  font-family: "Ubuntu", monospace;

  ${mediaQueries(85)`
         
         height: 60vh;


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: 50vh;
          backdrop-filter: none;
          margin-top:2rem;
          font-size: calc(0.4rem + 1vw);

  `};

  ${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.4rem + 1vw);
  `};

  /* position: absolute; */
  /* left: calc(5rem + 5vw);
  top: 10rem; */
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        key="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponents theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="" />
        </Spaceman>
        <Main>
          I'm an Australian Frontend Developer living in Stockholm, Sweden.
          currently I am an intern at Mobiento / Deloitte Digital and set to
          graduate from HyperIsland's Frontend development, full-time diploma
          program in Stockholm, Sweden
          <br />
          <br />
          Frontend is my passion, i'm completely obsessed. My personality in
          three words would be positive, passionate and inquisitive. I love to
          be challenged and have a strong ability to work in teams and
          independently, but most of all I am eager to learn and look for any
          opportunity to better my skills as a developer.
          <br />
          <br />
          When im not coding, I enjoy snowboarding, surfing and coffee tasting
          in the city. Currently I'm on the lookout for a junior fronted role to
          kickstart my career as a Frontend developer.
        </Main>
        <BigTitle text="ABOUT" top="3%" right="2%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
