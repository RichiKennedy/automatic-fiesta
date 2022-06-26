import React from "react";
import styled from "styled-components";
import { DarkTheme, lightTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  font-family: "Rock Salt", cursive;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : lightTheme.text};

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>RK</Logo>;
};

export default LogoComponent;
