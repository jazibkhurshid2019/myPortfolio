import React from "react";
import styled, { keyframes } from "styled-components";

const moveAndFade = keyframes`
  0% {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    opacity: 1;
  }
  100% {
    transform: translate(0, 0);
    top: 25px;
    left: 24px;
    opacity: 1;
  }
`;

const SplashContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LogoName = styled.h1`
  font-size: 20px;
  color: #ffde59;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80px;
  transform: translate(-50%, -50%);
  animation: ${moveAndFade} 2s ease-in-out forwards;
`;

const Splash = () => {
  return (
    <SplashContainer>
      <LogoName>
        <span style={{ color: "white" }}>Jazib</span> Khurshid
      </LogoName>
    </SplashContainer>
  );
};

export default Splash;
