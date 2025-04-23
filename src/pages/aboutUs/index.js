import React from "react";
import { styled } from "@mui/system";
import { TypeAnimation } from "react-type-animation";

const Index = () => {
  const MainDiv = styled("div")(
    ({ theme }) => `
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
          height:90vh;
    `
  );
  const Image = styled("img")(
    ({ theme }) => `
        height:440px;
        width:440px;
      `
  );

  return (
    <MainDiv>
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
          <h2
            style={{
              fontSize: "4em",
              display: "inline-block",
            }}
          >
            About Me
          </h2>

          <TypeAnimation
            sequence={[
              `I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, React Native, Next, Redux, Node.js, Express, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.`,
              1000,
            ]}
            wrapper="span"
            speed={70}
            style={{
              fontSize: "2em",
              display: "inline-block",
              width: "80%",
              textAlign: "center",
            }}
            repeat={Infinity}
          />
        </div>
        <div
          style={{
            width: "50%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Image
            src={require("../../components/images/aboutPage.png")}
            alt="logo"
          />
        </div>
      </div>
    </MainDiv>
  );
};

export default Index;
