import React from "react";
import { styled } from "@mui/system";

const index = () => {
  const MainDiv = styled("div")(
    ({ theme }) => `
        display: flex;
        align-items: center;
        flex-direction:column;
        justify-content: center;
       
      `
  );
  const Image = styled("img")(
    ({ theme }) => `
        height:350px;
        width:100%;
      `
  );
  const ProfileImage = styled("img")(
    ({ theme }) => `
        height:350px;
      `
  );
  const Text = styled("p")(
    ({ theme }) => `
     margin: 40px 0px;
        font-size:2em;
        display:inline-block;
        background:linear-gradient(to right, black, rgb(255, 222, 89));
        background-clip:text;
        color:transparent;
        width:80%;
        text-align:center;
      `
  );
  return (
    <MainDiv>
      <Image src={require("../../components/images/contact.jpg")} alt="logo" />

      <Text>
        Thank you for your interest in getting in touch with me. I welcome your
        feedback, questions, and suggestions. If you have a specific question or
        comment, please feel free to email me directly at{" "}
        <strong>jazib9626@gmail.com</strong>. I make an effort to respond to all
        messages within 24 hours, although it may take me longer during busy
        periods. Alternatively, you can use the contact form on my website to
        get in touch. Simply fill out the required fields and I'll get back to
        you as soon as possible.
      </Text>

      <div style={{ display: "flex", margin: "40px 0px" }}>
        <ProfileImage
          src={require("../../components/images/profile.jpg")}
          alt="logo"
        />
        <div style={{ position: "relative" }}>
          <Image src={require("../../components/images/logo.png")} alt="logo" />
        </div>
      </div>
    </MainDiv>
  );
};

export default index;
