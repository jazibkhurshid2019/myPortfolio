import React, { useEffect, useState, useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";
import TopNavigation from "./components/topNavigation";
import MainBody from "./components/main";
import Splash from "./pages/splash";
import UnderwaterEffect from "./components/underwaterEffect";
import { getDesignTokens } from "./theme'/theme";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {showSplash ? (
          <Splash />
        ) : (
          <>
            <UnderwaterEffect />
            <Box
              component="header"
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1100,
                width: "100%",
              }}
            >
              <TopNavigation toggleMode={toggleMode} mode={mode} />
            </Box>
            <Box
              component="main"
              sx={{
                backgroundColor: theme.palette.body.primary,
                flexGrow: 1,
                width: "100%",
                mt: { xs: 7, sm: 8 },
                px: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Container maxWidth="xl">
                <MainBody />
              </Container>
            </Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
