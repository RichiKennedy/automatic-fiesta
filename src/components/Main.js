import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import CVpdf from "../assets/CV/RichardKennedyCV.pdf";
import { mediaQueries } from "./Themes";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Resume = styled.div`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 37.5%;
  left: 2.5rem;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;

  a {
    color: inherit;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const PROJECTS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg)
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease;
  color: #000000;

  .yinyang {
    color: inherit;
    text-decoration: none;
    list-style: none;
    color: #000000;
  }

  span {
    color: #000000;
    transform: translateY(-15px);
  }

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
    text-decoration: none;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block ")};
    padding-top: 1rem;
    text-decoration: none;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`;

const Darkdiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  border: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50% " : "0%")};
  height: ${(props) => (props.click ? "100% " : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
       right:0;
       width: 100%;
       transition: width 0.5s ease, height 1s ease 0.5s;
      `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [path, setpath] = useState("");

  const mq = window.matchMedia("(max-width: 50em)").matches;
  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };

  return (
    <MainContainer
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={path === "about" || path === "skills" ? moveY : moveX}
      transition={{ duration: 0.5 }}
    >
      <Darkdiv click={+click} />
      <Container>
        <PowerButton />
        {mq ? (
          <SocialIcons theme="light" />
        ) : (
          <SocialIcons theme={click ? "dark" : "light"} />
        )}
        <Center click={+click}>
          {mq ? (
            <YinYang
              className="yinyang"
              onClick={() => handleClick()}
              width={click ? 80 : 150}
              height={click ? 80 : 150}
              fill="currentColor"
            />
          ) : (
            <YinYang
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
          )}
          <span
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          >
            click here
          </span>
        </Center>
        {mq ? (
          <Contact
            click={+click}
            target="_blank"
            to={{ pathname: "mailto:richardgrahamkennedy@gmail.com" }}
          >
            <motion.h3
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi
            </motion.h3>
          </Contact>
        ) : (
          <Contact
            click={+false}
            target="_blank"
            to={{ pathname: "mailto:richardgrahamkennedy@gmail.com" }}
          >
            <motion.h3
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi
            </motion.h3>
          </Contact>
        )}

        {mq ? (
          <Resume
            click={+click}
            onClick={() => setpath("projects")}
            to="/projects"
          >
            <a className="{s.downLoadWrapper}" href={CVpdf} download>
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                CV
              </motion.h2>
            </a>
          </Resume>
        ) : (
          <Resume
            click={+false}
            onClick={() => setpath("projects")}
            to="/projects"
          >
            <a className="{s.downLoadWrapper}" href={CVpdf} download>
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                CV
              </motion.h2>
            </a>
          </Resume>
        )}

        <BottomBar>
          <ABOUT
            onClick={() => setClick(false)}
            click={mq ? +false : +click}
            to="/about"
          >
            <motion.h2
              onClick={() => setpath("about")}
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </ABOUT>

          <PROJECTS to="/projects">
            <motion.h2
              onClick={() => setpath("skills")}
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </motion.h2>
          </PROJECTS>
        </BottomBar>
      </Container>
      {click ? <Intro click={+click} /> : null}
    </MainContainer>
  );
};

export default Main;
