import React from "react";
import styled, { ThemeProvider } from "styled-components";
import BigTitle from "../subComponents/BigTitle";

import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponents from "../subComponents/ParticleComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme } from "./Themes";

// import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const float = keyf`
// 0% { transform: translateY(-10px)}
// 50% { transform: translateY(15px) translateX(15px)}
// 100% { transform: translateY(-10px)}

// `;

// const Spaceman = styled.div`
//   position: absolute;
//   top: 10%;
//   right: 10%;
//   width: 20vw;
//   animation: ${float} 4s ease infinite;

//   img {
//     width: 100%;
//     height: auto;
//   }
// `;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 30vw;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  /* position: absolute; */
  /* left: calc(5rem + 5vw);
  top: 10rem; */

  font-family: "Ubuntu", monospace;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponents theme="dark" />

        {/* <Spaceman>
          <img src={astronaut} alt="" />
        </Spaceman> */}
        <Main>
          I'm an Frontend developer student from Australia. Currently attending
          HyperIsland in Stockholm, Sweden
          <br />
          <br />
          I'm very interested in the whole frontend stack and learning new and
          exciting concepts. I love solving complex problems and turning them
          into beautiful websites.
          <br />
          <br />
          When im not coding, I enjoy snowboarding, surfing and coffee tasting
          in the city. Currently I'm on the lookout for an internship to
          kickstart my career as a Frontend developer.
        </Main>
        <BigTitle text="ABOUT" top="3%" right="2%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
