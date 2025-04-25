import React, { useEffect, useState } from "react";
import TopNavigation from "./components/topNavigation";
import MainBody from "./components/main";
import Splash from "./pages/splash";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // time for splash

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <Splash />
  ) : (
    <>
      <TopNavigation />
      <MainBody />
    </>
  );
};

export default App;
