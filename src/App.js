import React, { useEffect, useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import TopNavigation from "./components/topNavigation";
import MainBody from "./components/main";
import Splash from "./pages/splash";
import UnderwaterEffect from "./components/underwaterEffect";
import { getDesignTokens } from "./theme/theme"; // <-- import from new file

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mode, setMode] = useState("dark"); // for switching between light/dark mode

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <UnderwaterEffect />
          <TopNavigation toggleMode={toggleMode} mode={mode} />
          <MainBody />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
