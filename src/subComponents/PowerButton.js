// HOME BUTTON
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";
import { mediaQueries } from "../components/Themes";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  text-decoration: none;
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid black;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  .svg {
    color: #000000;
  }

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    color: inherit;
  }

  ${mediaQueries(40)`
   width: 2rem;
  height: 2rem;
      svg{
        width:20px;
        height:20px;
      }

  `};
  .link {
    color: #000000;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/" className="link">
        <PowerBtn className="svg" width={25} height={25} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
