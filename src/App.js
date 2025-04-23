import { Button } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/system";
import TopNavigation from "./components/topNavigation";
import MainBody from "./components/main";

const App = () => {
  return (
    <>
      <TopNavigation />
      <MainBody />
    </>
  );
};

export default App;
