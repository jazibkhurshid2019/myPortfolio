import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
  Switch,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const LogoName = styled("h1")(
  () => `
     font-size:20px;
     color:#ffde59;
    `
);

const DownloadButton = styled("button")(({ theme }) => ({
  cursor: "pointer",
  padding: "5px 10px",
  textTransform: "capitalize",
  border: `1px solid ${theme.palette.mode === "light" ? "black" : "white"}`,
  color: theme.palette.mode === "light" ? "black" : "white",
  backgroundColor: "transparent",
  "&:hover": {
    color: "#ffde59",
    border: `1px solid #ffde59`,
  },
}));

const TopNavigation = ({ toggleMode, mode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [pageName, setPageName] = React.useState(
    window.location.pathname.split("/")[1]
  );
  const handleChange = (label) => {
    setPageName(label);
  };
  useEffect(() => {
    if (window.location.pathname === "/") {
      setPageName("home");
    }
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDownload = () => {
    const fileUrl = "/JazibCv.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "JazibCv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuItems = [
    { text: "Home", path: "/home", label: "home" },
    { text: "About", path: "/about", label: "about" },
    { text: "Projects", path: "/projects", label: "projects" },
    { text: "Skills", path: "/skills", label: "skills" },
    { text: "Contact", path: "/contact", label: "contact" },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography variant="h6">Menu</Typography>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
          <div onClick={toggleMode} style={{ cursor: "pointer" }}>
            {mode === "dark" ? (
              <div style={{ transform: "rotate(45deg)" }}>
                <Brightness3Icon />
              </div>
            ) : (
              <div style={{ color: "#ffde59", transform: "rotate(45deg)" }}>
                <WbSunnyIcon />
              </div>
            )}
          </div>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </div>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={() => {
              handleDrawerToggle();
              handleChange(item.label);
            }}
            sx={{
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light" ? "#f5f5f5" : "#2d2d2d",
              },
            }}
          >
            <ListItemText
              primary={item.text}
              sx={{
                // color: theme.palette.text.primary,
                color: `${pageName === item.label ? "#ffde59" : "inherit"}`,
                textAlign: "left",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: { xs: 56, sm: 64 },
          px: { xs: 2, sm: 3 },
          maxWidth: "100%",
        }}
      >
        <LogoName>
          <span style={{ color: mode === "light" ? "black" : "white" }}>
            Jazib
          </span>{" "}
          Khurshid
        </LogoName>

        {isMobile ? (
          <div style={{ display: "flex" }}>
            <DownloadButton onClick={handleDownload}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                CV
                <FileDownloadIcon />
              </div>
            </DownloadButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                ml: 2,
                display: { xs: "flex", sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  width: 250,
                  boxSizing: "border-box",
                },
              }}
            >
              {drawer}
            </Drawer>
          </div>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: { sm: 2, md: 4 },
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => handleChange(item.label)}
                sx={{
                  textDecoration: "none",
                  color: `${pageName === item.label ? "#ffde59" : "inherit"}`,
                  fontSize: { sm: "0.9rem", md: "1rem" },
                  "&:hover": {
                    color: "#ffde59",
                  },
                }}
              >
                {item.text}
              </Typography>
            ))}
            <div onClick={toggleMode} style={{ cursor: "pointer" }}>
              {mode === "dark" ? (
                <div style={{ transform: "rotate(45deg)" }}>
                  <Brightness3Icon />
                </div>
              ) : (
                <div style={{ color: "#ffde59", transform: "rotate(45deg)" }}>
                  <WbSunnyIcon />
                </div>
              )}
            </div>
            <DownloadButton onClick={handleDownload}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                CV
                <FileDownloadIcon />
              </div>
            </DownloadButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
