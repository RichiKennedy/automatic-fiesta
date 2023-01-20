import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "./AllSvgs";
import { mediaQueries } from "./Themes";

const Box = styled.div`
  width: calc(12.5rem + 15vw);
  text-decoration: none;
  height: 23.5rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  ${mediaQueries(60)`
    width:calc(35vw);

  `};
  ${mediaQueries(50)`
    width:calc(60vw);

  `};
  ${mediaQueries(30)`
    height:22rem;

  `};

  ${mediaQueries(25)`
    height:20rem;
    padding:0.8rem;
    backdrop-filter: none;

  `};
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 70%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  ${mediaQueries(25)`
  
  `};
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const Description = styled.h4`
  font-weight: 400;
  padding: 0.5rem 0;
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 0 0 0 50px;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);
  ${Box}:hover & {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const Git = styled(NavLink)`
  padding-right: 5px;
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const ProjectComponent = (props) => {
  const { name, tags, date, imgSrc, description, demo, github } = props.project;
  return (
    <Container variants={Item}>
      <Box>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <Description>{description}</Description>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
        <Footer>
          <Link to={{ pathname: `${demo}` }} target="_blank">
            Visit
          </Link>
          <Git to={{ pathname: `${github}` }} target="_blank">
            <Github width={30} height={30} />
          </Git>
        </Footer>
      </Box>
    </Container>
  );
};

export default ProjectComponent;
