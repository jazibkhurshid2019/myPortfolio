import React, { useEffect, useRef, useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Divider, Space, Tour } from "antd";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const TopNavigation = () => {
  const [value, setValue] = React.useState(
    window.location.pathname.split("/")[1]
  );
  useEffect(() => {
    if (window.location.pathname === "/") {
      setValue("home");
    }
  }, []);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: "Home Page",
      description: "Look all the details here.",
      // cover: (
      //   <img
      //     alt="tour.png"
      //     src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
      //   />
      // ),
      target: () => ref1.current,
    },
    {
      title: "About",
      description: "personnel information",
      target: () => ref2.current,
    },
    {
      title: "Contact",
      description: "Click here to contact me",
      target: () => ref3.current,
    },
  ];
  // useEffect(() => {
  //   setOpen(true);
  // }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const NavigationBar = styled("div")(
    ({ theme }) => `
    position:sticky;
    top:0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:20px;
        background-color:black;
      `
  );
  const NavList = styled("ul")(
    ({ theme }) => `
        display: inline-flex;
        list-style: none;
        color:white;
      `
  );
  const LogoName = styled("img")(
    ({ theme }) => `
        height:40px;
      `
  );
  const DownloadButton = styled(Button)(
    ({ theme }) => `
    text-transform: capitalize;
    border:1px solid white;
      color: white;
      background: linear-gradient(to right, black, rgb(255, 222, 89));
      &:hover {
        background: linear-gradient(to right, rgb(255, 222, 89), black);
      }
    `
  );
  const IndTab = styled(Tab)(
    ({ theme }) => `
    text-transform: capitalize;
      color: white;
      &:hover {
        color:#ffde59;
      }
    `
  );

  const handleDownload = () => {
    const fileUrl = "/JazibCv.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "JazibCv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <NavigationBar>
      <LogoName src={require("./images/light.png")} alt="logo" />
      <NavList>
        <Box
          sx={{ width: "100%", display: "flex", alignItems: "center", gap: 5 }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="white"
            // indicatorColor="secondary"
            TabIndicatorProps={{ style: { background: "#ffde59" } }}
            aria-label="wrapped label tabs example"
          >
            <IndTab
              // ref={ref1}
              value="home"
              label="Home"
              component={Link}
              to="/home"
              wrapped
            />
            <IndTab
              // ref={ref2}
              value="about"
              label="About"
              component={Link}
              to="/about"
              wrapped
            />
            <IndTab
              // ref={ref2}
              value="skills"
              label="Skills"
              component={Link}
              to="/skills"
              wrapped
            />
            <IndTab
              // ref={ref3}
              value="contact"
              label="Contact"
              component={Link}
              to="/contact"
              wrapped
            />
          </Tabs>
          <DownloadButton onClick={handleDownload}>Download CV</DownloadButton>
        </Box>
      </NavList>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </NavigationBar>
  );
};

export default TopNavigation;
