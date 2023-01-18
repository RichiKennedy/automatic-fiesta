import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Me from "../assets/Images/bitmoji.png";
import { motion } from "framer-motion";
import { mediaQueries } from "./Themes";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  ${mediaQueries(50)`
    width: 70vw;
    height: 90vh
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }
`;

const SubBox = styled.div`
  position: relative;
  width: 50%;
  display: flex;

  .myPic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 550px;
    height: auto;
  }

  ${mediaQueries(50)`
      width: 100%;
    height: 100%;
      .myPic {
        width: 350px;
  `};

  ${mediaQueries(40)` 
      .myPic {   
    width: 330px;
  }
  `};

  ${mediaQueries(30)`
      .myPic {
    width: 350px;
  }
  `};

  ${mediaQueries(20)`
     .myPic {
   width: 85%;
 }
 `};
`;

const Text = styled.div`
  font-size: calc(1em + 0.7vw);
  color: ${(props) => props.theme.body};
  padding: 1.2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba({props.theme.bodyRgba},0.6)`};
    font-size: calc(1rem + 0.7vw);
    font-weight: 300;

    ${mediaQueries(60)`
        justify-content: space-around;
  `};
    ${mediaQueries(40)`
        font-size: calc(0.5rem + 1vw);
  `};
  }
  ${mediaQueries(40)`
        font-size: calc(1rem + 1.5vw);
  `};

  ${mediaQueries(20)`
         padding: 1rem;
  `};
`;

const Intro = () => {
  const [height, setHeight] = useState("55vh");

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hello,</h1>
          <h2>
            I'm <br /> Richi Kennedy.
          </h2>
          <h3>A Frontend developer intern at Mobiento / Deloitte Digital.</h3>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="myPic" src={Me} alt="ProfilePic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
