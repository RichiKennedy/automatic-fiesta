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
    padding-right: 10px;       
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
          width: 67vw;
          height: auto;
          backdrop-filter: blur;
          margin-top:2rem;
          font-size: calc(0.5rem + 1vw);
          transform: translateY(50px);       
  `};

  ${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.4rem + 1vw);        
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
          I'm a Frontend Developer living in Stockholm, Sweden. currently I'm an
          intern at Mobiento / Deloitte Digital and set to graduate from Hyper
          Island's Frontend development, full-time diploma program.
          <br />
          <br />
          Frontend is my passion, i'm completely obsessed. My personality in
          three words would be positive, passionate and inquisitive. I love to
          be challenged and have a strong ability to work in teams and
          independently, but most of all I am eager to learn and look for any
          opportunity to better my skills as a developer.
          <br />
          <br />
          When im not coding, I enjoy snowboarding, going for a coffee in the
          city. Currently I'm on the lookout for a junior fronted role to
          kickstart my career as a Frontend developer.
        </Main>
        <BigTitle text="ABOUT" top="3%" right="2%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
