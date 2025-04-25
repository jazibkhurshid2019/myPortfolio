import React from "react";
import styled, { keyframes } from "styled-components";

const moveAndFade = keyframes`
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
      50% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
      100% {
    transform: translate(-565%, -1120%);
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

const LogoImage = styled.img`
  position: absolute;
  height: 40px !important;
  top: 50%;
  left: 50%;
  height: 80px;
  transform: translate(-50%, -50%);
  animation: ${moveAndFade} 3s ease-in-out forwards;
`;

const Splash = () => {
  return (
    <SplashContainer>
      <LogoImage
        src={require("../../components/images/light.png")}
        alt="logo"
      />
    </SplashContainer>
  );
};

export default Splash;
