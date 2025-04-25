import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const FunnyButton = styled(Button)(
  () => `
    padding: 10px;
    text-transform: capitalize;
    border: 1px solid transparent;
    color: white;
    transition: left 0.3s ease-in-out, bottom 0.3s ease-in-out;
    cursor: pointer;
    position: absolute;
    background: black;
  `
);

const Index = () => {
  const MainDiv = styled("div")(
    () => `
     height: calc(100vh - 88px);
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     position: relative;

     
    `
  );
  const Image = styled("img")(
    () => `
    height: 440px;
    width: 440px;
  `
  );

  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const buttonWidth = buttonRef.current?.offsetWidth || 0;
    const buttonHeight = buttonRef.current?.offsetHeight || 0;

    const startX = (containerRef.current.offsetWidth - buttonWidth) / 2;
    const startY = (containerRef.current.offsetHeight - buttonHeight) / 2;

    button.style.transform = `translate(${startX - 10}px, ${startY - 10}px)`;
  }, []);

  const handleHover = () => {
    const button = buttonRef.current;
    if (!button) return;
    const buttonWidth = buttonRef.current?.offsetWidth || 0;
    const buttonHeight = buttonRef.current?.offsetHeight || 0;

    const newX =
      (Math.random() * (containerRef.current.offsetWidth - buttonWidth)) / 2;
    const newY =
      (Math.random() * (containerRef.current.offsetHeight - buttonHeight)) / 2;

    button.style.transform = `translate(${newX}px, ${newY}px)`;
  };

  return (
    <MainDiv ref={containerRef}>
      <FunnyButton
        ref={buttonRef}
        onMouseEnter={handleHover}
        style={{
          background: "black",
          position: "absolute",
          transition: "transform 0.3s ease-in-out",
          transform: "translate()",
        }}
      >
        Click Here For Free Hire
      </FunnyButton>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TypeAnimation
            sequence={[`Hello,`, 1000]}
            wrapper="span"
            cursor={false}
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            repeat={Infinity}
          />
          <h2
            style={{
              fontSize: "2em",
              display: "inline-block",
            }}
          >
            Welcome to my website!
          </h2>
          <h2
            style={{
              fontSize: "2em",
              display: "inline-block",
            }}
          >
            My Name is Jazib Khurshid
          </h2>

          <TypeAnimation
            sequence={[`I'm a Full Stack Developer`, 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            repeat={Infinity}
          />
        </div>
        <div
          style={{
            width: "50%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <Image
            src={require("../../components/images/mainPage.png")}
            alt="logo"
          />
        </div>
      </div>
    </MainDiv>
  );
};

export default Index;
