import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Instagram, Linkedin } from "../components/AllSvgs";
import { DarkTheme, lightTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : lightTheme.text};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        to={{ pathname: "https://github.com/RichiKennedy" }}
      >
        <Github
          width={25}
          height={25}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </NavLink>
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        to={{ pathname: "http://www.linkedin.com/in/richard-kennedy-818863ba" }}
      >
        <Linkedin
          width={25}
          height={25}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </NavLink>
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        to={{ pathname: "https://www.facebook.com/richi.kennedy/" }}
      >
        <Facebook
          width={25}
          height={25}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </NavLink>
      <NavLink
        style={{ color: "inherit" }}
        target="_blank"
        to={{ pathname: "https://www.instagram.com/richikennedy/" }}
      >
        <Instagram
          width={25}
          height={25}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </NavLink>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
