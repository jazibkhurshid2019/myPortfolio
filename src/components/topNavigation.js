import React, { useEffect, useRef, useState } from "react";
import { Tour } from "antd";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="white" d="M12 3a9 9 0 000 18 9 9 0 000-18zm0 16a7 7 0 010-14 7 7 0 010 14z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#8796A5",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#FFD700", // gold color for sun
    width: 32,
    height: 32,
    "&:before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="white" d="M6.76 4.84l-1.8-1.79-1.42 1.41 1.79 1.8 1.43-1.42zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.66 2.05l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM17 13h3v-2h-3v2zm-5 5a5 5 0 100-10 5 5 0 000 10zm0 4h2v-3h-2v3zm7.66-2.05l1.79 1.8 1.41-1.41-1.79-1.8-1.41 1.41zM4.24 17.66l-1.79 1.8 1.41 1.41 1.8-1.79-1.42-1.42z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    backgroundColor: "#aab4be",
    opacity: 1,
  },
}));

const TopNavigation = ({ toggleMode, mode }) => {
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
    () => `
    z-index:9999;
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
    () => `
        display: inline-flex;
        list-style: none;
        color:white;
      `
  );
  const LogoName = styled("img")(
    () => `
        height:40px;
      `
  );
  const DownloadButton = styled("button")(
    () => `
    cursor:pointer;
    padding:10px 15px;
    text-transform: capitalize;
    border:1px solid white;
      color: white;
      background-color: black;
      &:hover {
        background-color:#ffffff33;
      }
    `
  );
  const IndTab = styled(Tab)(
    () => `
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
              value="projects"
              label="Projects"
              component={Link}
              to="/projects"
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
          <ThemeSwitch checked={mode === "dark"} onChange={toggleMode} />
          <DownloadButton onClick={handleDownload}>Download CV</DownloadButton>
        </Box>
      </NavList>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </NavigationBar>
  );
};

export default TopNavigation;
