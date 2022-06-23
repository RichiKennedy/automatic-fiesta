import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "./AllSvgs";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  width: calc(10rem + 20vw);
  height: 35rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);

  display: inline-block;
  flex-direction: column;
  z-index: 5;
  overflow: hidden;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transition: all 0.3s ease;
  }
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
  font-weight: 300;
  padding-top: 1rem;
`;
const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid ${(props) => props.theme.text};
  background-position: center center;
  transition: transform 0.3s linear;

  ${Box}:hover & {
    transform: scale(1.02);
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  padding-top: 1rem;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding-right: 0.5rem;
  padding-bottom: 1rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
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
    cursor: pointer;
  }
`;

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
      cursor: pointer;
    }
  }
`;

// FRAMER-MOTION ANIMATION
const item = {
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

const BlogComponent = (props) => {
  const { name, description, tags, date, imgSrc, demo, github } = props.blog;
  return (
    <Box to="/" varients={item}>
      <Image img={imgSrc} />

      <Title>{name}</Title>
      <Description>{description}</Description>
      <HashTags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
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
  );
};

export default BlogComponent;
