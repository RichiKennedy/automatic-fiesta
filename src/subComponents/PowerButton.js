// HOME BUTTON
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 5px 3px rgba(0, 255, 0, 0.4);
  }
  & > *:first-child {
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={25} height={25} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
