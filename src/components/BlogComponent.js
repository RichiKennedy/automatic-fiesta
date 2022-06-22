import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: calc(10rem + 15vw);
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
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
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding-right: 0.5rem;
  padding-bottom: 1rem;
`;

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc } = props.blog;
  return (
    <Box to="/">
      <Image img={imgSrc} />

      <Title>{name}</Title>
      <HashTags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
        })}
      </HashTags>
      <Date>{date}</Date>
    </Box>
  );
};

export default BlogComponent;
