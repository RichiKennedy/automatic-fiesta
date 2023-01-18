import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, mediaQueries } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponents from "../subComponents/ParticleComponents";
import BigTitle from "../subComponents/BigTitle";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
            flex-direction:column-reverse;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-top:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-top:4rem;
            }
           
  `};
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-family: "Ubuntu Mono", monospace;

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
    & > *:first-child {
      margin-right: 1rem;
    }
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.7em + 1vw);
  padding: 0.5rem 0;
  font-weight: 300;

  width: 100%;

  ${mediaQueries(50)`
            font-size: calc(0.6em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.4em + 1vw);

              

  `};

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    margin-left: 2rem;
    left: 0;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <PowerButton />
        <SocialIcons theme="light" />
        <ParticleComponents theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love being creative with design, expressing a companies values and
            characteristics through visual layout.
          </Description>

          <Description>
            <strong> Skills </strong>
            <p>
              Imagination, Creativity, Communication Research
              <br />
            </p>
          </Description>
          <Description>
            <strong> Tools </strong>
            <p>Figma</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value my ability to be adaptive and listen to the needs of the
            project and business at all times.
          </Description>
          <Description>
            <strong> Skills </strong>
            <p>
              Javascript, React, React-Hooks, Tailwind, Next.JS, Accessability,
              <br />
              Styled-Components, MongoDB, SEO
            </p>
          </Description>
          <Description>
            <strong> Tools </strong>
            <p>VScode, Github, Jest, Bitbucket</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="2%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
