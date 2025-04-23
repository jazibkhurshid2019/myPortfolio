import React, { useState } from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Skills from "../../components/skills";

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
            Skills
          </h2>
          <Skills />
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
            src={require("../../components/images/skillsPage.png")}
            alt="logo"
          />
        </div>
      </div>
    </MainDiv>
  );
};

export default Index;
