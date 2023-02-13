import React from "react";
import styled, { ThemeProvider } from "styled-components";
import BigTitle from "../subComponents/BigTitle";
import ParticleComponents from "../subComponents/ParticleComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme, mediaQueries } from "./Themes";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQueries(30)`
    justify-content: flex-end;
    align-items: start; 
  `};
  ${mediaQueries(25)`
     justify-content: center;
    
  `};
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
          width: 75%;
          height: 60vh;
          backdrop-filter: blur;
          margin-top:2rem;
          font-size: calc(0.5rem + 1vw);
          transform: translateY(50px);   
          padding: 1rem;
          margin-right: 10px;
          align-items: flex-start;
          overflow: scroll;

  `};

  ${mediaQueries(25)`
          width: 90%;
          height: 40vh;
          padding: 1rem;
          font-size: calc(0.4rem + 1vw);
          margin-right: 0px;    
  `};
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
        <Main>
          I'm a front-end developer living in Stockholm, Sweden. My full-time
          Frontend programming diploma program at Hyper Island is soon to come
          to an end, and I'm currently an intern at Mobiento/Deloitte Digital.
          <br />
          <br />
          Frontend development is my absolute passion and devotion. I would
          define myself as enthusiastic, positive, and inquisitive. I enjoy a
          challenge and work well both independently and in teams, but what sets
          me apart from other candidates is my eagerness to learn and my desire
          to take advantage of every opportunity to improve my development
          skills.
          <br />
          <br />
          Because I place a lot of importance on preserving a good work-life
          balance, when I'm not coding, I like to go skiing, explore new places,
          and have coffee with friends in the city.
        </Main>
        <BigTitle text="ABOUT" top="3%" right="2%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
