import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import CVpdf from "../assets/CV/RichardGKennedy_CV2.pdf";

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
  /* background-color: rgb(245, 235, 245); */
  /* background-color: rgb(0, 150, 57); */
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
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
const SKILLS = styled(NavLink)`
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

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block ")};
    padding-top: 1rem;
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
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <Container>
        <Darkdiv click={click} />
        <PowerButton />

        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click here</span>
        </Center>
        <Contact
          target="_blank"
          to={{ pathname: "mailto:richardgrahamkennedy@gmail.com" }}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 0.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 0.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            say hi...
          </motion.h2>
        </Contact>
        <BLOG to="/blog" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 0.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 0.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
        </BLOG>

        <Resume click={click}>
          <a class="{s.downLoadWrapper}" href={CVpdf} download>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 0.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 0.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              CV
            </motion.h2>
          </a>
        </Resume>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 0.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 0.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 0.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 0.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
