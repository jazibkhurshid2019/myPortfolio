import React, { useState } from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const Index = () => {
  const MainDiv = styled("div")(
    ({ theme }) => `
     height:90vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

    `
  );
  const Image = styled("img")(
    ({ theme }) => `
        height:440px;
        width:440px;
      `
  );

  const [position, setPosition] = useState({
    left: window.innerWidth - 200,
    bottom: 5,
  });

  const handleHover = () => {
    const buttonWidth =
      document.getElementById("funny-button")?.offsetWidth || 0;
    const buttonHeight =
      document.getElementById("funny-button")?.offsetHeight || 0;
    const newLeftPosition = Math.random() * (window.innerWidth - buttonWidth);
    const newTopPosition = Math.random() * (window.innerHeight - buttonHeight);
    setPosition({ left: newLeftPosition, bottom: newTopPosition });
  };

  const FunnyButton = styled(Button)(
    ({ theme }) => `
    padding:10px;
    text-transform: capitalize;
    border:1px solid linear-gradient(to right, black, rgb(255, 222, 89));
      color: white;
      transition: left 0.3s ease-in-out, top 0.3s ease-in-out;
      cursor: pointer;
      position: absolute;
      left: ${position.left}px;
      bottom: ${position.bottom}px;
      background: linear-gradient(to right, black, rgb(255, 222, 89));
    `
  );

  return (
    <MainDiv>
      {/* <h1>Welcome To the Home Page</h1> */}

      <FunnyButton id="funny-button" onMouseEnter={handleHover}>
        Click Me For Free Hire
      </FunnyButton>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(to right, black, yellow)",
          backgroundClip: "text",
          color: "transparent",
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
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              background: "linear-gradient(to right, black, rgb(255, 222, 89))",
              backgroundClip: "text",
              color: "transparent",
              whiteSpace: "nowrap",
            }}
            repeat={Infinity}
          />
          <h2
            style={{
              fontSize: "2em",
              display: "inline-block",
              background: "linear-gradient(to right, black, rgb(255, 222, 89))",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Welcome to my website!
          </h2>
          <h2
            style={{
              fontSize: "2em",
              display: "inline-block",
              background: "linear-gradient(to right, black, rgb(255, 222, 89))",
              backgroundClip: "text",
              color: "transparent",
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
              background: "linear-gradient(to right, black, rgb(255, 222, 89))",
              backgroundClip: "text",
              color: "transparent",
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
